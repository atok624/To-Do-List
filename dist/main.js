/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\r\n  {\r\n    description: 'Task 1',\r\n    completed: false,\r\n    index: 1\r\n  },\r\n  {\r\n    description: 'Task 2',\r\n    completed: false,\r\n    index: 2\r\n  },\r\n  {\r\n    description: 'Task 3',\r\n    completed: true,\r\n    index: 3\r\n  }\r\n];\r\n\r\nconst todoList = document.getElementById('todo-list');\r\n\r\nfunction renderTasks() {\r\n  tasks.sort((a, b) => a.index - b.index);\r\n  todoList.innerHTML = '';\r\n  for (let task of tasks) {\r\n    const taskItem = document.createElement('li');\r\n    taskItem.classList.add('task');\r\n    if (task.completed) {\r\n      taskItem.classList.add('completed');\r\n    }\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.checked = task.completed;\r\n    checkbox.addEventListener('change', () => {\r\n      task.completed = checkbox.checked;\r\n      renderTasks();\r\n    });\r\n    const description = document.createElement('span');\r\n    description.textContent = task.description;\r\n    taskItem.appendChild(checkbox);\r\n    taskItem.appendChild(description);\r\n    todoList.appendChild(taskItem);\r\n  }\r\n}\r\n\r\nrenderTasks();\r\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;