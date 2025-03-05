// UI elements
const heading = document.querySelector('.heading');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addButton = document.querySelector('.add');
const output = document.getElementById('output');

// event listeners
taskForm.addEventListener('submit', addTask);

// add task
function addTask(e) {

    if (taskInput.value !== "") {
        const li = document.createElement('li');
        li.className = 'tasks'
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.innerHTML = '<span/>Delete<span/>';
        li.appendChild(link);
        output.appendChild(li);

        taskInput.value = "";
    }
    e.preventDefault();
}