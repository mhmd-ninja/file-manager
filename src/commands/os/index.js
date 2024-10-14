import { EOL, homedir, userInfo, arch } from "os";

import { printCPUS, printInvalidInputMessage } from "../../utils.js";

export const parseOS = (param) => {
    switch (param) {
        case '--EOL':
            console.log(`Default system End-Of-Line: ${EOL}.`);
            break;
        case '--cpus':
            printCPUS()
            break;
        case '--homedir':
            console.log(`Homedir is ${homedir()}.`);
            break;
        case '--username':
            console.log(`System username is ${userInfo().username}.`);
            break;
        case '--architecture':
            console.log(`CPU architecture is ${arch()}.`);
            break;
        default:
            printInvalidInputMessage()
    }
}