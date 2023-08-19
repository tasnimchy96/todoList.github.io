import './style.css';
import createNewTask from './modules/createNewTask.js';
import removeTask from './modules/removeTask.js';
import updateTask from './modules/updateTask.js';
import clearCompletedTasks from './modules/clearCompletedTask.js';

const todoForm = document.querySelector('#add-task');
const todoList = document.querySelector('#task-list');
const taskInput = document.querySelector('#add-task input');
const clearCompletedButton = document.querySelector('#clear-completed');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

todoList.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    event.target.blur();
  }
});

if (localStorage.getItem('tasks')) {
  tasks.forEach((task) => {
    const newTaskElement = createNewTask(task);
    todoList.appendChild(newTaskElement);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const inputValue = taskInput.value;

  if (inputValue === '') {
    return;
  }

  const task = {
    index: tasks.length + 1,
    name: inputValue,
    completed: false,
  };

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const newTaskElement = createNewTask(task);
  todoList.appendChild(newTaskElement);

  todoForm.reset();
  taskInput.focus();
}

todoForm.addEventListener('submit', handleSubmit);

function handleTaskClick(event) {
  if (event.target.classList.contains('remove')) {
    const taskIndex = event.target.closest('li').id;
    tasks = removeTask(taskIndex, tasks);
  }
}

todoList.addEventListener('click', handleTaskClick);

function handleTaskInput(event) {
  const taskIndex = event.target.closest('li').id;
  tasks = updateTask(taskIndex, event.target, tasks);
}

todoList.addEventListener('input', handleTaskInput);

function handleClearCompleted() {
  tasks = clearCompletedTasks(tasks, todoList, createNewTask);
}

clearCompletedButton.addEventListener('click', handleClearCompleted);
