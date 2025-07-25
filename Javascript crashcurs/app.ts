const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = ""; // Eingabefeld leeren
  }
});
const deleteBtn = document.getElementById("deleteBtn") as HTMLButtonElement;

deleteBtn.addEventListener("click", () => {
  taskList.innerHTML = ""; // Liste leeren
});
