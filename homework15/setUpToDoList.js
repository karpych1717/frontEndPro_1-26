'use strict'

function setUpToDoList (_wrapper) {
  const form = document.createElement('form')
  form.classList.add('form')
  form.addEventListener('submit', addTask)

  const formInput = document.createElement('input')
  formInput.type = 'text'
  formInput.classList.add('form-input')
  form.appendChild(formInput)
  // formInput.value = 'default text for debug'

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.textContent = 'Add'
  submitButton.classList.add('button')
  form.appendChild(submitButton)

  const resetButton = document.createElement('button')
  resetButton.type = 'reset'
  resetButton.textContent = 'Reset'
  resetButton.classList.add('button')
  form.appendChild(resetButton)

  _wrapper.appendChild(form)

  const listDiv = document.createElement('div')
  listDiv.classList.add('task-list')

  _wrapper.appendChild(listDiv)
}

function addTask (event) {
  event.preventDefault()

  const inputText = this.closest('.form').querySelector('.form-input').value

  if (inputText.replaceAll(' ', '') === '') return

  const newTask = document.createElement('div')
  newTask.classList.add('task')

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.classList.add('checkbox')

  check.addEventListener('input', function (event) {
    this.closest('.task').querySelector('.task-text')
      .classList.toggle('strike-text')
  })

  newTask.appendChild(check)

  const delButton = document.createElement('img')
  delButton.src = './waka30px.png'
  delButton.width = '20'
  delButton.height = '20'
  delButton.classList.add('waka')
  delButton.addEventListener('click', removeTask)

  newTask.appendChild(delButton)

  const text = document.createElement('span')
  text.textContent = inputText.trimStart()
  text.classList.add('task-text')
  newTask.appendChild(text)

  this.closest('.list-block')
    .querySelector('.task-list').appendChild(newTask)

  this.closest('.form').querySelector('.form-input').value = ''
}

function removeTask (event) {
  this.closest('.task').remove()
  // console.log('WAKA WAKA')
}

export default setUpToDoList
