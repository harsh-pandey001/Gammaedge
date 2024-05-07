const mongoose = require("mongoose");


const connectDB = (props) => {
  mongoose.connect("mongodb://localhost:27017/MyIndoreGD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


  // Event handling for successful connection
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  // Event handling for connection error
  mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
  });
};


module.exports = connectDB;