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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const SearchBox = ({ find, optionKey, labelKey }) => {
    const [search, setSearch] = (0, react_1.useState)('');
    const [options, setOptions] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (search.length) {
            const handler = setTimeout(() => find(search).then(matched => setOptions(matched)), 500);
            return () => clearTimeout(handler);
        }
    }, [search]);
    return (<div className='select-region'>
      <input type='text' value={search} onChange={e => setSearch(e.target.value)} className='select-region__input'/>
      {options.length && (<ul className='select-region__options region-options'>
          {options.map(r => (<li className='region-options__item' key={r[optionKey]}>
              {r[labelKey ? labelKey : optionKey]}
            </li>))}
        </ul>)}
    </div>);
};
exports.default = SearchBox;
