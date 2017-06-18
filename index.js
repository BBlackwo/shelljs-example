const { exec } = require('shelljs');

const successResponse = exec('./success.sh');
console.log(successResponse);

const errorResponse = exec('./error.sh');
console.log(errorResponse);

console.log('exiting with code', errorResponse.code);
process.exit(errorResponse.code);