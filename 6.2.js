//definition de la class rectancle avec les attribut de positionnement et de taille
class rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  collides(otherRectangle) {
    //definition de la zone ou se trouve mon rectangle.
    let topLeftX1 = this.topLeftXPos;
    let topLeftY1 = this.topLeftYPos;
    let bottomLeftX1 = this.topLeftXPos - this.width;
    let bottomLeftY1 = this.topLeftYPos - this.length;
    //definition de la zone ou se trouve le 2eme rectangle
    let topLeftX2 = otherRectangle.topLeftXPos;
    let topLeftY2 = otherRectangle.topLeftYPos;
    let bottomLeftX2 = otherRectangle.topLeftXPos - otherRectangle.width;
    let bottomLeftY2 = otherRectangle.topLeftYPos - otherRectangle.length;

    //verification des collission
    if (
      topLeftX1 < bottomLeftX2 ||
      topLeftX2 < bottomLeftX1 ||
      topLeftY1 < bottomLeftY2 ||
      topLeftY2 < bottomLeftY1
    ) {
      console.log("false");
    } else {
      console.log("true");
    }
  }
}
// création des deux rectangle
let rectangle1 = new rectangle(5, 6, 10, 13);
rectangle1.collides(new rectangle(15, 15, 2, 2));
