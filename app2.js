/*The Events module and EventEmitter class*/

const { throws } = require('assert');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();// Instancja emitera zdarzen

eventEmitter.on('tutorial',(num1, num2)=>{
    console.log(num1 + num2);
});// Dolaczamy detektor

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

christina.on('name',()=>{
    console.log('my name is ' + christina.name);
});

pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
})

pedro.emit('name');
christina.emit('name');