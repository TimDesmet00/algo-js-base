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
    let topLeftX = this.topLeftXPos;
    let topLeftY = this.topLeftYPos;
    let bottomLeftX = this.topLeftXPos - this.width;
    let bottomLeftY = this.topLeftYPos - this.length;
  }
  if (
    
  )
}

let rectangle1 = new rectangle(5, 6, 10, 13);
rectangle1.collides(new rectangle(8, 7, 3, 5));
