import { useState, useEffect } from 'react'

type Timer = NodeJS.Timer | null

export default function useTime(timeZone: string) {
  const [date, setDate] = useState<Date>(new Date())
  const [timer, setTimer] = useState<Timer>(null)

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
