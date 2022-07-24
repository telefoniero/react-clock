import { useState, useEffect } from 'react'
import getTimezones from '../api/getTimezones'
import Clock from './Clock'

export default function ClockList() {
  const [selectedRegions, setSelectedRegions] = useState([])
  const [regions, setRegions] = useState([])
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

  function clickHandler() {}

  return (
    <>
      {selectedRegions.length && (
        <ul className='selected-regions'>
          {selectedRegions.map(sr => (
            <li key={sr.value} className='selected-regions__item'>
              <Clock timeZone={sr.utc} />
            </li>
          ))}
        </ul>
      )}
      <div className='select-region'>
        <input
          type='text'
          value={region}
          onChange={e => setRegion(e.target.value)}
          className='select-region__input'
        />
        {regions.length && (
          <ul className='select-region__options region-options'>
            {regions.map(r => (
              <li
                className='region-options__item'
                key={r.value}
                onClick={() => {
                  setSelectedRegions([...selectedRegions, r])
                  setRegions([])
                }}
              >
                {r.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
