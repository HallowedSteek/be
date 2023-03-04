import { Request, Response } from "express";
import Employer from "../model/Employer";

async function updateDate(req: Request, res: Response) {
  const employerId = req.params.masterWallet;
  const employer = await Employer.findOne({ masterWallet: employerId });

  employer.subscriptionDate = {
    start: req.body.newStartDate,
    end: req.body.newEndDate,
  };

  employer.save();

  res.json(employer);
  console.log("succes");
}

export default updateDate;
