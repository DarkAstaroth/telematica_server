const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useUnifiedTopology: true,
    });
    console.log("Base de datos conectada");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { dbConnection };