//Example of a Callback Hell Optimization
//To refactor the code to avoid callback hell, you can use asynchronous functions such as Promises or async/await.
//This solution provides a more structured and readable way to handle asynchronous operations compared to nested callbacks. 
//By using Promises and async/await, the code becomes more linear and easier to understand, making it simpler to manage 
//asynchronous behavior and avoid the callback hell problem.

console.log("Question 5.2 - Optimization to avoid Callback Hell");

let words = ['SFBU', 'WebService', 'Class'];

const animateOne = (word) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(word);
            resolve();
        }, 1000);
    });
};

const animateAll = async () => {
    for (let word of words) {
        await animateOne(word);
    }
};

animateAll();
