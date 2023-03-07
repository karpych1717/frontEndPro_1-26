'use strict'

function setUpToDoList(_wrapper) {
  const form = document.createElement('form')
  form.classList.add('form')

  const formInput = document.createElement('input')
  formInput.type = 'text'
  formInput.classList.add('form-input')
  form.appendChild(formInput)

  const formButton = document.createElement('button')
  formButton.type = 'button'
  formButton.textContent = 'Add'
  formButton.classList.add('button', 'form-button')
  form.appendChild(formButton)

  formButton.addEventListener('click', addTask)

  _wrapper.appendChild(form)

  const listDiv = document.createElement('div')
  listDiv.classList.add('task-list')

  _wrapper.appendChild(listDiv)
}

function addTask(event) {
  event.preventDefault()

  const text = document.createElement('span')
  text.textContent = this.closest('.form').getElementsByClassName('form-input')[0].value

  const newTask = document.createElement('div')
  newTask.classList.add('task')
  newTask.appendChild(text)

  this.closest('.list-block').
    getElementsByClassName('task-list')[0].appendChild(newTask)
}

export default setUpToDoList