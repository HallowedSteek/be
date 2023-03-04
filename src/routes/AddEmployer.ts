import { Request, Response } from "express";
import Employer from '../model/Employer'

async function  addEmployer(req: Request, res: Response) {
  const newEmployer = new Employer({
    masterWallet: req.body.masterWallet,
    subscription: req.body.subscription,
    subscriptionDate: req.body.subscriptionDate
  });
  const addedEmployer = await newEmployer.save(); 
  res.json(addedEmployer);
}

export default addEmployer;
