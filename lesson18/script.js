'use strict'

window.onload = () => setUpButtonBlock()

function setUpButtonBlock () {
  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]

  const plusButton = addButton(buttonsBlock, 'Plus')
  const minusButton = addButton(buttonsBlock, 'Minus')
  const logButton = addButton(buttonsBlock, 'Log')

  let counter = 0

  plusButton.addEventListener('click', function () {
    counter++
    console.log('incremented, now = ', counter)
  })

  minusButton.addEventListener('click', function () {
    counter--
    console.log('deremented, now = ', counter)
  })

  logButton.addEventListener('click', function () {
    console.log('counter = ', counter)
  })
}

function addButton (parent, name) {
  const button = document.createElement('button')

  button.classList.add('button')
  button.textContent = name

  parent.appendChild(button)

  return button
}
