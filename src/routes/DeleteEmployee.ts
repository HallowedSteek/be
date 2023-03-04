import { Request, Response } from "express";
import Employer from "../model/Employer";

async function deleteEmployee(req: Request, res: Response) {
  const employerId = req.params.masterWallet;
  const index = parseInt(req.params.index);

  const employee = await Employer.findOne({masterWallet:employerId});

  employee.employeeArray.splice(index, 1)

  employee?.save();

  res.json(employee);
  console.log("succes");
}

export default deleteEmployee;
