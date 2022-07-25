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
const timezones_json_1 = __importDefault(require("./timezones.json"));
// asynchronious behaviour is emulated
function getTimezones(str) {
    return __awaiter(this, void 0, void 0, function* () {
        // server delay is incapsulated in setTimeout
        const p = new Promise(resolve => setTimeout(() => {
            const filtered = timezones_json_1.default.filter(t => t.value.includes(str));
            resolve(filtered);
        }, Math.random() * 1000));
        const response = yield p.then();
        return response;
    });
}
exports.default = getTimezones;
