import { Request, Response } from "express";
import Employer from "../model/Employer";

async function updateEmployee(req: Request, res: Response) {
  const employerId = req.params.masterWallet;
  const index = parseInt(req.params.index);

  const employee = await Employer.findOne({ masterWallet: employerId });
  
  employee.employeeArray[index] = {
    discordId: req.body.newDiscordId,
    role: req.body.newRole,
    salary:  req.body.newSalary,
    walletAddress: req.body.newWalletAddress,
    solUsdc: req.body.newSolUsdc,
  };

  employee.save();

  res.json(employee);
  console.log("succes");
}

export default updateEmployee;
