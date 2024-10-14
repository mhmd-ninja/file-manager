import { resolve } from 'path';
import { readFileSync,
    openSync,
    renameSync,
    copyFileSync,
    existsSync,
    mkdirSync,
    unlinkSync,
} from 'fs';
import {userParams} from "../../settings.js";
import {printFailedMessage, printMessage} from "../../utils.js";

const printFileContent = (file) => {
    try {
        const filePath = resolve(userParams.currentPath, file);
        const fileContent = readFileSync(filePath, 'utf-8');
        printMessage('log', fileContent);
    } catch (e) {
        printFailedMessage()
    }
}

const createFile = (file) => {
    try {
        const filePath = resolve(userParams.currentPath, file);
        openSync(filePath, 'w')
    } catch (e) {
        printFailedMessage()
    }
}

const renameFile = (file, renamedFile) => {
    try {
        const oldFilePath = resolve(userParams.currentPath, file);
        const newFilePath = resolve(userParams.currentPath, renamedFile);
        renameSync(oldFilePath, newFilePath)
    } catch (e) {
        printFailedMessage()
    }
}

const copyFile = (file, targetDir) => {
    try {
        const filePath = resolve(userParams.currentPath, file);
        const targetDirPath = resolve(userParams.currentPath, targetDir);
        const targetFilePath = resolve(targetDirPath, file)
        if (!existsSync(targetDirPath)) {
            mkdirSync(targetDirPath, { recursive: true });
        }
        copyFileSync(filePath, targetFilePath);
        console.log(`\n ${file} successfully copied into ${targetDirPath}!`);
    } catch (e) {
        printFailedMessage()
    }
}

const moveFile = (file, targetDir) => {
    try {
        const filepath = resolve(userParams.currentPath, file);
        const targetDirPath = resolve(userParams.currentPath, targetDir);
        const targetFilePath = resolve(targetDirPath, file);
        if (!existsSync(targetDirPath)) {
            mkdirSync(targetDirPath, { recursive: true });
        }
        copyFileSync(filepath, targetFilePath);
        unlinkSync(filepath)
        console.log(`${file} successfully moved into ${targetDir}!`);
    } catch (e) {
        printFailedMessage()
    }
}

const removeFile = (file) => {
    try {
        const filepath = resolve(userParams.currentPath, file);
        unlinkSync(filepath)
        console.log(`${file} successfully removed!`);
    } catch (e) {
        printFailedMessage()
    }
}

export { printFileContent,
    createFile,
    renameFile,
    copyFile,
    moveFile,
    removeFile
};