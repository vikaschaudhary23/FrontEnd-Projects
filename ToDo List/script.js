const itemInput = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

const saveToDo = () => {
    const toDoItems = document.querySelectorAll("#to-do-box li");
    const list = [];
    toDoItems.forEach((task) => {
        list.push(task.textContent.replace('✖', '').trim());
    });
    localStorage.setItem("toDoItems", JSON.stringify(list))
}

itemInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addToDo(event.target.value);
        event.target.value = "";
        saveToDo();
    }
});

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("done");
        saveToDo();
    });

    listItem.querySelector("i").addEventListener("click", (event) => {
        event.stopPropagation();  // Prevent toggling 'done' class
        listItem.remove();
        saveToDo();
    });

    toDoBox.appendChild(listItem);
}
