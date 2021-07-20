const expect = require('chai').expect;
const converter = require('../app/converter');

describe("Color Code Converter", () => {
    
    // RGB TO HEX

    describe("RGB to Hex Converson", () => {
        it("Converts the basic colors", () => {
            
            // testing the rgbToHex Function
            const redHex = converter.rgbToHex(255, 0, 0);
            const greenHex = converter.rgbToHex(0, 255, 0);
            const blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");

        });
    });


    // HEX TO RGB

    describe('Hex to RGB Conversion', () => {
        it("Converts the basic colors", () => {

            const red   = converter.hexToRgb("ff0000");
            const green = converter.hexToRgb("00ff00");
            const blue  = converter.hexToRgb("0000ff");

            // .deep match all elements of the array one bay one Deaply

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
            
        })    
    })
    
})