function uid() {
  return Date.now().toString(16) + Math.random().toString(16).substring(2);
}

let taskData = [
  {
    id: uid(),
    name: 'Ver se eu tô na esquina.',
    toDo: true,
  },
  {
    id: uid(),
    name: 'Dar banho nos gatos',
    toDo: true,
  }
]

const addTaskInput = document.getElementById("task_input");
const addTaskButton = document.getElementsByTagName("button")[0];
const taskList = document.getElementById("tasks_list");

// create new task element
function createNewTaskEl(taskName, taskId) {
  // create task li
  let task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("todo");
  task.setAttribute("id", taskId);

  // create .left_content div
  let leftContent = document.createElement("div");
  leftContent.classList.add("left_content");

  // todo icon
  let todoIcon = document.createElement("i");
  todoIcon.classList.add("ph-duotone");
  todoIcon.classList.add("ph-circle-dashed");
  todoIcon.classList.add("check_btn");
  todoIcon.addEventListener("click", completeTask);

  // done icon
  let doneIcon = document.createElement("i");
  doneIcon.classList.add("ph-duotone");
  doneIcon.classList.add("ph-check-circle");
  doneIcon.classList.add("check_btn");
  doneIcon.classList.add("hidden");
  doneIcon.addEventListener("click", incompleteTask);

  // task name / p
  let name = document.createElement("p");
  name.innerHTML = taskName;

  // delete icon
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("ph-duotone");
  deleteIcon.classList.add("ph-trash");
  deleteIcon.classList.add("delete_btn");
  deleteIcon.addEventListener("click", deleteTask);

  leftContent.appendChild(todoIcon);
  leftContent.appendChild(doneIcon);
  leftContent.appendChild(name);

  task.appendChild(leftContent);
  task.appendChild(deleteIcon);

  return task;
}

// add new task
function addTask(event) {
  event.preventDefault();
  console.log('Add Task');

  const newTaskName = addTaskInput.value;

  const newTask = {
    id: uid(),
    name: newTaskName,
    toDo: true,
  }

  taskData.push(newTask);
  const taskElement = createNewTaskEl(newTask.name, newTask.id);
  taskList.appendChild(taskElement);

  addTaskInput.value = ''
}

// complete task
function completeTask(event) {
  console.log('Complete task');

  const todoIcon = event.target;
  todoIcon.classList.add("hidden");

  const taskToCompletId = todoIcon.parentNode.parentNode.id;
  const taskToComplete = document.getElementById(taskToCompletId);

  taskToComplete.classList.add("done");
  taskToComplete.classList.remove("todo");

  const doneIcon = todoIcon.parentNode.childNodes[1];
  doneIcon.classList.remove("hidden");

  taskData.find((item) => {
    if (item.id === taskToCompletId) {
      item.toDo = false;
    }
  })
}

// incomplete task
function incompleteTask(event) {
  console.log('Incomplete task');

  const doneIcon = event.target;
  doneIcon.classList.add("hidden");

  const taskToIncompleteId = doneIcon.parentNode.parentNode.id;
  const taskToIncomplete = document.getElementById(taskToIncompleteId);

  taskToIncomplete.classList.add("todo");
  taskToIncomplete.classList.remove("done");

  const todoIcon = doneIcon.parentNode.childNodes[0];
  todoIcon.classList.remove("hidden");

  taskData.find((item) => {
    if (item.id === taskToIncompleteId) {
      item.toDo = true;
    }
  });
}

// delete task
function deleteTask(event) {
  console.log('Delete Task');

  const taskToDeleteId = event.target.parentNode.id;
  const taskToDelete = document.getElementById(taskToDeleteId);

  const tasksWithoutDeletedOne = taskData.filter(
    (task) => {
      return task.id !== taskToDeleteId;
    }
  );

  taskData = tasksWithoutDeletedOne;
  taskList.removeChild(taskToDelete);
}

// sync HTML with taskData list
// for(let i = 0; i < taskData.length; i++) {
//   const currentTask = taskData[i]
//   const taskItem = createNewTaskEl(currentTask.name, currentTask.id);
//   taskList.appendChild(taskItem);
// }

for(const task of taskData) {
  const taskItem = createNewTaskEl(task.name, task.id);
  taskList.appendChild(taskItem);
}

// counter tasks
