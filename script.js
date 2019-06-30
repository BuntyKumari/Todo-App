window.onload = function() {
    //Define UI var
    const form = document.querySelector('#task-form');

    //Add task event
    form.addEventListener('submit', function(e) {

        const taskInput = document.querySelector('#task');

        if (taskInput.value === '') {
            alert('Add a task');
        } else {

            // Create li element

            const li = document.createElement('li');
            // Add class

            li.className = 'collection-item';
            // Create text node and append to li

            li.appendChild(document.createTextNode(taskInput.value));

            //Create Link

            const link = document.createElement('a');
            //Add class

            link.className = 'delete-item secondary-content';

            //Add icon html
            link.innerHTML = '<i class="fa fa-remove"> </i>';

            //Append the link to li
            li.appendChild(link);

            //Append the li to ul
            const taskList = document.querySelector('.collection');
            taskList.appendChild(li);

            //Clear Input
            taskInput.value = '';
        }
        e.preventDefault();
    })


    const taskList = document.querySelector('.collection');
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {
        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are you sure?')) {
                e.target.parentElement.parentElement.remove();
            }
        }
    }

    const filter = document.querySelector('#filter');
    filter.addEventListener('keyup', filterTask);

    function filterTask(e) {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll('.collection-item').forEach(function(task) {
            const item = task.firstChild.textContent;

            if (item.toLowerCase().indexOf(text) != -1) {
                task.getElementsByClassName.display = 'block';
            } else {
                task.style.display = 'none';
            }
        })
    }

    // Clear Task
    const clearBtn = document.querySelector('.clear-tasks');
    clearBtn.addEventListener('click', clearTasks);

    function clearTasks() {
        const taskList = document.querySelector('.collection');
        taskList.innerHTML = '';
    }
}