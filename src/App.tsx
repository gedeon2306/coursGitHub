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
      <p>✔ git add : Indexer les modifications</p>
      <p>✔ git reset : Retirer indexation</p>
      <p>✔ git reset HEAD~2: Annuler les deux dernière commit</p>
      <p>✔ git commit : Sauvegarder</p>
      <p>✔ git diff : Voir les modiffications de l'espace de travail par raport à la dernière version enregistée dans le repos</p>
      <p>✔ git diff --cached : Voir les modiffications des fichier indexé (git add)</p>
      <p>✔ git checkout -b [branch] : Change de branche et ce placer sur le dernier commit de celle-ci. -b pour en plus créer la branche.</p>
      <p>✔ git rebase [branch] : met à jour votre branche avec les derniers commits de [branch]</p>
      
    </>
  )
}

export default App
