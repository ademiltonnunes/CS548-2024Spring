//Example of a Callback Hell
//Goal of this function is to print in console each word of an array after 1 second
//The function is called animateAll and it takes a callback function as parameter
//It is callback hell because it is a nested function within asynchronous operations, 
//leading to code that is difficult to read, understand, and maintain due to its deeply nested structure.

console.log("Question 5.1 - Callback Hell");

let words = ['SFBU', 'WebService', 'Class']
 
const animateAll = (callback) => {
    setTimeout(() => {
        callback(words[0]);
        setTimeout(() => {
            callback(words[1]);
            setTimeout(() => {
                callback(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
}

const animate = (parameter) => {
    console.log(parameter);
}

animateAll(animate);