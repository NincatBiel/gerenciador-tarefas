const apiUrl = 'http://localhost:3000/task';

const form = document.getElementById('task-add');
const list = document.getElementById('task-list');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    
});