import * as dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";

import express from "express";
import mongoose from "mongoose";
import addEmployer from "./routes/AddEmployer";

import cors from "cors"; // cross origin requests
import getEmployers from "./routes/GetEmployers";
import addEmployee from "./routes/AddEmployee";
import deleteEmployee from "./routes/DeleteEmployee";
import updateEmployee from "./routes/UpdateEmployee";
import updateDate from "./routes/updateDate";

import CryptoJS from "crypto-js";

import secret from "../../fe/src/guideSecret.json";
import getWallet from "./routes/getWallet";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 5000;

var encrypt = CryptoJS.AES.encrypt(JSON.stringify(secret), "sad");

// console.log(encrypt.toString())

var decrypt = CryptoJS.AES.decrypt(encrypt, "sad");

// console.log(decrypt.toString(CryptoJS.enc.Utf8))

//req wallet

app.get("/getWallet", getWallet);

//requesturi pt anagajatori
app.get("/getEmployers", getEmployers);
app.post("/addEmployer", addEmployer);
app.put("/updateDate/:masterWallet", updateDate);

//requesturi pt angajati

app.post("/addEmployee/:masterWallet", addEmployee);
app.delete("/deleteEmployee/:masterWallet/:index", deleteEmployee);
app.put("/updateEmployee/:masterWallet/:index", updateEmployee);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
  .then(() => console.log("Connected to MongoDB"))
  .then(() => app.listen(PORT))
  .then(() => console.log(`listening on port ${PORT}`))
  .catch((error) => console.error(error));
