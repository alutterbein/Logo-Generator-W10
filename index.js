const inquirer = require("inquirer");
const SVG = require("./library/shapes");
const { writeFile } = require("fs/promises");

const questions = [
{
    name: "text",
    type: "input",
    message: "enter 3 characters, no more",
    validate: (text) => text.length <=  3 || "Must not exced 3 characters",



},
{
    name: "color",
    type: "input",
    message: "enter a color keyword or hexdecimal color value",



},
{
    name: 'shape',
    message: 'describe your readme',
    type: 'list',
    choices: ["circle", "square", "triangle"],


}
]

const generateLogo = () => {
inquirer
    .prompt (questions)
    .then(({ text, color, shape }) => {
        const svg = new SVG();
        svg.setText(text);
        svg.setShape(shape, color);
        return writeFile("logo.svg", svg.render());
    })
.catch((error) => {
console.log(error)

});

}
generateLogo()