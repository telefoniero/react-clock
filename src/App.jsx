import Clock from './components/Clock'
import ClockList from './components/ClockList'

function App() {
  return (
    <div className='app'>
      <div className='app__local-time'>
        <Clock />
      </div>
      <div className='app__clock-list'>
        <ClockList />
      </div>
    </div>
  )
}

export default App
