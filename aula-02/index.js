/* 
    1- Obter usuário
    2- Obter número de telefone a partir do seu ID
    3- Obter o endereço do usuário a patir do endereço
*/



// Modelo de Callback

/* 
    function resolveUser(error, success) {
        console.log('success: ', success);
    }
*/


function getUser(callback) {
    setTimeout(function(){
        return callback(null, {
            id: 1,
            name: 'John Doe',
            age: 22,
        });
    }, 1000);
}

function getPhone(id, callback) {
    setTimeout(function(){
        return callback(null, {
            number: '993461243',
            dd: '11'
        });
    }, 2000)
}

function getAddress(id, callback) {
    setTimeout(function(){
        return callback(null, {
            street: 'Av. Paulista',
            number: '2000'
        })
    }, 2000)
}

getUser(function(errorUser, user){
    if(errorUser) {
        console.error('Error get User: ', errorUser);
        return;
    }
    getPhone(user.id, function(errorPhone, phone) {
        if(errorPhone){
            console.error('Error get phone: ', errorPhone);
            return;
        }

        getAddress(user.id, function(errorAddress, address){
            if(errorAddress){
                console.error('Error get address: ', errorAddress);
                return
            }

            console.log(`
                Nome: ${user.name} - Telefone: (${phone.dd}) ${phone.number} - Endereço: ${address.street}, ${address.number}
            `)
        })
    });
});
