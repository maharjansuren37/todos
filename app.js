const form = document.getElementById('form');
const input = document.getElementById('input');
const addBtn = document.querySelector('.add');
const output = document.getElementById('output');
addBtn.addEventListener('click', addNote);

function addNote(e) {
    let note = input.value;

    const li = document.createElement('li');
    const text = document.createTextNode(note);
    output.appendChild(text);

    input.value = "";

    e.preventDefault();
}