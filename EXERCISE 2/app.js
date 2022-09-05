const { exit } = require('process');

 readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { validateTabuada } = require('./module/calculate.js')
const { validateCont } = require('./module/calculate.js')
const { calculateTabuada } = require('./module/calculate.js')
entradaDados.question('Por favor, informe a tabuada inicial de 2 a 100: ', function(number){
    let numberTabuada1 = parseFloat(number);
    validateTabuada(resultInicial);

        entradaDados.question('Por favor, insira a tabuada final de 2 a 100: ', function(number){
            let numberTabuadaFim = parseFloat(number);
            validateTabuada(resultFim);

            entradaDados.question('Por favor, informe o operador incial de 1 a 50: ', function(number){
                let numberOpInicial = parseFloat(number);
                validateCont(resultContInicial);

                entradaDados.question('Por favor, informe o operador final de 1 a 50: ', function(number){
                    let numberOpFinal = parseFloat(number);
                    validateCont(resultContFinal);

                    if(resultContInicial > resultContFinal){
                        console.log('OPS! O contador inicial não poderá ser maior do que o final')
                        exit();
                    }else{
                        calculateTabuada(numberTabuada1, numberTabuadaFim, numberOpInicial, numberOpInicial);
                    }

                });
            });
         });
});