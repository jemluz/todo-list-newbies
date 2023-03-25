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
    toDo: false,
  }
]

const addTaskInput = document.getElementById("task_input");
const addTaskButton = document.getElementsByTagName("button")[0];
const taskList = document.getElementById("tasks_list");

// create new task element
function createNewTaskEl(taskName, taskId) {
  // create task li

  // create .left_content div
    // todo icon
    // done icon
    // task name / p

  // delete icon
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
}

// complete task
function completeTask(event) {
  console.log('Complete task');
}

// incomplete task
function incompleteTask(event) {
  console.log('Incomplete task');
}

// delete task
function deleteTask(event) {
  console.log('Delete Task');
}

// sync HTML with taskData list

// counter tasks
