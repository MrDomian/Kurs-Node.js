/*Working with modules*/

const sum = (num1, num2) => num1 + num2;
const pi = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

module.exports = {sum: sum, pi: pi, SomeMathObject: SomeMathObject}