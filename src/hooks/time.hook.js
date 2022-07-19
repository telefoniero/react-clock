import { useState, useEffect } from 'react'

export default function useTime(region) {
  const [date, setDate] = useState(new Date())
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (!timer) setTimer(setInterval(() => setDate(new Date()), 1000))
  }, [timer])

  return { time: date.toLocaleTimeString('ru', { timeZone: 'UTC' }) }
}
