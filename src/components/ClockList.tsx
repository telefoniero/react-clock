import { useState, useEffect } from 'react'
import getTimezones from '../api/getTimezones'
import { IRegion } from '../models/Region'
import Clock from './Clock'
import SearchBox from './SearchBox'

export default function ClockList() {
  const [selectedRegions, setSelectedRegions] = useState<IRegion[]>([])
  const [regions, setRegions] = useState<IRegion[]>([])
  const [region, setRegion] = useState('')

  useEffect(() => {
    if (region.length) {
      const handler = setTimeout(
        () => getTimezones(region).then(matched => setRegions(matched)),
        500
      )
      return () => clearTimeout(handler)
    }
  }, [region])

  // function searchEffect(search: string): VoidFunction | void {
  //   if (search.length) {
  //     const handler = setTimeout(
  //       () => getTimezones(region).then(matched => setRegions(matched)),
  //       500
  //     )
  //     return () => clearTimeout(handler)
  //   }
  // }

  return (
    <>
      {selectedRegions.length && (
        <ul className='selected-regions'>
          {selectedRegions.map(sr => (
            <li key={sr.value} className='selected-regions__item'>
              <Clock timeZone={sr.utc[0]} />
            </li>
          ))}
        </ul>
      )}
      <SearchBox<IRegion> 
        find={getTimezones}
        optionKey='value'
      />
    </>
  )
}
