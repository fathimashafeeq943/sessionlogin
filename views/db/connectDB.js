const mongoose = require("mongoose"); // import mongoose library

const connectDB = async () => { // define async function to connect DB
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/userauth');

        console.log(`MongoDB Connected: ${conn.connection.host}`); // success message
     }
      catch (error) {
    console.log(error);  // print error if connection fails
    process.exit(1);     // exit with failure
  }
};

module.exports = connectDB;  // export the function for reuse
