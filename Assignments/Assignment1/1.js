// I created a function that takes an array of promises
// In the array each promise has a string and a timer
// It returns a new promise that is the result of concatenating of all strings from the resolved promises inputed.

console.log("Question 1");
function appendStrings(promises) {
    return new Promise((resolve, reject) => {
        let results = []; // Array to store results

        // Iterating through the promises array using forEach
        promises.forEach((promise, index) => {
            // Executing each single promise
            setTimeout(() => {
                promise.func().then(string => {
                    results[index] = string; // Store the string from the resolved promise
                    console.log('Executed promise:', string, 'Results:', results);

                    // Check if all promises have been resolved
                    if (results.length === promises.length && !results.includes(undefined)) {
                        // Resolve the new promise with the array of strings
                        resolve(results);
                    }
                }).catch(error => {
                    reject(error); 
                });
            }, promise.timer);
        });
    });
}

// Input array of promises with time delay
const promises = [
    { func: () => new Promise(resolve => resolve("I'm ")), timer: 1000 },
    { func: () => new Promise(resolve => resolve("a ")), timer: 2000 },
    { func: () => new Promise(resolve => resolve("bigger ")), timer: 3000 },
    { func: () => new Promise(resolve => resolve("promise!")), timer: 4000 }
];

// Executing the function
appendStrings(promises)
    .then(result => {
        console.log("Appended string:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });



