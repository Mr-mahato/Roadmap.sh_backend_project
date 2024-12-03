const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL)
  } catch (error) {}
};
