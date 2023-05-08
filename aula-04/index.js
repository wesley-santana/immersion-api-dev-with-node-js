/* 
    1- Obter usuário
    2- Obter número de telefone a partir do seu ID
    3- Obter o endereço do usuário a patir do endereço
*/

const util = require('util');

// tranforma callback em promise 

const getAddressAsync = util.promisify(getAddress);

function getUser() {
    return new Promise(function resolveUser(resolve, reject) {
        setTimeout(function(){
            return resolve({
                    id: 1,
                    name: 'John Doe',
                    age: 22,
                })
        }, 1000);
    })
}

function getPhone(id) {
    return new Promise(function resolvePhone(resolve, reject) {
        setTimeout(function(){
            return resolve({
                number: '993461243',
                ddd: '11'
            });
        }, 2000)
    })
}

function getAddress(id, callback) {
    setTimeout(function(){
        return callback(null, {
            street: 'Av. Paulista',
            number: '2000'
        })
    }, 2000)
}


/*
    Adicionar a palavra Async automaticamente ela retornará uma Promise
*/

main();

async function main() {
    try {
        const user = await getUser();
        //const phone = await getPhone(user.id);
        //const address = await getAddressAsync(user.id);

       const result = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ]);

        const phone = result[0];
        const address = result[1];

        console.log(`
            Nome: ${user.name}
            Telefone: ${phone.ddd} ${phone.number}
            Endereço: ${address.street}, ${address.number}
        `)
    } catch (error) {
        console.error('error: ', error);
    }
}

