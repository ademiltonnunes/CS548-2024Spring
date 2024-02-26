# Assignment-1-JS
JavaScript Assignment


## Promise
### 1. Write a function that takes an array of promises as input and returns a new promise. The new promise should resolve with an array of results once all input promises are resolved. Implement this without using Promise.all

### 2. Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

**Example**

`Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
}); `


 

### 3. Create an asynchronous function that iterates over an array of values and performs an asynchronous operation on each element. Ensure that the operations are executed sequentially, not concurrently.

### 4. Implement a function that takes an array and an asynchronous mapping function. The function should return a new array with the results of applying the mapping function to each element, maintaining the order. Use async/await for handling asynchronous operations.

### 5. Write a example function of callback hell and give another solution how you can optimize that code. Discuss the problems of Callback hell in Async programming
