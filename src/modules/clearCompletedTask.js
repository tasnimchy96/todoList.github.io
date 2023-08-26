import createNewTask from './createNewTask.js';

export default function clearCompletedTasks(tasks, todoList) {
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const newTaskElement = createNewTask(task);
    todoList.appendChild(newTaskElement);
  });

  return tasks;
}