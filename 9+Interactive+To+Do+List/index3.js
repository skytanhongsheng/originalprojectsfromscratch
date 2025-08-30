const textInput = document.getElementById("text-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add button
addBtn.addEventListener("click", () => {
  let taskText = textInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Create li and span without text
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Append text to li
  taskList.appendChild(li);
});
