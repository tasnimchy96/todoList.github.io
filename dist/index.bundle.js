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

eval("// Array of tasks\nconst tasks = [\n  {\n    description: \"Task 1\",\n    completed: false,\n    index: 1,\n  },\n  {\n    description: \"Task 2\",\n    completed: true,\n    index: 2,\n  },\n  {\n    description: \"Task 3\",\n    completed: false,\n    index: 3,\n  },\n];\n\n// Function to populate the task list\nfunction displayTaskList() {\n  const taskList = document.getElementById(\"task-list\");\n\n  // Clear any existing tasks\n  taskList.innerHTML = \"\";\n\n  // Iterate over tasks and create list items\n  tasks.forEach((task) => {\n    const listItem = document.createElement(\"li\");\n    listItem.innerHTML = `\n          <input type=\"checkbox\" name=\"\" id=\"\" />\n          <span>${task.description}</span>\n          <svg\n            width=\"20px\"\n            height=\"20px\"\n            viewBox=\"0 0 24 24\"\n            fill=\"#000000\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            stroke=\"#000000\"\n            stroke-width=\"1.224\"\n          >\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n            <g\n              id=\"SVGRepo_tracerCarrier\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            ></g>\n            <g id=\"SVGRepo_iconCarrier\">\n              <title></title>\n              <g id=\"Complete\">\n                <g id=\"F-More\">\n                  <path\n                    d=\"M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z\"\n                    id=\"Vertical\"\n                  ></path>\n                </g>\n              </g>\n            </g>\n          </svg>\n        `;\n    listItem.classList.add(task.completed ? \"completed\" : \"pending\", \"task\");\n\n    taskList.appendChild(listItem);\n  });\n}\n\n// Event listener for page load\ndocument.addEventListener(\"DOMContentLoaded\", displayTaskList);\n\n\n//# sourceURL=webpack://setting-webpack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);