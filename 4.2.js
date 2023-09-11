let rand10 = (max = 10) => {
  return Math.floor(Math.random() * max);
};

console.log(rand10());

/*
ici pour créer la fonction qui génère un nombre entre 1 et 10. 
j'ai utilisé une fonction fléchée appeller rand10 comme demandé dans l'énoncer en définissant un argument max que j'ai reglé à 10 par défaut
ensuite je lui ai demandé de retourner un nombre entier avec la propriété Math.floor.
qui reçois un nombre aléatoire de la propriété Math.random multiplier par le nombre maximum? 
*/
