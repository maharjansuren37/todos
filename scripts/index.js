// UI elements
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const heading = document.querySelector('.heading');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addButton = document.querySelector('.add');
const output = document.getElementById('output');

// event listeners
taskForm.addEventListener('submit', addTask);

// add task
function addTask(e) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fullDate = `${day}-${month}-${year}`;
    if (taskInput.value !== "") {
        const li = document.createElement('li');
        li.className = 'tasks'
        li.appendChild(document.createTextNode(taskInput.value));
        li.appendChild(document.createTextNode(fullDate));
        const link = document.createElement('a');
        link.className = 'delete'
        link.innerHTML = '<span/>Delete<span/>';
        li.appendChild(link);
        output.appendChild(li);

        displayMessage('Task added!', 'notification');

        taskInput.value = "";
    }
    e.preventDefault();
}

function updateTask(e) {
    e.preventDefault();
}

function deleteTask(e) {
    e.preventDefault();
}

function sortTask(e) {

}

function displayMessage(text, classname) {
    const message = document.createElement('div');
    message.className = `message ${classname}`;
    message.appendChild(document.createTextNode(text));
    container.insertBefore(message, header);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

