const mongoose = require('mongoose');
require("dotenv").config()

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL

console.log('===== DEBUG INFO =====');
console.log('MongoDB URL exists:', !!MONGO_DB_CONNECTION_URL);
console.log('MongoDB URL length:', MONGO_DB_CONNECTION_URL?.length);
console.log('First 20 chars:', MONGO_DB_CONNECTION_URL?.substring(0, 20));
console.log('======================');

function connectDB(){
    mongoose.connect(MONGO_DB_CONNECTION_URL)

    mongoose.connection.on("connected", () => {
        console.log("MongoDB Atlas connected successfully")
  })

  mongoose.connection.on("error", (err) => {
        console.log("MongoDB Atlas NOT connected successfully")
  })

}
    
module.exports = { connectDB }
