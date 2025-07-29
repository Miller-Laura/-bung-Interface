var addBtn = document.getElementById("addBtn");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
if (addBtn) {
    addBtn.addEventListener("click", function () {
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            var li = document.createElement("li");
            li.textContent = taskText;
            taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(li);
            taskInput.value = ""; // Eingabefeld leeren
        }
    });
}
var deleteBtn = document.getElementById("deleteBtn");
if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
        if (taskList) {
            taskList.innerHTML = ""; // Liste leeren
        }
    });
}
