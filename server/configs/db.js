import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
            console.log('MongoDB connected successfully');
        })
    }catch(err){
        console.error('MongoDB connection failed:', err.message);
       
    }
}

export default connectDB;