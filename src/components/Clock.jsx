import useTime from '../hooks/time.hook'

function Clock({ region }) {
  const { time } = useTime(region)

  const [hours, minutes, seconds] = time.split(':')

  function convertToDegrees(value, q) {
    return ((value % q) * 360) / q
  }

  const dashes = Array(12)
    .fill(1)
    .map((el, idx) => (
      <div key={idx} className={`clock-face__dash _${idx + 1}`} />
    ))

  return (
    <div className='clock'>
      <div className='clock__display'>{time}</div>
      <div className='clock__clock-face clock-face'>
        <div
          className='clock-face__arrow clock-face__arrow_hours'
          style={{ transform: `rotate(${convertToDegrees(hours, 12)}deg)` }}
        />
        <div
          className='clock-face__arrow clock-face__arrow_minutes'
          style={{ transform: `rotate(${convertToDegrees(minutes, 60)}deg)` }}
        />
        <div
          className='clock-face__arrow clock-face__arrow_seconds'
          style={{ transform: `rotate(${convertToDegrees(seconds, 60)}deg)` }}
        />
        {dashes}
      </div>
    </div>
  )
}

export default Clock
