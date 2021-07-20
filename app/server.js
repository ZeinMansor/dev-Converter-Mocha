const express = require('express');
const request = require('request');

const converter = require('./converter');

const app = express();

// RGB TO HEX

app.get('/rth', (req, res) => {
    const red = parseInt(req.query.red, 10);
    const green = parseInt(req.query.green, 10);
    const blue = parseInt(req.query.blue, 10);
    
    let hex = converter.rgbToHex(red, green, blue);
    res.send(hex)
});

// HEX TO RGB

app.get('/htr', (req, res) => {
    let hex = req.query.hex;
    let rgb = converter.hexToRgb(hex)

    res.send(JSON.stringify(rgb));
});



const PORT = 3000;
app.listen(PORT, console.log(`Connected on port: ${PORT}`));