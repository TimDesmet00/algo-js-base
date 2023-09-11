let n = parseInt(prompt("entrez un nombre entier, n:"));
let add = 0;

// exercice fonctionnel par contre ne repose pas la question lors d'une mauvaise entré

if (!isNaN(n) && n > 0) {
  for (let i = 0; i < n; i++) {
    let num = parseInt(
      prompt("entrez nombre? " + " le resultat actuelle est " + add)
    );
    if (!isNaN(num)) {
      add += num;
      console.log(add);
    }
  }
} else {
  alert("Vous n'avez pas entrer un nombre, rechargez la page");
}

document.write(add);
