function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const li = document.createElement('li');
        li.textContent = taskText;

        const taskList = document.getElementById('taskList');
        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

window.onload = function() {
    loadTasksFromLocalStorage();
};
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Append the new task to the list
        const taskList = document.getElementById('taskList');
        taskList.appendChild(li);

        // Save the task in localStorage
        saveTaskToLocalStorage(taskText);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Save task to localStorage
function saveTaskToLocalStorage(task) {
    // Get the existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array
    tasks.push(task);

    // Save the updated tasks array back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Log to console to confirm saving
    console.log("Saved tasks to localStorage:", tasks);
}

// Load tasks from localStorage and display them
function loadTasksFromLocalStorage() {
    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Log to console to confirm loading
    console.log("Loaded tasks from localStorage:", tasks);

    // Iterate through the tasks and display them
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Optional: Allow pressing Enter to add a task
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});