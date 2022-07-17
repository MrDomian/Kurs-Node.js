/*Working with modules*/

const tutorial = require('./module1');
console.log(tutorial.sum(1,2));
console.log(tutorial.pi);
console.log(new tutorial.SomeMathObject());
