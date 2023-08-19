export default function updateTask(taskIndex, targetElement, tasks) {
  const task = tasks.find((task) => task.index === parseInt(taskIndex, 10));

  if (targetElement.hasAttribute('contenteditable')) {
    task.name = targetElement.textContent;
  } else {
    const span = targetElement.nextElementSibling;
    const parent = targetElement.closest('li');

    task.completed = !task.completed;

    if (task.completed) {
      span.removeAttribute('contenteditable');
      parent.classList.add('completed');
    } else {
      span.setAttribute('contenteditable', true);
      parent.classList.remove('completed');
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

  return tasks;
}
