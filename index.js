const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const generateShape = require('./document');


const questions = [
    {
      type: "input",
      name: "text",
      message:
        "Please enter your text(cannot be more than 3 characters)",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Please enter the color you want the text to be.",
    },
    {
        type: "list",
        name: "shapes",
        message:
        "What shape did you want?",
        choices: ["Square", "Triangle", "Circle"]
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Please enter the color you want your shape to be.",
    },
];
  
  function init() {
    inquirer.prompt(questions).then((res) => {
    //   if(res.text.length > 3) {
    //     console.log("Must be 3 or less characters!")
    //     inquirer.prompt(questions);
    //   }
      const template = generateShape(res);
      console.log(template);
      console.log("Logo Generated ✅");
  
      writeFile("logo.svg", template, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });
  }
  
  // Function call to initialize app
  init();