const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mongo_4")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("database connection error", err);
  });

  const conectDb = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongo_4")
        console.log('mongoDb conected');
    } catch (error) {
        console.log('mongoDb conected error');
        process.exit(1)
    }
  }

  module.exports = conectDb