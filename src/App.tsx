import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cours GITHUB</h1>
      <p>Apprentissage...</p>
      <h2>GIT</h2>
      <p>✔ git init : Initialiser un repos</p>
      <p>✔ git status : Status actuel du repos</p>
      
    </>
  )
}

export default App
