let inputAr = [
  "Alexandre Vandewiele",
  "Antoine Lansman",
  "Bastien Venturi",
  "Carole Gerard",
  "Dorian Vanden Eynde",
  "Elisabeth Leyder",
  "Elodie Ali",
  "Justin Michel",
  "Justine Frigo",
  "Justine Leleu",
  "Kimi Lefort",
  "Layla",
  "Lidwine Careme",
  "Lucas Beauloi",
  "Marie Tara",
  "Mathias Barbier",
  "Okly 2023",
  "Pierre Marien",
  "Robin Piot",
  "Rosalie Boulard",
  "Stephane Comblez",
  "Tim Desmet",
  "Toms",
  "Valentin Lefort",
  "Vens Alexandre",
  "Virginie Dourson",
];

let randomUser = [];

let pickLearner = (inputAr, n) => {
  if (n <= 0 || n > inputAr.length) {
    alert(
      "vous avez introduit un nombre inferieur a 0 ou superieur au nombre d'entré du tableau"
    );
  } else {
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * inputAr.length);
      randomUser.push(inputAr[randomIndex]);
    }
    return randomUser;
  }
};

pickLearner(inputAr, 8);
console.log(randomUser);

/*
pour commencer j'ai importé le tableau en modifiant son nom.
j'ai crée le tableau randomUser vide pour y stocker les informations retourner par la fonction.
j'ai ensuite déclaré la fonction en flécher avec les arguments inputAr et n.
après je vérifie que le nombre est bien entre 0 et la longueur du tableau.
sinon une alerte se produit.
sinon une boucle for démarre pour produire un nombre random qui servira dans l'index du tableau.
je push le résultat qui est a l'index aléatoire dans le tableau randomUser.
je le retourne pour le récupérer en dehors de la fonction.
j'appelle la fonction avec l'argument du tableau source et le nombre de saisie aléatoire à en sortir.
je log le résultat dans la console pour le vérifier.
*/
