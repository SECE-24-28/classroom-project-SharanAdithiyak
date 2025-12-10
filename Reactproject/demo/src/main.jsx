import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Display4 from './display4.jsx'
//import Display5 from './display5.jsx' 
//import Display6 from './display6.jsx'
import Task3 from './task1.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Display4 /> */}
   {/*<Display5 />*/}
   {/* <Display6 />*/}
   <Task3/>

  </StrictMode>,
)
