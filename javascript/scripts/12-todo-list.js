const todoList = [{
  name: 'make dinner',
  dueDate: '2025-11-18'
}, {
  name: 'wash dishes',
  dueDate: '2025-11-18'
}]
renderTodoList()

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => addTodo())

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

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `
    todoListHTML += html
  })

  document.querySelector('.js-display-list')
    .innerHTML = todoListHTML

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1)
        renderTodoList()
     })
    })
  }