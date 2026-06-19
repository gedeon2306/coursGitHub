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

      {/* ================= SECTION GIT ================= */}
      <h2>GIT (Local)</h2>
      <p>✔ git init : Initialiser un dépôt (repository) local.</p>
    </>
  )
}

export default App