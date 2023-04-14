import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import transactionRoutes from "./routes/transaction.js";
import AuthApi from "./routes/AuthApi.js";
import connect from "./database/mongodb.js";
import passport from "passport";
import UserApi from "./routes/UserApi.js";
import passportConfig from "./config/passport.js";
import routes from "./routes/index.js";
dotenv.config();
//! port
const port = 4000;
const app = express();

//! middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);
//! can use express.json()
// app.use(express.json());
app.use("/", routes);
await connect();
app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
