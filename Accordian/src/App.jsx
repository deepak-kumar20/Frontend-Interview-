import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './Accordian'

function App() {
  const items= [
    {
      title: 'What is React? ',
      content:"A javaScript library for building user interfaces"
    }, {
       title:"What is nodejs",
       content:"A JavaScript runtime built on Chrome's V8 JavaScript engine"
    },
    {
      title: "What is MongoDB",
      content:"A document database used for high volume data storage"
    },
    {
      title:"What is ExpressJS",
      content:"A minimal and flexible Node.js web application framework"
    }
   ]

  return (
    <>
      <Accordian items={items}/>
       
    </>
  )
}

export default App
