const todoList = []
renderTodoList()

function addTodo() {
  const inputElement = document.querySelector('.js-input-name')
  const name = inputElement.value

  todoList.push(name)
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
  todoList.forEach(todo => {
    const html = `<p>${todo}<p>`
    todoListHTML += html
  })
  document.querySelector('.js-display-list')
    .innerHTML = todoListHTML
}