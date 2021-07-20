const expect = require('chai').expect;
const request = require('request');

describe("Color Code API Conversion", () => {

    // RGB TO HEX
    describe("RGB to Hex Conversion", () => {

        const url = "http://localhost:300/rth?red=255&green=255&blue=255";

        it("returns status 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });

        it("returns the color in hex", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal("ffffff")
                done()
            });
        });
    });

    // HEX TO RGB
    describe("Hex to RGB conversion", function() {
        const url = "http://localhost:3000/htr?hex=00ff00";
    
        it("returns status 200", function() {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
          });
        });
    
        it("returns the color in RGB", function() {
          request(url, function(error, response, body) {
            expect(body).to.equal("[0,255,0]");
          });
        });
      });
    });