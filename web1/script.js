




function addTask() {
    // Get form values
    var task = document.getElementById("task").value;
    var time = document.getElementById("time").value;
    var priority = document.getElementById("priority").value;

    // Create a task object
    var newTask = {
        task: task,
        time: time,
        priority: priority
    };

    // Retrieve existing tasks or initialize an empty array
    var existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array
    existingTasks.push(newTask);

    // Save the updated tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    // You can add further logic here, such as updating the UI or storing the task in a database.
}
