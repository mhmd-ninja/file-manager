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

export { getMessage };