const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
    const todoText = todoInput.value;

    if (todoText === "") {
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        label.classList.toggle("strikethrough");
    });

    label.textContent = todoText;

    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
        li.parentNode.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    todoInput.value = "";
});
