class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = ""; 
        this.colorElement = "";
    }

    setText(text) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle">${text}</text>`;
    }
    
    setShape(shape, color) {
        this.shapeElement = shape; 
        this.colorElement = color; 
    }

    generateSVG(fileName) {
        // Construct the SVG string based on selected shape and color
        let shapeElement = "";

        if (this.shapeElement === 'triangle') {
            shapeElement = `<polygon points="150,18 244,182 56,182" fill="${this.colorElement}" />`;
        } else if (this.shapeElement === 'circle') {
            shapeElement = `<circle cx="100" cy="100" r="80" fill="${this.colorElement}" />`;
        } else if (this.shapeElement === 'square') {
            shapeElement = `<rect x="73" y="40" width="160" height="160" fill="${this.colorElement}" />`;
        }
        
        // Complete SVG string with text and shape
        const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            ${this.textElement}
                            ${shapeElement}
                          </svg>`;

        // Write SVG string to file
        fs.writeFile(fileName, svgString, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shapeElement === 'circle' ? `<circle cx="100" cy="100" r="80" fill="${this.colorElement}" />` : ''}
        ${this.shapeElement === 'square' ? `<rect x="73" y="40" width="160" height="160" fill="${this.colorElement}" />` : ''}
        ${this.shapeElement === 'triangle' ? `<polygon points="150,18 244,182 56,182" fill="${this.colorElement}" />` : ''}
        ${this.textElement}
                </svg>`;
    }
}

module.exports = SVG;
