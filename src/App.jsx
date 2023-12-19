import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(Math.round(Math.random()*100) + 1)

  const addValue = () => {
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Increase </button>
      <br/>
      <button onClick={removeValue}> Decrease </button>
    </>
  )
}

export default App