class circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  move(xOffset, yOffset) {
    this.xPos += xOffset;
    this.yPos += yOffset;
  }
  get surface() {
    return Math.PI * this.radius ** 2;
  }
}

let myCircle = new circle(5, 10, 3);

console.log(`surface: ${myCircle.surface}`);

/*
pour commencer j'ai declarer la classe avec le nom circle.
j'ai definit le constructor avec les 3 element position x, position y, et le rayon du cercle.
ensuite comme demandé dans l'ennoncé , j'ai définit un move avec comme argument un x offset et un y offset.

ensuite le get surface permet d'envoyer le resultat du calcule d e la surface du cercle.
ensuite je lance la classe avec le constructor en lui donner les 3 données neccessaires a la construction du cercle.
et je log le resultat de la surface du cercle.
*/
