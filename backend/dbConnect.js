const mongoose = require('mongoose');
const uri = 'mongodb+srv://musabfayyaz1942:16July2005%40@cluster0.igucxzx.mongodb.net/NextApp?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
