import { commands } from "./settings.js";
import { goUpperDir, goToFolder, printListOfDir } from "./commands/nav/index.js";
import { printCurrentPath, printInvalidInputMessage } from "./utils.js";
import { copyFile, createFile, moveFile, printFileContent, removeFile, renameFile } from "./commands/basic/index.js";
import { compressFile, decompressFile } from "./commands/archive/index.js";

function parseOperation(operation) {
    const [command, source, target] = operation;

    switch (command) {
        case commands.up:
            goUpperDir();
            printCurrentPath();
            break;
        case commands.cd:
            goToFolder(source);
            printCurrentPath();
            break;
        case commands.ls:
            printListOfDir();
            printCurrentPath();
            break;
        case commands.cat:
            printFileContent(source);
            printCurrentPath();
            break;
        case commands.add:
            createFile(source);
            printCurrentPath();
            break;
        case commands.rn:
            renameFile(source, target);
            break;
        case commands.cp:
            copyFile(source, target);
            break;
        case commands.mv:
            moveFile(source, target);
            break;
        case commands.rm:
            removeFile(source, target);
            break;
        case commands.os:
            console.log('os')
            break;
        case commands.hash:
            console.log('hash')
            break;
        case commands.compress:
            compressFile(source, target, printCurrentPath)
            break;
        case commands.decompress:
            decompressFile(source, target, printCurrentPath)
            break;
        case commands.exit:
            process.exit(0);
            break;
        default:
            printInvalidInputMessage()
            printCurrentPath();
    }
}

export { parseOperation };