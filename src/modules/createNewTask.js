export default function createNewTask(task) {
  const li = document.createElement('li');

  li.setAttribute('id', task.index);
  li.classList.add('task');

  if (task.completed) {
    li.classList.add('completed');
  }

  li.innerHTML = `
    <input type="checkbox" name="tasks" id="${task.index}" ${
  task.completed ? 'checked' : ''
}/>
    <span ${!task.completed ? 'contenteditable' : ''}>${task.name}</span>
    <button class="remove">&#10005;</button>`;

  return li;
}
