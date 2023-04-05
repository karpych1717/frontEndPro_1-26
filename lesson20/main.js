'use strict'

const taskFunctions = [taskFunction1, taskFunction2, taskFunction3]
window.onload = () => setUpButtonBlock(taskFunctions)

function taskFunction1 () {
  waiter('pure')
}

function taskFunction2 () {
  setTimeout(() => waiter('delay'), 0)
}

function taskFunction3 () {
  const myPromice = new Promise((resolve, reject) => {
    waiter('promice')
    resolve()
  }).then(() => waiter('then'))
}

function waiter (message) {
  const delay = 5000

  const start = new Date()
  let i = 0

  while (true) {
    i++

    if ((new Date()) - start >= delay) break
  }

  console.log(`${message} loop ${i} times`)
}


function setUpButtonBlock (taskFunctions) {
  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]

  for (let i = 0; i < taskFunctions.length; i++) {
    buttonsBlock.appendChild(createButton(`Task ${i + 1}`, taskFunctions[i]))
  }
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')

  button.classList.add('button')
  button.textContent = name
  button.addEventListener('click', taskFunction)

  return button
}
