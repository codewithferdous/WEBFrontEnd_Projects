import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Render saved tasks on page load
    this.updateView();

    // Bind View events to Controller handlers
    this.view.bindAddTask(this.handleAddTask.bind(this));
    this.view.bindDeleteTask(this.handleDeleteTask.bind(this));
  }

  handleAddTask(task) {
    this.model.addTask(task);
    this.updateView();
  }

  handleDeleteTask(index) {
    this.model.deleteTask(index);
    this.updateView();
  }

  updateView() {
    const tasks = this.model.getTasks();
    this.view.renderTasks(tasks);
  }
}

export default Controller;
