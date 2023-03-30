import { Request, Response } from "express";
import Employer from "../model/Employer";

async function deleteAll(req: Request, res: Response) {
  const employerId = req.params.masterWallet;

  const employee = await Employer.findOne({ masterWallet: employerId });

  employee.employeeArray = [];

  employee?.save();

  res.json(employee);
  console.log("succes");
}

export default deleteAll;
