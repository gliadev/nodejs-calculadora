import readLine from 'readline';
import { promisify } from 'util';

const consoleInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const promptQuestion = promisify(consoleInterface.question).bind(
    consoleInterface
);
