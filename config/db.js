import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_CONNECTION_URI,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
    console.log(
      `Database connected on host: ${process.env.MONGODB_CONNECTION_URI}`.cyan
        .underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
