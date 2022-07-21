import { useState, useEffect } from 'react'

export default function useTime(timeZone) {
  const [date, setDate] = useState(new Date())
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (!timer) {
      // console.log('date ms: ', date.getMilliseconds())
      setTimeout(() => {
        setTimer(
          setInterval(() => {
            const newDate = new Date()
            // console.log('offset date ms: ', newDate.getMilliseconds())
            setDate(newDate)
          }, 1000)
        )
      }, 1000 - date.getMilliseconds())
    }
  }, [timer, date])
  return { time: date.toLocaleTimeString('ru', { timeZone }) }
}
