'use strict'

function setUpToDoList (_wrapper) {
  const formInput = _wrapper.querySelector('.js--form')
  formInput.addEventListener('submit', addTask)
  // formInput.value = 'default text for debug'
}

function addTask (event) {
  event.preventDefault()

  const inputText = this.querySelector('.js--form-input').value

  if (inputText.trim() === '') return

  const newTask = this.closest('.js--list-block').querySelector('.js--task-template')
    .content.cloneNode(true)

  const checkbox = newTask.querySelector('.js--checkbox')
  checkbox.addEventListener('input', strikeTask)

  const delButton = newTask.querySelector('.js--waka')
  delButton.addEventListener('click', removeTask)

  const text = newTask.querySelector('.js--task-text')
  text.textContent = inputText.trim()

  this.closest('.js--list-block')
    .querySelector('.js--task-list').appendChild(newTask)

  this.querySelector('.js--form-input').value = ''
}

function strikeTask (event) {
  this.closest('.js--task').querySelector('.js--task-text')
    .classList.toggle('strike-text')
}

function removeTask (event) {
  this.closest('.js--task').remove()
  // console.log('WAKA WAKA')
}

export default setUpToDoList
