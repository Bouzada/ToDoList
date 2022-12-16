let inputNewTask = document.querySelector("#addNewTask");
let btnAddTask = document.querySelector("#btnAddTask");
let listTasks = document.querySelector("#ListTasks");

inputNewTask.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let task = {
      nome: inputNewTask.value,
      Id: gerarId(),
    };

    addTask(task);
  }
});

btnAddTask.addEventListener("click", (e) => {
  let task = {
    nome: inputNewTask.value,
    Id: gerarId(),
  };
  addTask(task);
});

function gerarId() {
  Math.floor(Math.random() * 3000);
}

function addTask(task) {
  let li = createTagLi(task);
  listTasks.appendChild(li);
  inputNewTask.value = "";
}

function createTagLi(task) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.classList.add("taskText");
  span.innerHTML = task.nome;

  let div = document.createElement("div");

  let btnEdit = document.createElement("button");
  btnEdit.classList.add("btnAction");
  btnEdit.innerHTML = '<i class="fa-solid fa-pencil"></i>';

  let btnRemove = document.createElement("button");
  btnRemove.classList.add("btnAction");
  btnRemove.innerHTML = '<i class="fa-solid fa-trash"></i>';

  div.appendChild(btnEdit);
  div.appendChild(btnRemove);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}
