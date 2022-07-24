import timezones from './timezones.json'

// asynchronious behaviour is emulated
export default async function getTimezones(str) {
  const p = new Promise(resolve =>
    setTimeout(() => {
      const filtered = timezones.filter(t => t.value.includes(str))
      resolve(filtered.map(f => ({ ...f, utc: f.utc[0] })))
    }, Math.random() * 1000)
  )

  const response = await p.then()
  // console.log(response)
  return response
}
