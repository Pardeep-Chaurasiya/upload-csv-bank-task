const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB has been connected");
  } catch (error) {
    console.log("DB  connection failed", error.message);
  }
};

module.exports = connectDB;
