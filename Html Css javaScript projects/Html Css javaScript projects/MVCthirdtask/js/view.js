class View {
  constructor() {
    this.input = document.getElementById("new-task");
    this.addTaskButton = document.getElementById("add-task");
    this.taskList = document.getElementById("task-list");
  }

  clearInput() {
    this.input.value = "";
  }

  renderTasks(tasks) {
    this.taskList.innerHTML = ""; // Clear the task list
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task-item";

      // Task content
      const taskText = document.createElement("span");
      taskText.textContent = task;
      taskText.className = "task-text";

      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.dataset.index = index;

      // Append elements
      li.appendChild(taskText);
      li.appendChild(deleteButton);
      this.taskList.appendChild(li);
    });
  }

  bindAddTask(handler) {
    this.addTaskButton.addEventListener("click", () => {
      const task = this.input.value.trim();
      if (task) {
        handler(task);
        this.clearInput();
      }
    });
  }

  bindDeleteTask(handler) {
    this.taskList.addEventListener("click", (event) => {
      if (event.target.className === "delete-btn") {
        const index = event.target.dataset.index;
        handler(index);
      }
    });
  }
}

export default View;
