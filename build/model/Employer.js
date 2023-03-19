"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const EmployerSchema = new Schema({
    masterWallet: String,
    subscription: Boolean,
    subscriptionDate: {
        start: String,
        end: String
    },
    employeeArray: [{
            discordId: String,
            role: String,
            salary: Number,
            walletAddress: String,
            solUsdc: String,
        }],
});
const EmployerModel = mongoose_1.default.model("Employer", EmployerSchema);
exports.default = EmployerModel;
//# sourceMappingURL=Employer.js.map