export default function removeTask(taskIndex, tasks) {
  // Adjust the task index to be zero-based for array manipulation
  const adjustedIndex = parseInt(taskIndex, 10) - 1;

  if (adjustedIndex < 0 || adjustedIndex >= tasks.length) {
    // Handle invalid index
    return tasks;
  }

  tasks.splice(adjustedIndex, 1);

  // Update the indexes of the remaining tasks
  tasks.forEach((task, index) => {
    task.index = index + 1; // Incrementing index to start from 1
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Remove the task element from the DOM using a class
  const taskElement = document.querySelector(`.task-${taskIndex}`);
  if (taskElement) {
    taskElement.remove();
  }

  document.getElementById(taskIndex).remove();

  return tasks;
}
