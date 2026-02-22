import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import "./css/style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board></Board>
    </>
  )
}

export default App
