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
      <p>✔ git clone [url] : Cloner un projet existant depuis un dépôt distant.</p>
      <p>✔ git status : Voir l'état actuel des fichiers (suivis, modifiés, indexés).</p>
      <p>✔ git add [fichier] : Indexer un fichier (Staging Area). Utiliser `git add .` pour tout indexer.</p>
      <p>✔ git reset [fichier] : Retirer un fichier de l'indexation sans annuler les modifications.</p>
      <p>✔ git commit -m "[message]" : Sauvegarder les modifications indexées dans l'historique.</p>
      <p>✔ git commit --amend : Modifier le message ou le contenu du tout dernier commit.</p>
      <p>✔ git log : Afficher l'historique de tous les commits validés.</p>
      <p>✔ git reset HEAD~2 : Annuler les deux derniers commits en gardant les modifications dans l'espace de travail.</p>
      <p>✔ git diff : Voir les modifications de l'espace de travail par rapport à la dernière version enregistrée.</p>
      <p>✔ git diff --cached : Voir les modifications des fichiers indexés (après un git add).</p>
      
  )
}

export default App