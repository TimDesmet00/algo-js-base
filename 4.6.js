let factorial = (a) => {
  // Cas de base : si n est égal à 0 ou 1, la factorielle est 1.
  if (a === 0 || a === 1) {
    return 1;
  } else {
    // Cas récursif : la factorielle de n est n multiplié par la factorielle de (n - 1).
    return a * factorial(a - 1);
  }
};

const result = factorial(3); // Calculera 5! = 120
console.log(result);
