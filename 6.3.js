// definition de la class avec le constructor
class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  // Méthode pour vérifier s'il y a une collision avec un autre rectangle
  collisionAvec(otherRectangle) {
    // Calcul des coordonnées du coin supérieur gauche et inférieur droit pour les deux rectangles
    let thisX1 = this.topLeftXPos;
    let thisY1 = this.topLeftYPos;
    let thisX2 = this.topLeftXPos + this.width;
    let thisY2 = this.topLeftYPos + this.length;

    let otherX1 = otherRectangle.topLeftXPos;
    let otherY1 = otherRectangle.topLeftYPos;
    let otherX2 = otherRectangle.topLeftXPos + otherRectangle.width;
    let otherY2 = otherRectangle.topLeftYPos + otherRectangle.length;

    // Vérification de la collision
    if (
      thisX1 < otherX2 &&
      thisX2 > otherX1 &&
      thisY1 < otherY2 &&
      thisY2 > otherY1
    ) {
      return true; // Il y a collision
    } else {
      return false; // Pas de collision
    }
  }
}

// Fonction pour vérifier les collisions avec le premier rectangle généré
function verifierCollisions(rectangles) {
  let premierRectangle = rectangles[0];

  // Parcourir les autres rectangles à partir du deuxième
  for (let i = 1; i < rectangles.length; i++) {
    let autreRectangle = rectangles[i];
    if (premierRectangle.collisionAvec(autreRectangle)) {
      console.log(
        `Collision entre le premier rectangle et le rectangle ${i + 1}`
      );
    }
  }
}
// creation d'une fonction qui definit des rectangles des données des rectangles aléatoire
// et envoie dans le constructor de class
// stockage des information dans un tableau
let randomRectangle = (n) => {
  let rectangles = [];
  for (let i = 0; i < n; i++) {
    let topLeftXPos = Math.floor(Math.random() * 100);
    let topLeftYPos = Math.floor(Math.random() * 100);
    let width = Math.floor(Math.random() * 10);
    let length = Math.floor(Math.random() * 10);
    rectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length));
  }
  return rectangles;
};

const rectangles = randomRectangle(1000); // appel a la creation des milles rectangles
console.log(rectangles); //log de l'array dans la console
verifierCollisions(rectangles); //appel a la comparaison entre la premiere et les autres rectangles generer
