let askTvSerie = () => {
  let name = prompt("veuillez entrez le nom d'une serie");
  let productionYears = prompt(
    "veuillez entrer l'année de procuction de la série"
  );
  let castMembers = [];
  while (true) {
    let castMember = prompt("veuillez entrer le nom d'un acteur");
    if (castMember === "") {
      break;
    } else {
      castMembers.push(castMember);
    }
  }

  let serieTv = {
    name: name,
    productionYears: productionYears,
    castMembers: castMembers,
  };
  return serieTv;
};

let mySerieTv = askTvSerie();
console.log(mySerieTv);

/*
j'ai commencé par declaré ma fonction en fléchée ou je crée mes variable a intégré a mon objet.
j'appelle par un prompt les information et j'ai crée une boucle pour remplir un tableau pour le casting.
la boucle s'arrete sur une entrée vide du prompt, sinon elle continue et inscrit l'information dans le tableau.
ensuite je déclare mon objet avec les variable qui le constitue et je lui applique un return.
je crée une variable qui appel la fonction et ensuite je la log dans la console.
*/
