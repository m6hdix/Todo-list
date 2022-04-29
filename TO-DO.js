// seletor :
const todoInput = document.querySelector(".todo-input")
const todoList = document.querySelector(".todolist")
const addbBtn = document.querySelector(".add-button")
const filterTodos = document.querySelector(".filter-todos")
    //evens ==>
addbBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const todoPirint = document.createElement("div")
    const pirinter = `<li>${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`
    todoPirint.innerHTML = pirinter
    todoPirint.classList.add("todo-item")
    todoList.appendChild(todoPirint)
    iocalStoreagTodos(todoInput.value)
    todoInput.value = "";

})


todoList.addEventListener("click", (e) => {
    const classList = [...e.target.classList]

    if (classList[1] === "fa-check-square") {
        const todoAdd = e.target.parentElement.parentElement
        todoAdd.classList.add("Line-breaker")
    } else if (classList[1] === "fa-trash-alt") {
        const todoRemover = e.target.parentElement.parentElement
        removeLocal(e.target.parentElement.parentElement)
        todoRemover.remove();
    }
})

filterTodos.addEventListener("click", (e) => {
    const target = [...todoList.children]
    target.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "Completed":
                if (todo.classList.contains("Line-breaker")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "Not-completed":
                if (!todo.classList.contains("Line-breaker")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let savedTodos = localStorage.getItem("list todo") ? JSON.parse(localStorage.getItem("list todo")) : [];
    savedTodos.forEach(todo => {
        const todoPirint = document.createElement("div")
        const pirinter = `<li>${todo}</li>
<span><i class="far fa-check-square"></i></span>
<span><i class="far fa-trash-alt"></i></span>`
        todoPirint.innerHTML = pirinter
        todoPirint.classList.add("todo-item")
        todoList.appendChild(todoPirint)
    })
})

function iocalStoreagTodos(element) {
    let savedTodos = localStorage.getItem("list todo") ? JSON.parse(localStorage.getItem("list todo")) : [];
    savedTodos.push(element)
    localStorage.setItem("list todo", JSON.stringify(savedTodos))

}

function removeLocal(remover) {
    let savedTodos = localStorage.getItem("list todo") ? JSON.parse(localStorage.getItem("list todo")) : [];
    const removeer = savedTodos.filter((todo) => todo !== remover.children[0].innerText);
    localStorage.setItem("list todo", JSON.stringify(removeer))
}