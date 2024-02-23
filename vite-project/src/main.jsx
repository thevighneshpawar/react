import React from 'react'
import ReactDOM from 'react-dom/client'
// import { jsx as _jsx } from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
     <h1>Custom App !!!!!</h1>
    </div>
  )
    
}


// this will not work this properties are different
// const ReactElement = {
//   type : 'a',
//   props: {
//       href:'https://google.com',
//       target : '_blank'
//   },
//   children: 'Click me to visit google'
// }



// this will work it will  according to react

const anotheruser = "chai aur"
const ReactElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_balnk'},
  'click me to visit ',
  anotheruser
)



// this will work it will be get converted

const AnotherElement =(
  <a href="https://google.com" target='_blank'>Vist Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // MyApp()
  // AnotherElement

  ReactElement
  
)
