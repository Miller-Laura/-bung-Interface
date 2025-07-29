const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const taskText = (taskInput as HTMLInputElement).value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList?.appendChild(li);
      (taskInput as HTMLInputElement).value = ""; // Eingabefeld leeren
    }
  });
}
const deleteBtn = document.getElementById("deleteBtn");

if (deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    if (taskList) {
      taskList.innerHTML = ""; // Liste leeren
    }
  });
}
