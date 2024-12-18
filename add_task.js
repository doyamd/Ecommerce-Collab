document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const filterButtons = document.querySelectorAll(".filter-btn");

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

    const now = new Date();
    const formattedDateTime = now.toLocaleString("en-CA", {
      dateStyle: "short",
      timeStyle: "short",
    });

    const dateTimeSpan = document.createElement("span");
    dateTimeSpan.className = "task-datetime";
    dateTimeSpan.textContent = ` (Created on: ${formattedDateTime})`;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
      applyFilter(currentFilter); // Reapply filter after toggling
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newTaskText = prompt("Edit task description:", taskContent.textContent);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        taskContent.textContent = newTaskText.trim();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
      applyFilter(currentFilter); // Reapply filter after deletion
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(dateTimeSpan);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
  }

  let currentFilter = "all"; // Default filter

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.getAttribute("data-filter");
      applyFilter(currentFilter);
    });
  });

  function applyFilter(filter) {
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
      if (filter === "all") {
        task.style.display = "flex";
      } else if (filter === "completed") {
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
      } else if (filter === "incomplete") {
        task.style.display = !task.classList.contains("completed") ? "flex" : "none";
      }
    });
  }
});
