import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Watch></Watch>
    </div>
  )
}

export default App
