const mongoose = require('mongoose');

const connectDB = async (listen) => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
    });
    console.log('Connected To Database');
    listen();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
