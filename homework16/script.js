'use strict'

window.onload = () => setUpButtons()





function setUpButtons (taskFunctions) {
  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]
  const modal = document.querySelector('.js--modal')

  buttonsBlock.appendChild(createButton('Show', appear))
  modal.getElementsByClassName('button')[0].addEventListener('click', hide)
  modal.getElementsByClassName('button')[1].addEventListener('click', hide)

  function appear () {
    modal.style.display = 'flex'
  }

  function hide () {
    modal.style.display = 'none'
  }
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')

  button.classList.add('button')
  button.textContent = name
  button.addEventListener('click', taskFunction)

  return button
}
