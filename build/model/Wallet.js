"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const WalletSchema = new Schema({
    pk: String,
});
const WalletModel = mongoose_1.default.model("Wallet", WalletSchema);
exports.default = WalletModel;
//# sourceMappingURL=Wallet.js.map