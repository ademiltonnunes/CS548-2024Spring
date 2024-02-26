// Function that takes an array and an async mapping function, and executes the mapping function for each item in the array, in order.
// The mapping function converts a letter to its decimal ASCII code.
console.log("Question 4");
async function execute(array, asyncMappingFunction) {
    const results = [];

    for (let i = 0; i < array.length; i++) {
        const result = await asyncMappingFunction(array[i]);
        results.push(result);
    }

    return results;
}

// Map fuction: Change letter to decimal
async function convertToDecimal(letter) {   
    // Get the ASCII code of the lowercase letter
    return letter.charCodeAt(0);
}

// Input:
const letters = ['S', 'F', 'B', 'U'];

execute(letters, convertToDecimal).then((decimals) => {
    console.log(letters);
    console.log(decimals); 
});
