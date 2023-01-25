const listTasks = document.getElementById('listTasks')

const min = 0;
const max = 51

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById('btnAddTask').addEventListener('click', function() {
  const input = document.getElementById('addNewTask').value

  const task = document.createElement('li')
  task.classList = "task"
  task.id = getRandomInt(min, max)
  task.innerHTML = `
    <span class="taskText">${input}</span>
    <div class="">
      <button class="btn btnAction btnRemove" id="btnRemove"> 
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btnAction btnDo" id="btnDo">
        <i class="fa-solid fa-check"></i>
      </button>
    </div>
  `

  listTasks.appendChild(task)

  document.getElementById('addNewTask').value = ''
})

