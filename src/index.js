import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
    // 1º Capturar la entrada del usuario por consola
    const userAnswer = await promptQuestion('Introduce tu operacion: ');
    console.log(userAnswer);

    // 2º Validar la entrada y separar las partes de la misma en operandos y operador
    // 3º Realizar la operacion
    // 4º Mostrar resultado por consola
})();
