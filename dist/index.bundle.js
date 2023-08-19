/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksetting_webpack"] = self["webpackChunksetting_webpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Array of tasks\r\nconst tasks = [\r\n  {\r\n    description: 'Task 1',\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'Task 2',\r\n    completed: true,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: 'Task 3',\r\n    completed: false,\r\n    index: 3,\r\n  },\r\n];\r\n\r\n// Function to populate the task list\r\nfunction displayTaskList() {\r\n  const taskList = document.getElementById('task-list');\r\n\r\n  // Clear any existing tasks\r\n  taskList.innerHTML = '';\r\n\r\n  // Iterate over tasks and create list items\r\n  tasks.forEach((task) => {\r\n    const listItem = document.createElement('li');\r\n    listItem.innerHTML = `\r\n          <input type=\"checkbox\" name=\"\" id=\"\" />\r\n          <span>${task.description}</span>\r\n          <svg\r\n            width=\"20px\"\r\n            height=\"20px\"\r\n            viewBox=\"0 0 24 24\"\r\n            fill=\"#000000\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n            stroke=\"#000000\"\r\n            stroke-width=\"1.224\"\r\n          >\r\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\r\n            <g\r\n              id=\"SVGRepo_tracerCarrier\"\r\n              stroke-linecap=\"round\"\r\n              stroke-linejoin=\"round\"\r\n            ></g>\r\n            <g id=\"SVGRepo_iconCarrier\">\r\n              <title></title>\r\n              <g id=\"Complete\">\r\n                <g id=\"F-More\">\r\n                  <path\r\n                    d=\"M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z\"\r\n                    id=\"Vertical\"\r\n                  ></path>\r\n                </g>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n        `;\r\n    listItem.classList.add(task.completed ? 'completed' : 'pending', 'task');\r\n\r\n    taskList.appendChild(listItem);\r\n  });\r\n}\r\n\r\n// Event listener for page load\r\ndocument.addEventListener('DOMContentLoaded', displayTaskList);\r\n\n\n//# sourceURL=webpack://setting-webpack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);