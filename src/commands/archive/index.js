import {createReadStream, createWriteStream} from 'fs';
import {resolve} from "path";
import {createBrotliCompress, createBrotliDecompress} from 'zlib';

import { userParams} from "../../settings.js";
import { printFailedMessage, resolvePaths } from "../../utils.js";

const compressFile = (file, compressedPath, callback) => {
    try {
        const filepath = resolve(userParams.currentPath, file);
        const targetPath = compressedPath.slice(-3) === '.br' ?
            resolve(userParams.currentPath, compressedPath) :
            resolve(userParams.currentPath, compressedPath + '.br');

        const readStream = createReadStream(filepath);
        const writeStream = createWriteStream(targetPath);
        const compressStream = createBrotliCompress();

        readStream
            .on('error', printFailedMessage)
            .pipe(compressStream)
            .on('error', printFailedMessage)
            .pipe(writeStream)
            .on('error', printFailedMessage)
            .on('finish',() => {
                readStream.close();
                compressStream.close();
                writeStream.close();

                console.log(`${file} successfully compressed. Compressed file's path is ${targetPath}`);

                if(callback) {
                    callback();
                }
            })
    } catch (e) {
        printFailedMessage();
    }
}


const decompressFile = (filename, decompressedPath, callback) => {
    try {
        const { filepath, targetPath } = resolvePaths(filename, decompressedPath);

        const readStream = createReadStream(filepath);
        const writeStream = createWriteStream(targetPath);

        const decompressStream = createBrotliDecompress();
        readStream
            .on('error', printFailedMessage)
            .pipe(decompressStream)
            .on('error', printFailedMessage)
            .pipe(writeStream)
            .on('error', printFailedMessage)
            .on('finish', () => {
                readStream.close();
                decompressStream.close();
                writeStream.close();

                console.log(`${filename} successfully decompressed. Decompressed file's path is ${targetPath}`);

                if(callback) {
                    callback();
                }

            })
    } catch (e) {
        printFailedMessage();
    }
}

export { compressFile, decompressFile };