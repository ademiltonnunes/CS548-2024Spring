// A function that sleeps after some milliseconds and then logs the time it slept for
console.log("Question 2");
async function sleepAsync(millis) {
    t = Date.now()
    console.log("Before sleeping", t);
    await new Promise(resolve => setTimeout(resolve, millis));
    console.log("After sleeping for", Date.now() - t , "millisecond(s)");
  }
  
  sleepAsync(2); // Sleep for some milliseconds