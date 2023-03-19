import Employer from "../model/Employer";
import { Request, Response } from "express";

async function getEmployers(req: Request, res: Response) {
  const employers = await Employer.find();

  res.json(employers);
}

export default getEmployers;
