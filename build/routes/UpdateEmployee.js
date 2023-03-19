"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employer_1 = __importDefault(require("../model/Employer"));
function updateEmployee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const employerId = req.params.masterWallet;
        const index = parseInt(req.params.index);
        const employee = yield Employer_1.default.findOne({ masterWallet: employerId });
        employee.employeeArray[index] = {
            discordId: req.body.newDiscordId,
            role: req.body.newRole,
            salary: req.body.newSalary,
            walletAddress: req.body.newWalletAddress,
            solUsdc: req.body.newSolUsdc,
        };
        employee.save();
        res.json(employee);
        console.log("succes");
    });
}
exports.default = updateEmployee;
//# sourceMappingURL=UpdateEmployee.js.map