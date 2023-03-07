'use strict'

function setUpToDoList(_wrapper) {
  const form = document.createElement('form')
  form.classList.add('form')
  form.addEventListener('submit', addTask)

  const formInput = document.createElement('input')
  formInput.type = 'text'
  formInput.classList.add('form-input')
  form.appendChild(formInput)
  // formInput.value = 'default text for debug'

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

  const newTask = document.createElement('div')
  newTask.classList.add('task')

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.classList.add('checkbox')

  check.addEventListener('input', function (event) {
    this.closest('.task').getElementsByClassName('task-text')[0].
      classList.toggle('strike-text')
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
  text.textContent = this.closest('.form').getElementsByClassName('form-input')[0].value
  text.classList.add('task-text')
  newTask.appendChild(text)
  
  this.closest('.list-block').
    getElementsByClassName('task-list')[0].appendChild(newTask)

  this.closest('.form').getElementsByClassName('form-input')[0].value = ''
}

function removeTask (event) {
  this.closest('.task').remove()
  // console.log('WAKA WAKA')
}

export default setUpToDoList