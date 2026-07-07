let todos = [];
todos.push(
    { id: 1, name: "Buy groceries", urgency: 3 },
    { id: 2, name: "Call dad", urgency: 2 },
    { id: 3, name: "Finish project report", urgency: 5 },
);
console.log(todos)

function addTodo(todos, name, urgency) {
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency
    };
    todos.push(newTodo);
}