// Para executar o código é necessário a instalação do nodejs e executar no terminal o seguinte comando:
// node index.js

const fs = require('fs');

const rawData = fs.readFileSync('./dados.json');
const diasFaturamento = JSON.parse(rawData);
let menorFaturamento = {};
let maiorFaturamento = {};
let diasTotais = 0;
let valorTotal = 0;
diasFaturamento.forEach(function(diaValor) {
    const valor = diaValor.valor;
    if(valor > 0){
        if(valor < menorFaturamento.valor || menorFaturamento.valor == undefined){
            menorFaturamento = diaValor;
        }
        if(valor > maiorFaturamento.valor || maiorFaturamento.valor == undefined){
            maiorFaturamento = diaValor;
        }
        diasTotais++;
        valorTotal += valor;
    }
});
console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("media de faturamento:", valorTotal/diasTotais);