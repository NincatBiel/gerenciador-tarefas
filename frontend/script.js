const apiUrl = 'http://localhost:3000/task';

const form = document.getElementById('task-add');
const list = document.getElementById('task-list');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    try {
        const res = await fetch(apiUrl, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({title, description})
        });

        if (!res.ok) throw new Error('Erro ao adicionar tarefa');

        const task = await res.json();
        form.reset();

        addTaskToUl(task);


    } catch (err) {
        alert('Erro ao salvar tarefa: ' + err.message);
    }

});

//estudar: addEventListener, async(e), e, preventDefault, .value, try/catch, await, fetch, method, headers, body, JSON.stringify, addTaskToUl, err