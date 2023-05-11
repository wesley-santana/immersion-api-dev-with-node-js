const EventEmmiter = require('events');

class MyEmmiter extends EventEmmiter {

}

const myEmmiter = new MyEmmiter();
const myEvent = 'user:click';

myEmmiter.on(myEvent, function(clicked){
    console.log('um usuário clicou', clicked)
});

/*
    myEmmiter.emit(myEvent, 'scroll bar');
    myEmmiter.emit(myEvent, 'submit button');

    let counter = 0;

    setInterval(function() {
        myEmmiter.emit(myEvent, 'menu bar: ' + (counter++));
    }, 1000); 
*/

const stdin = process.openStdin();
stdin.addListener('data', function(value) {
    console.log(`Você digitou: ${value.toString().trim()}`);
});

