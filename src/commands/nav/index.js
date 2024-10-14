import { dirname, resolve, extname } from 'path';
import { readdirSync } from 'fs';

import { userParams } from "../../settings.js";

const goUpperDir = () => {
    userParams.currentPath = dirname(userParams.currentPath);
}

const goToFolder = (folder) => {
    userParams.currentPath = resolve(userParams.currentPath, folder ?? '');
}

const printListOfDir = () => {
    const list = readdirSync(userParams.currentPath);
    const result = [];
    list.forEach((item, index) => {
        result.push({
            Name: item,
            Type: extname(item) === '' ? 'Directory' : 'File',
        });
    });

    console.table(result);
}

export { goUpperDir, goToFolder, printListOfDir };