console.log("Sending request to server!");
setTimeout(() => {
    console.log("Here is your data from the server..."); // JS sends the work to browser to and after 3 seconds browser will put result into the stack for JS to pick up
}, 3000);
console.log("I am at the end of the file!"); // This will run before the 'data from server' 