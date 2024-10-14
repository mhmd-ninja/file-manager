import { getMessage } from "./utils.js";
const validateArgsLength = (length) => {
    if (length <= 2) {
        const errorMessage = getMessage('invalidInput');
        throw new Error(errorMessage);
    }
}

const validateUsernameParam = (paramKey, paramValue) => {
    if (paramKey !== '--username' || !paramValue) {
        const errorMessage = getMessage('invalidUserName');
        throw new Error(errorMessage);
    }
}

export { validateArgsLength, validateUsernameParam}