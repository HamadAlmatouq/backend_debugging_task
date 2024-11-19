// require("dotenv").config();
const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URL, options) // #5 URI TO URL
  .then(() => {
    console.log("DB connected");
    // console.log(`Mongo connected ${connection.connection.host}`)
  })
  .catch((err) => {
    console.log("DB connected");
  });
