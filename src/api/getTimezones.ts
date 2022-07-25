import { IRegion } from '../models/Region'
import timezones from './timezones.json'

// asynchronious behaviour is emulated
export default async function getTimezones(str: string): Promise<IRegion[]> {
  // server delay is incapsulated in setTimeout
  const p = new Promise<IRegion[]>(resolve =>
    setTimeout(() => {
      const filtered = timezones.filter(t => t.value.includes(str))
      
      resolve(filtered)
    }, Math.random() * 1000)
  )

  const response = await p.then()
  return response
}
