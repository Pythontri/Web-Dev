document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-button");
    const taskInput = document.getElementById("add-task");
    const taskList = document.querySelector(".block-tasks");
  
    addButton.addEventListener("click", addTheTask);
  
    function addTheTask() {
      const taskName = taskInput.value.trim();
      if (!taskName) {
        alert("Please enter a task");
        return;
      }
  
      const newTask = document.createElement("div");
      newTask.classList.add("task-item");
  
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
  
      const label = document.createElement("label");
      label.textContent = taskName;
      label.style.marginLeft = "10px";
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.innerHTML = '<img src="trash.png" alt="Delete">';
      deleteButton.addEventListener("click", () => taskList.removeChild(newTask));
  
      newTask.append(checkBox, label, deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  });
  