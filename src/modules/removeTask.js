export default function removeTask(taskIndex, tasks) {
  tasks = tasks.filter((task) => task.index !== parseInt(taskIndex, 10));
  localStorage.setItem('tasks', JSON.stringify(tasks));
  document.getElementById(taskIndex).remove();

  return tasks;
}
