import mongoose from "mongoose";
import Table from "../Model/table.js"
const connect = async () => {
  await mongoose.connect(
    // process.env.CONNECTION_STRING
    "mongodb+srv://shahzaib_khan:6APyKly9CU9rN9Ko@cluster0.od3cuso.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Db connected!");
  // await Table.create({ amount, description });
};

export default connect;
