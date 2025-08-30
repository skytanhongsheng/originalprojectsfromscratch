const taskInput = document.querySelector("#task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.querySelector("#task-list");

// Add a new task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark task as completed on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // creating li and span and delete btn without text
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // appending li and span to unordered list
  taskList.appendChild(li);

  // reseting to do bar to empty
  taskInput.value = "";
});
