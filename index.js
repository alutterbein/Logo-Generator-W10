const inquirer = require("inquirer");
const SVG = require("./library/shapes");
const { writeFile } = require("fs/promises");

const questions = [
{
    name: "text",
    type: "input",
    message: "enter 3 characters, no more",
    validate: (text) => text.length <=  3 || "Must not exced 3 characters",



}


]

const generateLogo = () => {
inquirer
    .prompt (questions)
    .then(({ text }) => {
        const svg = new SVG();
        svg.setText(text);
        return writeFile("logo.svg", svg.render());
    })
.catch((error) => {
console.log(error)

});

}
generateLogo()