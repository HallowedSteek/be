import Employer from "../model/Employer";
import { Request, Response } from "express";

async function getEmployers(req: Request, res: Response) {
  //cum dam fetch la deck urile din mongo?
  const employers = await Employer.find();

  //cum trimitem inapoi ce am primit
  res.json(employers);
}

export default getEmployers;
