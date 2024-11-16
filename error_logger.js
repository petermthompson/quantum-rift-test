var logOfConsole = [];

var _warn = console.warn,
    _error = console.error;

console.warn = function() {
    logOfConsole.push({method: 'warn', arguments: arguments});
    console.log("There was a warning: ", arguments)
    return _warn.apply(console, arguments);
};

console.error = function() {
    logOfConsole.push({method: 'error', arguments: arguments});
    console.log("There was an error: ", arguments)
    return _error.apply(console, arguments);
};