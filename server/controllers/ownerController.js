import fs from "fs";
import { toFile } from "@imagekit/nodejs";
import imageKit from "../configs/imageKit.js";

import Car from "../models/Car.js";
import User from "../models/User.js";
import Booking from "../models/Booking.js";

export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list your cars" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image required" });
    }

    let carData;
    try {
      carData = JSON.parse(req.body.carData);
    } catch {
      return res.status(400).json({ success: false, message: "Invalid car data format" });
    }

    
    const uploadResponse = await imageKit.files.upload({
      file: await toFile(req.file.buffer, req.file.originalname),
      fileName: req.file.originalname,
      folder: "/cars",
    });

    const image = imageKit.helper.buildSrc({
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
      src: uploadResponse.url,
      transformation: [
        { width: 1200, quality: 80, format: "webp" },
      ],
    });

    await Car.create({ ...carData, owner: _id, image });

    res.status(201).json({ success: true, message: "Car Added Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getOwnerCars = async (req, res) => {
  try {
    const { _id } = req.user;
    const cars = await Car.find({ owner: _id });
    res.json({ success: true, cars });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const toggleCarAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;

    const car = await Car.findById(carId);
    if (!car) return res.json({ success: false, message: "Car not found" });
    if (car.owner.toString() !== _id.toString())
      return res.json({ success: false, message: "Unauthorized" });

    car.isAvailable = !car.isAvailable;
    await car.save();

    res.json({ success: true, message: "Availablity Toggled" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;

    const car = await Car.findById(carId);
    if (!car) return res.json({ success: false, message: "Car not found" });
    if (car.owner.toString() !== _id.toString())
      return res.json({ success: false, message: "Unauthorized" });

    car.owner = null;
    car.isAvailable = false;
    await car.save(); 

    res.json({ success: true, message: "Car removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;

    if (role !== "owner")
      return res.json({ success: false, message: "Unauthorized" });

    const cars = await Car.find({ owner: _id });
    const bookings = await Booking.find({ owner: _id })
      .populate("car")
      .sort({ createdAt: -1 });

    const pendingBookings = bookings.filter(
      (b) => b.status === "pending"
    );

    const confirmedBookings = bookings.filter(
      (b) => b.status === "confirmed"
    );

    const monthlyRevenue = confirmedBookings.reduce(
      (acc, booking) => acc + booking.price,
      0
    );

    res.json({
      success: true,
      dashboardData: {
        totalCars: cars.length,
        totalBookings: bookings.length,
        pendingBookings: pendingBookings.length,
        completedBookings: confirmedBookings.length,
        recentBookings: bookings.slice(0, 3),
        monthlyRevenue,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateUserImage = async (req, res) => {
  try {
    const { _id } = req.user;

    if (!req.file) {
      return res.json({ success: false, message: "Image required" });
    }

    const uploadResponse = await imageKit.files.upload({
      file: await toFile(req.file.buffer, req.file.originalname),
      fileName: req.file.originalname,
      folder: "/users",
    });

    const image = imageKit.helper.buildSrc({
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
      src: uploadResponse.url,
      transformation: [
        {
          width: 400,
          height: 300,
          crop: "maintain_ratio",
          quality: 80,
          format: "webp",
        },
      ],
    });

    await User.findByIdAndUpdate(_id, { image });

    res.json({
      success: true,
      message: "Profile image updated",
      image,
    });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};