import useTime from '../hooks/time.hook'

function Clock({ region }) {
  const { time } = useTime(region)

  const [hours, minutes, seconds] = time.split(':')

  function convertToDegrees(value, q) {
    return ((value % q) * 360) / q
  }

  return (
    <div>
      {time}
      <div className='clock-face'>
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
        <div className='clock-face__dash _1'></div>
        <div className='clock-face__dash _2'></div>
        <div className='clock-face__dash _3'></div>
        <div className='clock-face__dash _4'></div>
        <div className='clock-face__dash _5'></div>
        <div className='clock-face__dash _6'></div>
        <div className='clock-face__dash _7'></div>
        <div className='clock-face__dash _8'></div>
        <div className='clock-face__dash _9'></div>
        <div className='clock-face__dash _10'></div>
        <div className='clock-face__dash _11'></div>
        <div className='clock-face__dash _12'></div>
      </div>
    </div>
  )
}

export default Clock
