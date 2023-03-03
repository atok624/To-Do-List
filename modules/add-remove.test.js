// eslint-disable-next-line no-unused-vars
document.body.innerHTML = `
    <main class="todoli align-center">
      <div class="head">
        <h1>To-do List</h1>
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>

      <form id="newTaskForm">
        <label for="newTask">
          <input
            type="text"
            class="input-content"
            placeholder="Add your list..."
            name="newTask"
            id="newTask"
          />
        </label>
        <button type="submit" class="add-button"><i class="fa-solid fa-arrow-left"></i></button>
      </form>
      <ul id="taskList"></ul>
      <button id="clearCompleted">Clear all completed</button>
    </main>`;

const { addTask } = require("../src/index.js");

describe("Add and delete functiona", () => {
  test("should be able to add to the local storage", () => {
    addTask("This is a test task");
    const todos = JSON.parse(localStorage.getItem("tasks"))
    expect(todos.length).toBe(1);
  });

  test("should be able to add to the to the html", () => {
    addTask("This is a second task");
    addTask("This is a third task");
    const lists = document.getElementById("taskList").querySelectorAll("li");
    expect(lists.length).toBe(3);
  });
});
