console.log('Hello, world!')

const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
    })

rl.question('What is your name? ', (name) => {
    const hello = name ? `Hello, ${name}!` : 'Hello, friend!'
    console.log(hello)
    rl.close()
})