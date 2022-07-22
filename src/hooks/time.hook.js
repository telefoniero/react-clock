import { useState, useEffect } from 'react'

export default function useTime(timeZone) {
  const [date, setDate] = useState(new Date())
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (!timer) {
      const offset = 1000 - date.getMilliseconds()
      setTimeout(() => {
        setTimer(setInterval(() => setDate(new Date()), 1000))
      }, offset)
    }
  }, [timer, date])
  return { time: date.toLocaleTimeString('ru', { timeZone }) }
}
