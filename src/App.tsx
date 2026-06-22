
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
      <p>✔ git commit -m "[message]" : Sauvegarder les modifications indexées dans l'historique.</p>
      <p>✔ git commit --amend : Modifier le message ou le contenu du tout dernier commit.</p>
      <p>✔ git log : Afficher l'historique de tous les commits validés.</p>
      <p>✔ git reset HEAD~2 : Annuler les deux derniers commits en gardant les modifications dans l'espace de travail.</p>
      <p>✔ git diff : Voir les modifications de l'espace de travail par rapport à la dernière version enregistrée.</p>
      <p>✔ git diff --cached : Voir les modifications des fichiers indexés (après un git add).</p>
      
      <h3>Gestion des Branches</h3>
      <p>✔ git branch : Lister les branches locales. (La branche principale s'appelle souvent `main` ou `master`).</p>
      <p>✔ git checkout [nom_branche] : Basculer sur une autre branche existante.</p>
      <p>✔ git checkout -b [nom_branche] : Créer une nouvelle branche et basculer dessus immédiatement.</p>
      <p>✔ git merge [nom_branche] : Fusionner la branche spécifiée dans la branche actuelle.</p>
      <p>✔ git rebase [nom_branche] : Déplacer ou combiner une suite de commits sur une nouvelle base (met à jour la branche avec les commits de [branch]).</p>
      <p>✔ git branch -d [nom_branche] : Supprimer une branche locale (une fois fusionnée).</p>

    </>
  )
}

export default App