const form = document.getElementById('form');
const input = document.getElementById('input');
const addBtn = document.querySelector('.add');
const output = document.getElementById('output');
const content = document.querySelector('.content');

// Event Listeners
addBtn.addEventListener('click', addTask);

function addTask(e) {
    let task = input.value;

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    li.className = 'task';
    const edit = document.createElement('a');
    edit.innerHTML = 'Edit';
    edit.className = 'edit';
    li.appendChild(edit);
    output.appendChild(li);

    displayMessage("Task added!", "normal");

    input.value = "";

    e.preventDefault();
}

function displayMessage(message, classname) {
    const msg = document.createElement('div');
    msg.appendChild(document.createTextNode(message));
    msg.className = `${classname}`;
    content.insertBefore(msg, form);

    setTimeout(() => {
        msg.remove('div');
    }, 3000);
}
