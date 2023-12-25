const express = require("express");
const dotnev = require("dotenv");
const mongoose = require("mongoose");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const createDefaultData = require("./utils/create-default-data");
const productsRouter = require("./routes/products");

dotnev.config();
const app = express();

app.use(express.json());

app.use("/api/v1/products" , productsRouter)

app.use(notFound);
app.use(errorHandler);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URI);
    console.log("Connected to MongoDB");

    await createDefaultData();
    console.log("Data saved successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connect();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
