const lodash = require('lodash');

let hello = async function() { return "Hello" };
let world = async function() { return "world" };
hello();


world();

hello().then(async(value) => {
    setTimeout(function() {
        console.log(value);
    }, 3000);

});
world().then((value) => console.log(value));