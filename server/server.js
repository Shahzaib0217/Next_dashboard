import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./database/db.js";
import routes from "./routes/index.js";
// dotenv.config();
//! port
const port = 4000;
const app = express();

//! middlewares
app.use(cors());
app.use(bodyParser.json());


app.use("/", routes);
await connect();
app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});