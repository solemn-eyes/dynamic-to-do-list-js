document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input'); 
    const taskList = document.getElementById('task-list');
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    

    // Function to add a new task
    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        } else {
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

        // Updating the Task addition functionality
        if (tasks.includes(taskText)) {
            alert('This task already exists.');
            return;
        }
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        
        // Task creation and removal
        taskList.appendChild(taskText);
        taskInput.value = '';

        // Updating the task removal functionality
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const taskItem = this.parentElement;
                taskList.removeChild(taskItem);
                tasks = tasks.filter(task => task !== taskItem.textContent.replace('Remove', '').trim());
                localStorage.setItem('tasks', JSON.stringify(tasks));
            });
        });


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
    // Load existing tasks from localStorage
    function loadTasks() {
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
                tasks = tasks.filter(t => t !== task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            };
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
        });
    }

    // Saving tasks to localStorage
    loadTasks();
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
    });
    


});