import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    pk:String,
});

const WalletModel = mongoose.model("Wallet", WalletSchema);

export default WalletModel;
