import Model from "./model.js";
import View from "./view.js";
import Controller from "./controller.js";

document.addEventListener("DOMContentLoaded", () => {
  new Controller(new Model(), new View());
});
