const listTasks = document.getElementById('listTasks')
const ids = []

const min = 0;
const max = 200

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById('btnAddTask').addEventListener('click', function() {
  const input = document.getElementById('addNewTask').value
  const numberID = getRandomInt(min, max)

  const task = document.createElement('li')
  task.classList = "task"
  task.id = "task-" + numberID

  task.innerHTML = `
    <span class="taskText">${input}</span>
    <div class="">
      <button class="btn btnAction btnRemove" id="btnRemove" value="task-${numberID}"> 
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btnAction btnDo" id="btnDo" value="task-${numberID}">
        <i class="fa-solid fa-check"></i>
      </button>
    </div>
  `

  listTasks.appendChild(task)

  document.getElementById('addNewTask').value = ''

  ids.unshift(task.id)
  console.log(ids)
})
