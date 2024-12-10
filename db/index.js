import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error);
  }
};

export default connectDB;
