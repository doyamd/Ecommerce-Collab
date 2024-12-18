// script.js
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

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

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
      taskList.removeChild(taskItem); // Remove task from the list
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn); // Add edit button to task item
    taskItem.appendChild(deleteBtn); // Add delete button to task item
    taskList.appendChild(taskItem);
  }
});
