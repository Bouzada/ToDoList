var inputNewTask = document.getElementById("#addNewTask");
var btnAddTask = document.getElementById("#btnAddTask");
var listTasks = document.getElementById("#ListTasks");

inputNewTask.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let task = {
      nome: inputNewTask,
      Id: "",
    };
  }
});
