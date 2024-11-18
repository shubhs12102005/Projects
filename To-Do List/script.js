// Get references to DOM elements
const inputBox = document.getElementById('inputBox'); // Input field for adding todos
const addBtn = document.getElementById('addBtn'); // Button to add/edit todos
const todoList = document.getElementById('todoList'); // <ul> element to display the list of todos

let editTodo = null; // Tracks the todo being edited

// Function to add or edit a To-Do item
const addToDo = () => {
    const inputText = inputBox.value.trim(); // Get the text input and trim whitespace
    if (inputText.length <= 0) { // Check if input is empty
        alert("You must write something in your To Do.");
        return false;
    }

    // Check if the current action is "Edit"
    if (addBtn.value === "Edit") {
        // Update the local storage for the edited todo
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);

        // Update the content in the list and reset the form
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";

    } else {
        // Create a new list item
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.innerHTML = inputText; // Set the text for the todo
        li.appendChild(p);
        todoList.appendChild(li); // Add the list item to the <ul>
        inputBox.value = ""; // Clear the input field

        // Create an Edit button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        li.appendChild(editBtn);
        editBtn.classList.add("btn", "editBtn");

        // Create a Remove button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        li.appendChild(deleteBtn);
        deleteBtn.classList.add("btn", "deleteBtn");

        // Save the new todo to local storage
        saveLocalTodos(inputText);
    }
};

// Function to handle actions (Edit or Remove) on the list items
const updateToDo = (e) => {
    if (e.target.innerHTML === "Remove") {
        // Remove the item from the list and local storage
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }

    if (e.target.innerHTML === "Edit") {
        // Set the input field value to the selected todo for editing
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus(); // Focus on the input field
        addBtn.value = "Edit"; // Change the button label to "Edit"
        editTodo = e; // Track the todo being edited
    }
};

// Save a todo to local storage
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []; // Initialize as an empty array if no todos exist
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // Parse the existing todos
    }
    todos.push(todo); // Add the new todo
    localStorage.setItem("todos", JSON.stringify(todos)); // Save back to local storage
};

// Load todos from local storage on page load
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []; // If no todos exist, initialize as an empty array
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // Parse the stored todos

        // Recreate each todo item in the DOM
        todos.forEach(todo => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);
            todoList.appendChild(li);

            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            li.appendChild(editBtn);
            editBtn.classList.add("btn", "editBtn");

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            li.appendChild(deleteBtn);
            deleteBtn.classList.add("btn", "deleteBtn");
        });
    }
};

// Delete a todo from local storage
const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []; // If no todos exist, initialize as an empty array
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // Parse the stored todos
    }

    let todoText = todo.children[0].innerHTML; // Get the text of the todo
    let todoIndex = todos.indexOf(todoText); // Find the index of the todo in the array
    todos.splice(todoIndex, 1); // Remove it from the array
    localStorage.setItem("todos", JSON.stringify(todos)); // Save the updated array back to local storage
};

// Edit a todo in local storage
const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos")); // Parse the stored todos
    let todoIndex = todos.indexOf(todo); // Find the index of the todo
    todos[todoIndex] = inputBox.value; // Update the todo text
    localStorage.setItem("todos", JSON.stringify(todos)); // Save back to local storage
};

// Event listeners
document.addEventListener('DOMContentLoaded', getLocalTodos); // Load todos on page load
addBtn.addEventListener('click', addToDo); // Add a todo on button click
todoList.addEventListener('click', updateToDo); // Handle edit/remove actions on todos
