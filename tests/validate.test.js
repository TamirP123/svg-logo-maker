const {Circle, Triangle, Square} = require("../shapes.js");

describe('Shapes', () => {

  describe('Circle Inheritance', () => {
    it('should return the color set for the new Circle object', () => {
      const shape = new Circle();
      shape.setShapeColor("red");

      expect(shape.shapeColor).toEqual("red");
    });
  });

  describe('Square Inheritance', () => {
    it('should return the color set for the new Square object', () => {
      const shape = new Square();
      shape.setShapeColor("red");

      expect(shape.shapeColor).toEqual("red");
    });
  });

  describe('Triangle Inheritance', () => {
    it('should return the color set for the new Triangle object', () => {
      const shape = new Triangle();
      shape.setShapeColor("red");

      expect(shape.shapeColor).toEqual("red");
    });
  });
})