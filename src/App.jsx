import ClockList from './components/ClockList'
import getTimeZone from './api/getTimeZone'

getTimeZone('Am')

function App() {
  return (
    <div className='app'>
      <div className='app__clock-list'>
        <ClockList />
      </div>
    </div>
  )
}

export default App
