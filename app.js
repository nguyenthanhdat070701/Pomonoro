// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

//Funtions
function addTodo(event) {
    //Stop refesh html
    event.preventDefault();

    // add div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //add new Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //add button
    const completButton = document.createElement("button");
    completButton.innerHTML = '<i class="fas fa-check"><i>';
    completButton.classList.add("complete-btn");
    todoDiv.appendChild(completButton);

    // trash button
    const deletButton = document.createElement("button");
    deletButton.innerHTML = '<i class="fas fa-trash "><i>';
    deletButton.classList.add("delete-btn");
    todoDiv.appendChild(deletButton);
    todoList.appendChild(todoDiv);
    // clear value in input
    todoInput.value = "";

}
function deleteTodo(e) {
    const item = e.target;
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function () {
        todo.remove();
    })

}

