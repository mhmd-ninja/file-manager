import { resolve } from "path";
import {userParams} from "./settings.js";

function getMessage(msgType, msgParam = '') {
  switch (msgType) {
      case 'welcome':
          return `Welcome to the File Manager, ${msgParam}!`;
      case 'exit':
          return `Thank you for using File Manager, ${msgParam}, goodbye!`;
      case 'currentPath':
          return `You are currently in ${msgParam}`;
      case 'invalidInput':
          return 'Invalid input';
      case 'invalidUserName':
          return 'Invalid username';
      case 'failed':
          return 'Operation failed';
      default:
          return '';
  }
}

const printMessage = (msgType, message) => {
    if (msgType === 'error') {
        console.error('\n' + message);
    } else {
        console.log('\n' + message);
    }
}

const printWelcomeMsg = () => {
    const message = getMessage('welcome', userParams.username);
    printMessage('log', message);
}

const printExitMsg = () => {
    const message = getMessage('exit', userParams.username);
    printMessage('log', message);
}

const printCurrentPath = () => {
    const message = getMessage('currentPath', userParams.currentPath);
    printMessage('log', message);
}

const printFailedMessage = () => {
    const message = getMessage('failed');
    printMessage('error', message)
}

const printInvalidInputMessage = () => {
    const message = getMessage('invalidInput');
    printMessage('error', message)
}

function resolvePaths(filename, path) {
    const filepath = resolve(userParams.currentPath, filename);
    const targetPath = resolve(userParams.currentPath, path);
    return {
        filepath,
        targetPath
    }
}

export { getMessage,
    printWelcomeMsg,
    printExitMsg,
    printCurrentPath,
    printMessage,
    printFailedMessage,
    printInvalidInputMessage,
    resolvePaths
};