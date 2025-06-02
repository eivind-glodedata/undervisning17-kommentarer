console.log("hello")
// lager en variabel som lagrer at den henter et element fra HTML med id-navn addTodo
const addTodo = document.getElementById("addTodo");
console.log(addTodo);
//sett den eventuelt her: const todoInput = document.getElementById("TodoInput");
/** Denne kommentarten fester seg til en funksjon! */
addTodo.addEventListener("click", (event) => {
    console.log("Buttoncklick");
    event.preventDefault();
    const todoInput = document.getElementById("todoInput");
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);

    const todoItem = document.createElement("li");
    console.log(todoItem);
    todoItem.textContent = todoInputValue;

    const deleteTodo = document.createElement("Button");
    deleteTodo.textContent = "Slett";
    deleteTodo.addEventListener("click", function () {
        todoItem.remove();
    });

    const todoDisplay = document.getElementById("todoDisplay");
    console.log(todoDisplay);

    todoItem.appendChild(deleteTodo);
    todoDisplay.appendChild(todoItem);
});

/*
kommentar for flere linjer
*/