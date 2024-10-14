import { readFileSync } from 'fs';
import { createHash } from "crypto";
import { resolve } from "path";

import { userParams} from "../../settings.js";
import { printFailedMessage } from '../../utils.js'
const calcHash = (file) => {
    try {
        const filepath = resolve(userParams.currentPath, file);
        const data = readFileSync(filepath, "utf-8");
        const hash = createHash('md5').update(data).digest('hex');
        console.log(`Hash of file is ${hash}.`);
    } catch (err) {
        console.log(printFailedMessage);
    }
}

export { calcHash };