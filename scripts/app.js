// UI Elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const addBtn = document.querySelector('.add');
const output = document.getElementById('output');
const content = document.querySelector('.content');
const heading = document.querySelector('.heading');

// DOM Content load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Loaded");
});

// load  Event Listeners
function loadEventListeners() {
    addBtn.addEventListener('click', addTask);
    output.addEventListener('click', deleteTask);
    output.addEventListener('click', updateTask);
}

function addTask(e) {
    let task = input.value;

    if (task !== '') {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        li.className = 'task';
        const edit = document.createElement('a');
        edit.innerHTML = '<div><span>Update</span><span>Delete</span></div>';
        edit.className = 'edit';
        li.appendChild(edit);
        output.appendChild(li);

        displayMessage("Task added!", "normal");

        input.value = "";
    } else {
        displayMessage("Please add a task!", 'alert');
    }

    e.preventDefault();
}

function displayMessage(message, classname) {
    const msg = document.createElement('div');
    msg.appendChild(document.createTextNode(message));
    msg.className = `message ${classname}`;
    content.insertBefore(msg, heading);

    setTimeout(() => {
        msg.remove('div');
    }, 3000);
}

function deleteTask(e) {
    if (e.target.innerText === 'Delete') {
        confirm('Are you sure?')
        e.target.parentElement.parentElement.remove();
    }
}

function updateTask(e) {
    if (e.target.innerText === 'Update') {
        const task = e.target.parentElement.parentElement.parentElement.firstChild.textContent;
        input.value = task;
        addBtn.innerText = "Save";
        const updatedTask = input.value;
        console.log(updateTask);
    }
}

loadEventListeners();