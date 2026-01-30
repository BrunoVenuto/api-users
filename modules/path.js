const path = require('path');


// APENAS O NOME DO ARQUIVO ATUAL    
console.log(path.basename(__filename)); // path.js

// NOME DO DIRETÓRIO ATUAL
console.log(path.dirname(__filename)); // modules

// EXTENSÃO DO ARQUIVO
console.log(path.extname(__filename)); // .js


// OBJETO COM INFORMAÇÕES DO ARQUIVO
console.log(path.parse(__filename));