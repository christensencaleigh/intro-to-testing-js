// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

/* can replace function statement with a function expression
 and it still works because functions are first class citizens in JS
*/

// const helloWorld = function() {
//     return "Hello, World!";
// }

function helloWorld() {
    return (typeof helloWorld, function() {

    })
}