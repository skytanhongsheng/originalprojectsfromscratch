const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add a new task
addBtn.addEventListener("click", () => {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark task as completed on click
  span.addEventListener("click", () => {
    li.classList.toggle("complete");
  });

  // Delete button
  deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("delete-btn");
  deletebtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // creating li and span and delete btn without text
  li.appendChild(span);
  li.appendChild(deletebtn);

  // appending li and span to unordered list
  taskList.appendChild(li);

  // reseting to do bar to empty
  taskInput.textContent = "";
});
