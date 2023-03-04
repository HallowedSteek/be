import { Request, Response } from "express";
import Employer from "../model/Employer";

const addEmployee = async (req: Request, res: Response) => {
  const employerId = req.params.masterWallet;

  if (!employerId) return res.status(400).send("employer not found");

  const employee = await Employer.findOne({ masterWallet: employerId });

  if (!employee) return res.status(400).send("employee not found");

  const discordId = req.body.discordId;
  const role = req.body.role;
  const salary = req.body.salary;
  const solUsdc = req.body.solUsdc;
  const walletAddress = req.body.walletAddress;

  employee.employeeArray.push({
    discordId: discordId,
    role: role,
    salary: salary,
    walletAddress: walletAddress,
    solUsdc: solUsdc,
  });

  await employee.save();
  res.json(employee);
};

export default addEmployee;

//HQauQQnqQifijU91VYiGosXfit8vwahtPbkyJnRNmf4Q
//HYpEMnmiUxuPCKka9A33ALGMEGeHsnWnCSRHJssmgaPa
