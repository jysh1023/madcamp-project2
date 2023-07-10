/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

const connectDB = async (db_url) => {
  try {
    const db_options = {
      dbName: 'message',
    };
    await mongoose.connect(db_url, db_options);
    console.log('Connected to DB successfully');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
