import './style.css';

const toDos = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
];

const list = document.querySelector('.todo-list');

function displayTodos(toDos) {
  window.addEventListener('DOMContentLoaded', () => {
    const listString = toDos
      .map(
        (task) => `<li class="task">
  <div class="item">
    <input type="checkbox">
    <p>${task.description}</p>
  </div>
  <i class="fa-solid fa-ellipsis-vertical"></i> </li>`,
      )
      .join('');
    list.innerHTML = listString;
  });
}

window.onload = displayTodos(toDos);
