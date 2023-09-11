function calcDistance(x1, y1, x2, y2) {
  // Calcul des différences entre les coordonnées x et y
  const diffX = x2 - x1;
  const diffY = y2 - y1;

  // Calcul de la distance euclidienne en utilisant la formule
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);

  // Retourne la distance calculée
  return distance;
}

// Exemple d'utilisation de la fonction
const distance = calcDistance(4, 1, 1, 1);
console.log("La distance est : " + distance);
