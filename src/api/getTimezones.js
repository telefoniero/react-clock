import timezones from './timezones.json'

// asynchronious behaviour is emulated
export default async function getTimezones(str) {
  const p = new Promise(resolve =>
    setTimeout(() => {
      const filtered = timezones.filter(t => t.utc.some(u => u.includes(str)))
      resolve(filtered)
    }, Math.random() * 1000)
  )

  const response = await p.then()
  return response
}
