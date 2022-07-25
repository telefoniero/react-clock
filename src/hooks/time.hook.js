"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useTime(timeZone) {
    const [date, setDate] = (0, react_1.useState)(new Date());
    const [timer, setTimer] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (!timer) {
            const offset = 1000 - date.getMilliseconds();
            setTimeout(() => {
                setTimer(setInterval(() => setDate(new Date()), 1000));
            }, offset);
        }
    }, [timer, date]);
    return { time: date.toLocaleTimeString('ru', { timeZone }) };
}
exports.default = useTime;
