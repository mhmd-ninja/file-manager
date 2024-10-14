import { createInterface } from 'readline';
import { homedir } from 'os';
import { userParams } from './settings.js';
import { validateArgsLength, validateUsernameParam } from './validations.js';
import { getMessage } from "./utils.js";

function main({ directory, username }) {
    userParams.username = username;
    userParams.currentPath = directory;
    console.log(getMessage('welcome', userParams.username));
    console.log(getMessage('currentPath', userParams.currentPath));
    const readLine = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    process.on('exit', () => {
        readLine.close();
        console.log(getMessage('exit', userParams.username));
    })
}

function init() {
    try {
        validateArgsLength(process.argv.length);

        const [key, value] = process.argv.slice(2)[0].split('=');
        console.log(key)
        
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