
const fs = require('fs');
const path = require('path');



// CRIA RUMA PASTA]
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log(`Erro ao criar a pasta: ${error}`);
    }

    console.log('Pasta criada com sucesso!');
})


// CRIA UM ARQUIVO E ESCREVE NELE
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 
// 'Helloo world', 
// (error) => {
//     if (error) {
//         return console.log('Error: ', error);
//     }

//     console.log("Arquivo criado com sucesso!")
// }
// )

fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    "Hello NodeJs",
    (error) => {
        if (error) {
            return console.log("Erro:", error);
        }

        console.log("Arquivo modificado com sucesso")
    }
)
