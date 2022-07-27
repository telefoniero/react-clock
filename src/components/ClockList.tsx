import { useState, useEffect } from 'react'
import getTimezones from '../api/getTimezones'
import { IRegion } from '../models/Region'
import Clock from './Clock'
import SearchBox from './SearchBox'

export default function ClockList() {
  const [selectedRegions, setSelectedRegions] = useState<IRegion[]>([])

  function addSelectedRegion(region: IRegion): void {
    setSelectedRegions([...selectedRegions, region])
  }

  return (
    <>
      {!!selectedRegions.length && (
        <ul className='selected-regions'>
          {selectedRegions.map(sr => (
            <li key={sr.value} className='selected-regions__item'>
              <Clock timeZone={sr.utc[0]} />
            </li>
          ))}
        </ul>
      )}
      <SearchBox<IRegion>
        clickAction={addSelectedRegion}
        find={getTimezones}
        optionKey='value'
      />
    </>
  )
}
