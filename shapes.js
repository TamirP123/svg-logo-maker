class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg width="400" height="110">
    <rect width="300" height="100" fill="${this.shapeColor}" />
    <text x="150" y="50" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg height="500" width="500">
    <polygon points="250,60 100,400 400,400" class="triangle" fill="${this.shapeColor}" />
    <text x="255" y="265" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}

module.exports = { Square, Triangle, Circle };
