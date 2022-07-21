import { useState } from 'react'
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
      name: region
    }
    setRegions([...regions, newRegion])
  }

  return (
    <>
      <ul className='clock-list'>
        {regions.map(r => (
          <li className='clock-list__item' key={r.id}>
            <Clock />
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
