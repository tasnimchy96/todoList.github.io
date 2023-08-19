// Array of tasks
const tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
];

// Function to populate the task list
function displayTaskList() {
  const taskList = document.getElementById('task-list');

  // Clear any existing tasks
  taskList.innerHTML = '';

  // Iterate over tasks and create list items
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
          <input type="checkbox" name="" id="" />
          <span>${task.description}</span>
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="1.224"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="F-More">
                  <path
                    d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z"
                    id="Vertical"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        `;
    listItem.classList.add(task.completed ? 'completed' : 'pending', 'task');

    taskList.appendChild(listItem);
  });
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', displayTaskList);
