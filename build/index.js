"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const AddEmployer_1 = __importDefault(require("./routes/AddEmployer"));
const cors_1 = __importDefault(require("cors")); // cross origin requests
const GetEmployers_1 = __importDefault(require("./routes/GetEmployers"));
const AddEmployee_1 = __importDefault(require("./routes/AddEmployee"));
const DeleteEmployee_1 = __importDefault(require("./routes/DeleteEmployee"));
const UpdateEmployee_1 = __importDefault(require("./routes/UpdateEmployee"));
const updateDate_1 = __importDefault(require("./routes/updateDate"));
const getWallet_1 = __importDefault(require("./routes/getWallet"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
//req wallet
app.get("/getWallet", getWallet_1.default);
//requesturi pt anagajatori
app.get("/getEmployers", GetEmployers_1.default);
app.post("/addEmployer", AddEmployer_1.default);
app.put("/updateDate/:masterWallet", updateDate_1.default);
//requesturi pt angajati
app.post("/addEmployee/:masterWallet", AddEmployee_1.default);
app.delete("/deleteEmployee/:masterWallet/:index", DeleteEmployee_1.default);
app.put("/updateEmployee/:masterWallet/:index", UpdateEmployee_1.default);
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
    .then(() => console.log("Connected to MongoDB"))
    .then(() => app.listen(PORT))
    .then(() => console.log(`listening on port ${PORT}`))
    .catch((error) => console.error(error));
//# sourceMappingURL=index.js.map