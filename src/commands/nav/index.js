import { dirname, resolve } from 'path';
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
    list.forEach(item => console.log(item));
}

export { goUpperDir, goToFolder, printListOfDir };