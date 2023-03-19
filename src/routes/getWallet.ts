import { Request, Response } from "express";
import WalletModel from "../model/Wallet";
import CryptoJS from "crypto-js";

async function getWallet(req: Request, res: Response) {
  const wallet = await WalletModel.find();
  const decrypt = CryptoJS.AES.decrypt(wallet[0].pk, "sad");

  res.json(decrypt.toString(CryptoJS.enc.Utf8));
}

export default getWallet;
