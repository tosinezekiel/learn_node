const path = require('path');

const dirInfo = path.parse(__filename);

// console.log(dirInfo.ext)

// console.log(path.parse(__filename));

// console.log(path.basename(__filename));

// console.log(path.win32.basename(__filename));

// console.log(path.extname(__filename));

// console.log(path.dirname(__filename));

console.log(process.env.PATH.split(path.delimeter));


console.log(path.join(__dirname,'redemption.js'))
