const todoList = [{
  name: 'make dinner',
  dueDate: '2025-11-18'
}, {
  name: 'wash dishes',
  dueDate: '2025-11-18'
}]
renderTodoList()

function addTodo() {
  const inputElement = document.querySelector('.js-input-name')
  const name = inputElement.value
  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value

  todoList.push({
    name,
    dueDate
  })
  renderTodoList()
  inputElement.value = ''
}

function checkEnterPress(event) {
  if (event.key === 'Enter') {
    addTodo()
  }
}

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i]
    const { name, dueDate } = todoObject
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
      todoList.splice(${i}, 1)
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `
    todoListHTML += html
  }
  document.querySelector('.js-display-list')
    .innerHTML = todoListHTML
}