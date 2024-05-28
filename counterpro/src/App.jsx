import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let counter =0
 let  [counter,setCounter]= useState(0);

 const incrementValue=()=>{
 
  setCounter(counter+1);


 }
 const decrementValue=()=>{
  
  setCounter(counter-1)
  if(counter<=0){
    setCounter(0)
  }
 }

  return (
    <>
      <h1>I will 'Rock'👍</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={incrementValue}>Increment</button>
      <br/><br/>
      <button
      onClick={decrementValue}
      >Decrement</button>
    </>
  )
}

export default App
