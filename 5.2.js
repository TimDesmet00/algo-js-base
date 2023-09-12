let randomizeCast = (castMembers) => {
  let randomCast = [];
  for (let i = 0; i < castMembers.length; i++) {
    let randomIndex = Math.floor(Math.random() * castMembers.length);
    randomCast.push(castMembers[randomIndex]);
  }
  return randomCast;
};

let randomizedCast = randomizeCast(mySerieTv.castMembers);
console.log(randomizedCast);

/*
pour commencé j'ai crée la fonction randomizeCasr avec comme argument mon tableau de l'objet de l'exercice precedent.
je crée un nouveau tableau ou stocker le nouvelle ordre de donnée.
j'ai reutilisée ma boucle random de l'exercices 4.4, en modifiant les donnée par rapport au demande.
comme i plus petit que le longueur du tableau de reference, le nouveau tableau ou ranger les donnée.
je retourne le nouveau tableau.
je crée une variable randomizedCast que je definit egale a randomizeCast avec l'argument du tableau dans mon objet.
enfin je log dans la console la variable randomizedCast
*/
