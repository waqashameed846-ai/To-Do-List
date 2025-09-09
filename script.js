 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = taskInput.value;

      li.appendChild(span);

      // Action buttons
      const actions = document.createElement("div");
      actions.classList.add("actions");

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✓";
      completeBtn.onclick = () => {
        li.classList.toggle("completed");
      };

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit");
      editBtn.onclick = () => {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask) {
          span.textContent = newTask;
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.classList.add("delete");
      deleteBtn.onclick = () => {
        li.remove();
      };

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(actions);
      taskList.appendChild(li);

      taskInput.value = "";
    }

    // Enter key to add task
    taskInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });