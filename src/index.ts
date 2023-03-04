import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import mongoose from "mongoose";
import addEmployer from "./routes/AddEmployer";

import cors from "cors"; // cross origin requests
import getEmployers from "./routes/GetEmployers";
import addEmployee from "./routes/AddEmployee";
import deleteEmployee from "./routes/DeleteEmployee";
import updateEmployee from "./routes/UpdateEmployee";
import updateDate from "./routes/updateDate";

const app = express();


app.use(cors());

app.use(express.json());

const port = 5000;



app.get("/", (req, res) => {
  res.send("Hello World!");
});


//requesturi pt anagajatori
app.get("/getEmployers", getEmployers)
app.post("/addEmployer" , addEmployer)
app.put("/updateDate/:masterWallet", updateDate)

//requesturi pt angajati

app.post('/addEmployee/:masterWallet', addEmployee)
app.delete('/deleteEmployee/:masterWallet/:index',deleteEmployee)
app.put('/updateEmployee/:masterWallet/:index',updateEmployee)

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:M1lEUEIGdJ9ZuNdn@team-manager.w5eyeu6.mongodb.net/?retryWrites=true&w=majority",
    {dbName:'Employers'}
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => app.listen(port))
  .then(() => console.log("listening on port 5000" ))
  .catch((error) => console.error(error));
