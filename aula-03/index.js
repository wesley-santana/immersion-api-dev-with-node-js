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
                dd: '11'
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

const user  = getUser();

user.then(function(result){
    return getPhone(result.id).then(function(phone) {
        return {
            user: {
                name: result.name,
                id: result.id,
            },
            phone: phone,
        }
    });
}).then(function(result) {
    return getAddressAsync(result.user.id).then(function(address) {
        return {
            user: result.user,
            phone: result.phone,
            address: address,
        }
    });
}).then(function(result) {
    console.log(`
    Nome: ${result.user.name}
    Telefone: (${result.phone.dd}) ${result.phone.number}
    Endereço: ${result.address.street}, ${result.address.number}
    `)  
}).catch(function(error){
    console.error('error: ', error);
});
