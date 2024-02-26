console.log("Hello World");

// Closure

function mainFunction(){
	let year = 2024
	let variable = "this is 2024"

	function childFunction(){
		let nextyear = year+1;
		let childVariable = variable
		console.log(nextyear, childVariable)
	}

	return childFunction
}

// const simpleClosure = mainFunction()

// simpleClosure()


function createCounter(){
	let count = 0;

	function increment(){
		count++
		console.log(count)
	}

	function decrement(){
		count--
		console.log(count)
	}

	return{
		increment,
		decrement
	}
}

// const counter1 = createCounter()
// const counter2 = createCounter()

// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()


// Assynchronous Programming

//Callback function
function helloAlert(name){
	alert(`Hello ${name}`)
}

function processCallbackfunction(callback){
	let name = prompt('Please enter your name')
	callback(name)
}

// processCallbackfunction(helloAlert)


// Promises

function promisesExample(){
	return new Promise((resolve, reject) =>{
		setTimeout(()=>{
			const success = true;
			if (success){
				const data = {message: "Promise Resolved"}
				resolve(data)
			} else{
				reject(new Error("Promise Rejected"))
			}
		}, 3000)// 1s
	})

}

// promisesExample().then((response)=>{
// 	console.log(response.message)
// }).catch((error)=>{
// 	console.log(error)
// })


// Async

async function asyncAwaitFunction(){
	try{
		const response = await promisesExample()
		console.log(response.message)
	}
	catch(error){
		console.log(error)
	}
}

console.log("Async/Await")
asyncAwaitFunction()