const form = document.querySelector("form");
const input = document.querySelector("input");
const todosUl = document.querySelector(".todos");

function addTodo (todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl =document.createElement("li")
        if (todo && todo.completed) {
            todoEl.classList.add("completed")
        }

        todoEl.innerText = todoText
        
        todoEl.addEventListener("click" , () => todoEl.classList.toggle("completed"))

        todoEl.addEventListener("contextmenu" , (e) => {
            e.preventDefault()
            todoEl.remove()
        })

        todosUl.appendChild(todoEl)

        input.value = ""
    }
}

form.addEventListener ("submit" , (e) => {
    e.preventDefault()

    addTodo();
})