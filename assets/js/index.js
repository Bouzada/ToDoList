const listTasks = document.getElementById('listTasks')

function newTask() {
  const input = document.getElementById('addNewTask').value

  const task = document.createElement('li')
  task.classList = "task"
  task.innerHTML = `
    <span class="taskText">${input}</span>
    <div class="">
      <button class="btn btnAction btnEdit" id="btnEdit">
        <i class="fa-solid fa-pencil"></i>
      </button>
      <button class="btn btnAction btnRemove" id="btnRemove"> 
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="btn btnAction btnDo" id="btnDo">
        <i class="fa-solid fa-check"></i>
      </button>
    </div>
  `

  listTasks.appendChild(task)
}


