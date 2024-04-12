import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [countVal, setCountVal] = useState(0);

  function incrementCount(){
    if(countVal == 20) return;

    setCountVal((prevCount) => prevCount+1)
    setCountVal((prevCount) => prevCount+1)
    setCountVal((prevCount) => prevCount+1)


    //---ALL THE BELOW UPDATE ONE TIME STATE : because Fibre send updates in batches and all the lines are updating the same thing
    // setCountVal(countVal + 1);
    // setCountVal(countVal + 1);
    // setCountVal(countVal + 1);
    // setCountVal(countVal + 1);
    // setCountVal(countVal + 1);

  }

  function decrementCount(){
    if(countVal == 0) return;
    setCountVal(countVal - 1);
  }

  return (
    <>
      <h1>Coding with codey</h1>
      <h2>Counter Value : {countVal}</h2>
      <button onClick={incrementCount} style={{backgroundColor: 'red', margin: '10px'}}>+</button>
      <br />
      <button onClick={decrementCount} style={{backgroundColor: 'red', margin: '10px'}}>-</button>
    </>
  )
}

export default App
