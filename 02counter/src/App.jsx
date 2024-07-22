
// Learning Hooks

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;
  /* 
    const addValue = () => {
      // console.log("clicked", Math.random());
      // console.log("clicked", counter);
      // counter = counter + 1;
      // setCounter(counter + 1);
  
      if (counter < 20) // Home Work
        setCounter(counter + 1);
    }
  
  
    const removeValue = () => {
      // setCounter(counter - 1);
  
      if (counter > 0) // Home Work
        setCounter(counter - 1);
    }
   */

  // A react interview question on counter L-8
  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    // setCounter(counter - 1);

    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
