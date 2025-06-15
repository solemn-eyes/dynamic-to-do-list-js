document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input'); 
    const taskList = document.getElementById('task-list');
    
    // Function to add a new task
    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

    // Task creation and removal
        else {
            const taskText = document.createElement('li');
            const Remove = document.createElement('button');
            classList.add('remove-btn');
            Remove.textContent = 'Remove';
            Remove.onclick = function() {
                taskList.removeChild(taskText);
            };
            taskText.textContent = taskInput.value;
            taskText.appendChild(Remove);
            taskList.appendChild(taskText);
            taskInput.value = '';
        }

        taskList.appendChild(taskText);
        taskInput.value = '';


         // Attaching event listeners
        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
    });
    }

   

    // Invoking the addTask function on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        addTask();
    }
    );


});