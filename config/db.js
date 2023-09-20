const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected to "${conn.connection.name}" database`);
    return conn;
  } catch (error) {
    console.log(`Error on db connection: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
