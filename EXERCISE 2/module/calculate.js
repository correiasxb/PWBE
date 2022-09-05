const { exit } = require("process");

let erro = false;

function validate(erro){
    if(erro == true){
        console.log('Preencha um número válido')
        exit();
    }
}

function validateTabuada(number){
    if(number < 2 || number > 100){
        erro = true;
        validateError(erro);
    }
}

function validateCont(number){
    if(number < 1 || number > 50){
        erro = true;
        validateError(erro);
    }
}

function calculateTabuada(numberTabuada1, numberTabuadaFim, numberOpInicial, numberOpFinal){
    while(numberTabuada1 <= numberTabuadaFim){
        for(operador = numberOpInicial; operador <= numberOpFinal; operador++){
            console.log(numberTabuada1 + ' x ' + operador + ' = ' + (numberTabuada1 * operador));
        }
        numberTabuada1++;
    }
}

module.exports = {
    validateTabuada,
    validateCont,
    calculateTabuada
}