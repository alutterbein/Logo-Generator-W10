class SVG {
    constructor() {
        this.textElement = "";
    }
    setText(text) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle">${text}</text>`;
        

}





render() {
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.textElement}</svg>`
    
    
}
}

module.exports = SVG;