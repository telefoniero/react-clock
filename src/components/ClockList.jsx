"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const getTimezones_1 = __importDefault(require("../api/getTimezones"));
const Clock_1 = __importDefault(require("./Clock"));
const SearchBox_1 = __importDefault(require("./SearchBox"));
function ClockList() {
    const [selectedRegions, setSelectedRegions] = (0, react_1.useState)([]);
    const [regions, setRegions] = (0, react_1.useState)([]);
    const [region, setRegion] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (region.length) {
            const handler = setTimeout(() => (0, getTimezones_1.default)(region).then(matched => setRegions(matched)), 500);
            return () => clearTimeout(handler);
        }
    }, [region]);
    // function searchEffect(search: string): VoidFunction | void {
    //   if (search.length) {
    //     const handler = setTimeout(
    //       () => getTimezones(region).then(matched => setRegions(matched)),
    //       500
    //     )
    //     return () => clearTimeout(handler)
    //   }
    // }
    return (<>
      {selectedRegions.length && (<ul className='selected-regions'>
          {selectedRegions.map(sr => (<li key={sr.value} className='selected-regions__item'>
              <Clock_1.default timeZone={sr.utc[0]}/>
            </li>))}
        </ul>)}
      <SearchBox_1.default find={getTimezones_1.default} optionKey='value'/>
    </>);
}
exports.default = ClockList;
