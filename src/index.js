import { InvalidInputError } from '#Errors/invalidInputError';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    try {
        // 1º Capturar la entrada del usuario por consola
        const userAnswer = await promptQuestion('Introduce tu operacion: ');

        // 2º Validar la entrada y separar las partes de la misma en operandos y operador
        const standarizeInput = userAnswer.trim();
        if (standarizeInput === '') throw new InvalidInputError();
        const operator = getOperator(standarizeInput);

        if (!operator) throw new InvalidInputError();
    } catch (error) {
        if (error instanceof InvalidInputError) console.log(error.message);
        else
            console.log(
                `Error no controlado: ${error.message}. Stack: ${error.stack}`
            );
    }
    // 3º Realizar la operacion
    // 4º Mostrar resultado por consola
})();
