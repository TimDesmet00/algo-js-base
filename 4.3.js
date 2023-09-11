let array = [];

let multiRand = (n) => {
  for (let i = 0; i < n; i++) {
    let rand10 = (max = 10) => {
      return Math.floor(Math.random() * max);
    };
    console.log(rand10());
    array.push(rand10());
  }
};

multiRand(8);
console.log(array);

/*
pour cet exercice, j'ai commencé par déclarer une array vide que je pourrais appeler dans ma fonction.
ensuite j'ai declaré une fonction fléchée qui demande un argument n qui définira le nombre de fois ou la boucle for qui se répétera.
j'ai définit la boucle for qui répétera la fonction rand10 n fois.
j'inscris dans un tableau les réponses générées par la fonction.
*/
