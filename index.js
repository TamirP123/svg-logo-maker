const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const generateShape = require('./document');
const { error } = require('console');


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
    // Prompt questions
    inquirer.prompt(questions).then((res) => {
      // If user enters text longer than 3 characters, return error message.
      if(res.text.length > 3) {
        return error("Must be 3 or less characters")
      }
      else {

      // Runs generateShape on response
      const template = generateShape(res);
      // console.log(template);
      // Creates the logo
      writeFile("logo.svg", template, (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
    }).then(() => {
      console.log("Logo Generated ✅");
    })
  }
  
  // Function call to initialize app
  init();