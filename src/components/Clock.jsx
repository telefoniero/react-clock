"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_hook_1 = __importDefault(require("../hooks/time.hook"));
const Clock = ({ timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone }) => {
    const { time } = (0, time_hook_1.default)(timeZone);
    const [hours, minutes, seconds] = time.split(':').map(n => +n);
    function convertToDegrees(value, q) {
        return ((value % q) * 360) / q;
    }
    const dashes = Array(60)
        .fill(1)
        .map((el, idx) => (<div key={idx} className={`clock-face__dash _${idx + 1} ${(idx + 1) % 5 === 0 ? '_long' : ''}`}/>));
    return (<div className='clock'>
      <div className='clock__display'>{time}</div>
      <div className='clock__clock-face clock-face'>
        <div className='clock-face__arrow clock-face__arrow_hours' style={{ transform: `rotate(${convertToDegrees(hours, 12)}deg)` }}/>
        <div className='clock-face__arrow clock-face__arrow_minutes' style={{ transform: `rotate(${convertToDegrees(minutes, 60)}deg)` }}/>
        <div className='clock-face__arrow clock-face__arrow_seconds' style={{ transform: `rotate(${convertToDegrees(seconds, 60)}deg)` }}/>
        {dashes}
      </div>
      <div className='clock__timeZone'>{timeZone}</div>
    </div>);
};
exports.default = Clock;
