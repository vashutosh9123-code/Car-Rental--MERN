import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        if (!process.env.MOGO_DB_URL) {
            console.error('MongoDB connection failed: MOGO_DB_URL is not defined in environment variables');
            return;
        }
        await mongoose.connect(process.env.MOGO_DB_URL).then(() => {
            console.log('MongoDB connected successfully');
        })
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
    }
}

export default connectDB;