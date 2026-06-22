
function App() {

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
      
    </>
  )
}

export default App