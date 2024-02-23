import { Component, useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"Vighnesh",
    age:21
  }

  let arr =[1,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind test </h1>
      <Card username='chai aur code' someObje={arr} btntext='Click me'/>
      <Card username="vighnesh"/>
    </>
  )
}

export default App
