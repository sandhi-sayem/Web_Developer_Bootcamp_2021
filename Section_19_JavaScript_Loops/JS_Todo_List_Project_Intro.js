// console.log("test");

// My Version

/*
let toDo = prompt("What would you like to do?").toLowerCase();
let newTodo;
const toDoList = ['1sam', '2tam', '3bam', '4mam', '5cam'];

while (toDo !== "quit") {
    if (toDo === "new") {
        newTodo = prompt("Enter new todo");
        if (newTodo === "quit") break;
        toDoList.push(newTodo);
        console.log(`${newTodo} added to list`)
    }
    if (toDo === "list") {
        console.log("**********");
        for (let [index, value] of toDoList.entries()) {
            console.log(`${index + 1}: ${value}`);
        }
        console.log("**********");
    }
    if (toDo === "delete") {
        newTodo = prompt("Enter index of todo to delete").toLowerCase();
        while ((!parseInt(newTodo)) && newTodo !== "quit") {
            newTodo = prompt("Enter index of todo to delete");
        }
        if (newTodo === "quit") break;
        toDoList.splice(parseInt(newTodo) - 1, 1);
        console.log("Todo Removed");
    }
    toDo = prompt("What would you like to do?").toLowerCase();
}
console.log("OK, you quit the app!");
*/

// Colt version

const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

let input = prompt("What would you like to do?");
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unkown index');
        }
    }
    input = prompt("What would you like to do?");
}
console.log("OK QUIT THE APP!");
