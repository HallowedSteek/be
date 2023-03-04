import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
  masterWallet: String,
  subscription: Boolean,
  subscriptionDate:{
    start:String,
    end:String
  },
  employeeArray: [{
    discordId: String,
    role: String,
    salary: Number,
    walletAddress: String,
    solUsdc: String,
  }],
});

const EmployerModel = mongoose.model("Employer", EmployerSchema);

export default EmployerModel;
