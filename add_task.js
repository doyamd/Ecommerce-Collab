document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to add a task
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Task cannot be empty!");
      return;
    }
    createTask(taskText);
    taskInput.value = ""; // Clear input field
  });

  // Function to create a new task
  function createTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create task description
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Get the current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-CA", {
      dateStyle: "short",
      timeStyle: "short",
    });

    // Create the date and time element
    const dateTimeSpan = document.createElement("span");
    dateTimeSpan.className = "task-datetime";
    dateTimeSpan.textContent = ` (Created on: ${formattedDateTime})`;

    // Create Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    // Create Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newTaskText = prompt("Edit task description:", taskContent.textContent);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        taskContent.textContent = newTaskText.trim();
      }
    });

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    // Append elements to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(dateTimeSpan); // Add date and time span
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    // Add the task item to the task list
    taskList.appendChild(taskItem);
  }
});
