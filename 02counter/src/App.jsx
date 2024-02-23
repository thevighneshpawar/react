import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]= useState(0)




  const addvalue =()=>{
    // counter +=1;
    if (counter < 20) {
      setCounter(counter+1)
      
    }
   
  }
 
  // let counter =50
// this will not update value 5 times becoz its updating in function not a var
  // const addvalue =()=>{
  //   // counter +=1;
  //   if (counter < 20) {
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //   }
   
  // }


  // usestate have callback it gives prevoius value  it will update by the 4 as we here doing 4 times
  // const addvalue =()=>{
  //   // counter +=1;
  //   if (counter < 20) {
  //     setCounter(prevCounter => prevCounter+1)
  //     setCounter(prevCounter=> prevCounter+1)
  //     setCounter(prevCounter=> prevCounter+1)
  //     setCounter(prevCounter=> prevCounter+1)
  //   }
   
  // }

  const removevalue = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }
    
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>COUNTER VALUE : {counter}</h2>

     <button
     onClick={addvalue}>
      Add Value {counter}</button>
     <br />
     <button onClick={removevalue}>Remove Value {counter}</button>

     <p>Footer : {counter}</p>
    </>
  )
}

export default App
