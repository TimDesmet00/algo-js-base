class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
}

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

console.log(randomRectangle(1000));
