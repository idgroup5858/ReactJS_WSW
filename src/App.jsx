import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button } from 'react-bootstrap'
import NavbarScreen from './pages/NavbarContent'
import SidebarScreen from './pages/SidebarContent'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarScreen></NavbarScreen>
      <br />
      <SidebarScreen></SidebarScreen>
    </>
  )
}

export default App
