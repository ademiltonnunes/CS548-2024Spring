// Doing a async function that executes in sequence an array of operations
// A closure function that takes an value from array and waite for the value/second.
// It waits for the previous operation to complete before starting the next one.
console.log("Question 3");
async function execSeqOper(values) {
    for (let i = 0; i < values.length; i++) {
      await performAsyncOperation(values[i]);
    }

    async function performAsyncOperation(value) {
        return new Promise((resolve) => {
            setTimeout(() => {
            console.log('Got value:', value, 'Waited for', value, 'seconds');
            resolve();
            }, value * 1000); // Delay of values[i] seconds
        });
    }
}
  


// Example usage:
const values = [1, 2, 3, 4, 5];

execSeqOper(values)
.then(() => {
    console.log("All operations completed in sequence");
})
.catch((error) => {
    console.error("Error occurred:", error);
});
