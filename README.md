# Car Rental Application (MERN Stack)

A full-stack Car Rental application built with the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to browse available cars, check availability, and make bookings. Vehicle owners can manage their fleet, track bookings, and oversee their rental business.

## Features

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **Role-Based Access**: 
  - **Customers**: Browse cars, search by location and date, book vehicles, and view booking history.
  - **Owners**: Add and manage vehicles, approve/reject booking requests, and view the dashboard.
- **Dynamic Search & Filtering**: Check real-time vehicle availability based on pickup/return dates and location.
- **Modern UI**: Clean, responsive, and animated user interface built with Tailwind CSS and Framer Motion.
- **Global Error Handling**: Integrated Axios interceptors to gracefully handle authentication and API errors.

## Tech Stack

### Frontend
- **React** (via Vite)
- **Tailwind CSS** for styling
- **Framer Motion** for smooth UI animations
- **React Router** for navigation
- **Axios** for API requests
- **React Hot Toast** for notifications

### Backend
- **Node.js & Express**
- **MongoDB** with Mongoose ODM
- **JSON Web Tokens (JWT)** for authentication
- **Bcrypt.js** for secure password hashing
- **Multer** for handling image uploads

## Prerequisites

Before running the application locally, ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (Local instance or MongoDB Atlas URI)

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd "Car Rental -MERN"
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   ```
   Start the backend server:
   ```bash
   npm run dev 
   # or node server.js
   ```

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   ```
   Create a `.env` file in the `client` directory:
   ```env
   VITE_BASE_URL=http://localhost:3000
   VITE_CURRENCY=₹
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Open Application**
   Visit `http://localhost:5173` (or the port specified by Vite) in your browser.

## API Endpoints Overview

- `POST /api/user/register` - Create a new user account
- `POST /api/user/login` - Authenticate user & get token
- `GET /api/user/data` - Get authenticated user profile
- `GET /api/user/cars` - Fetch listed cars
- `POST /api/bookings/create` - Create a new car booking (Protected)
- `GET /api/bookings/user` - Get bookings for the authenticated customer (Protected)
- `GET /api/bookings/owner` - Get bookings for owner fleet (Protected)

## License

This project is licensed under the MIT License.
