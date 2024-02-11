// todo.js
function addTask() {
    var input = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (input.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.classList.add("task-item"); // Add the task-item class
  
    var taskText = document.createElement("span");
    taskText.textContent = input.value;
    li.appendChild(taskText);
  
    var buttonDiv = document.createElement("div");
  
    var doneButton = document.createElement("button");
    doneButton.classList.add("toggle-button");
    doneButton.textContent = "Done";
    doneButton.onclick = function() {
      li.classList.toggle("completed");
      doneButton.textContent = li.classList.contains("completed") ? "Revert" : "Done";
      doneButton.style.backgroundColor = li.classList.contains("completed") ? "yellow" : "green";
      doneButton.style.color = li.classList.contains("completed") ? "black" : "#fff";
    };
  
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
  
    buttonDiv.appendChild(doneButton);
    buttonDiv.appendChild(deleteButton);
  
    li.appendChild(buttonDiv);
    taskList.appendChild(li);
  
    input.value = "";
  }
  