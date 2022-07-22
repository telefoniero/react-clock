import { useState, useEffect } from 'react'
import getTimezones from '../api/getTimezones'
import Clock from './Clock'

export default function ClockList() {
  const [regions, setRegions] = useState([
    {
      id: Math.random()
    }
  ])
  const [region, setRegion] = useState('')

  function clickHandler() {
    const newRegion = {
      id: Math.random(),
      timeZone: region
    }
    setRegions([...regions, newRegion])
  }

  useEffect(() => {
    getTimezones(region).then(res => console.log(res))
  }, [region])

  return (
    <>
      <ul className='clock-list'>
        {regions.map(r => (
          <li className='clock-list__item' key={r.id}>
            <Clock timeZone={r.timeZone} />
          </li>
        ))}
      </ul>
      <input
        type='text'
        value={region}
        onChange={e => setRegion(e.target.value)}
      />
      <button onClick={clickHandler}>Добавить</button>
    </>
  )
}
