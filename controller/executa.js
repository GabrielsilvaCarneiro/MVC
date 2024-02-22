const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { cateto1, cateto2 } = req.body;
    const Hipotenusa = Calculadora.Hipotenusa(
        parseFloat(cateto1), parseFloat(cateto2)
    );
    res.redirect(`/calculo.html?hipotenusa=${Hipotenusa}`);
    // res.send(`A hipotenusa é: ${Hipotenusa}`);
});

module.exports = resultado;

