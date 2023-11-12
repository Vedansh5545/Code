// script2.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve tasks from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Sort tasks by priority (high to low)
    tasks.sort(function (a, b) {
        var priorityOrder = { 'high': 2, 'medium': 1, 'low': 0 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    // Display tasks on the page
    var taskListElement = document.getElementById('taskList');

    tasks.forEach(function (task, index) {
        var listItem = document.createElement('li');
        listItem.textContent = `Task: ${task.task}, Time: ${task.time}, Priority: ${task.priority}, Status: ${task.status || 'Pending'}`;
        
        // Add priority-based color class to the task
        listItem.classList.add(getPriorityClass(task.priority));

        // Add "Task Done" button
        var doneButton = document.createElement('button');
        doneButton.textContent = 'Task Done';
        doneButton.classList.add('done-button');
        doneButton.onclick = function () {
            markTaskDone(index);
        };

        // Add "Reschedule" button
        var rescheduleButton = document.createElement('button');
        rescheduleButton.textContent = 'Reschedule';
        rescheduleButton.classList.add('reschedule-button');
        rescheduleButton.onclick = function () {
            openRescheduleModal(index);
        };

        // Add "Delete" button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Task';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function () {
            deleteTask(index);
        };

        listItem.appendChild(doneButton);
        listItem.appendChild(rescheduleButton);
        listItem.appendChild(deleteButton);

        taskListElement.appendChild(listItem);
    });
});

function getPriorityClass(priority) {
    // Return the corresponding priority-based color class
    switch (priority) {
        case 'high':
            return 'high-priority';
        case 'medium':
            return 'medium-priority';
        case 'low':
            return 'low-priority';
        default:
            return '';
    }
}

function goBack() {
    // Redirect to the index.html page
    window.location.href = 'index.html';
}

function addNewTask() {
    // Redirect to the index.html page
    window.location.href = 'index.html';
}

function markTaskDone(index) {
    // Retrieve tasks from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Update the status of the selected task to "Done"
    tasks[index].status = 'Done';

    // Save the updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update the style of the corresponding list item
    updateListItemStyle(index);



    // Retrieve tasks from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Update the status of the selected task to "Done"
    tasks[index].status = 'Done';

    // Save the updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update the style of the corresponding list item
    updateListItemStyle(index);
    // Reload the page after marking the task as done
    location.reload();

}




function openRescheduleModal(index) {
    var modal = document.getElementById('rescheduleModal');
    var span = document.getElementsByClassName('close')[0];
    
    // Set the index of the task to be rescheduled in the modal's data attribute
    modal.setAttribute('data-task-index', index);

    modal.style.display = 'block';

    span.onclick = function() {
        closeModal();
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
}

function closeModal() {
    var modal = document.getElementById('rescheduleModal');
    modal.style.display = 'none';
    document.getElementById('newTime').value = ''; // Clear the input when closing
}

function rescheduleTask() {
    var index = document.getElementById('rescheduleModal').getAttribute('data-task-index');
    var newTime = document.getElementById('newTime').value;

    if (newTime) {
        // Retrieve tasks from localStorage
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Update the time of the selected task
        tasks[index].time = newTime;

        // Save the updated tasks array to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Close the modal after rescheduling
        closeModal();

        // Refresh the page to reflect the changes
        location.reload();

}}

function deleteTask(index) {
    // Retrieve tasks from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remove the selected task
    tasks.splice(index, 1);

    // Save the updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Refresh the page to reflect the changes
    location.reload();
}

function updateListItemStyle(index) {
    // Update the style of the corresponding list item when task is marked as done
    var taskListElement = document.getElementById('taskList');
    var listItem = taskListElement.children[index];
    
    // Add the completed-task class
    listItem.classList.add('completed-task');
}