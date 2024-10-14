import { createInterface } from 'readline'
import { homedir } from 'os';
import { userParams } from './settings.js';
import { validateArgsLength, validateUsernameParam } from './validations.js'
import { printCurrentPath, printExitMsg, printWelcomeMsg} from "./utils.js";
import { parseOperation } from './operations.js';

function main({ directory, username }) {
    userParams.username = username;
    userParams.currentPath = directory;

    printWelcomeMsg();
    printCurrentPath();

    const readLine = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.on('line', (line) => {
        parseOperation(line.split(' '));
    })

    process.on('exit', () => {
        readLine.close();
        printExitMsg();
    })
}

function init() {
    try {
        validateArgsLength(process.argv.length);

        const [key, value] = process.argv.slice(2)[0].split('=');
        
        validateUsernameParam(key, value);

        main({
            directory: homedir(),
            username: value,
        });
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}
init();