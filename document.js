const {Circle, Triangle, Square} = require("./shapes");

function generateShape(res) {
  if (res.shapes === "Circle") {
    // Create the chosen shape
    const chosenShape = new Circle(res.text, res.textColor, res.shapeColor);
    // Return the shape in the svg written form with its data
    console.log(chosenShape);
    return chosenShape.render();
  } else if (res.shapes === "Triangle") {
    // Create the chosen shape
    const chosenShape = new Triangle(res.text, res.textColor, res.shapeColor);
    // Return the shape in the svg written form with its data
    return chosenShape.render();
  } else {
    // Create the chosen shape
    const chosenShape = new Square(res.text, res.textColor, res.shapeColor);
    // Return the shape in the svg written form with its data
    console.log(chosenShape);
    return chosenShape.render();
  }
}

module.exports = generateShape;
