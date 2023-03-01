'use strict'

const TASKS_AMOUNT = 1
const buttons = new Array(TASKS_AMOUNT)

window.onload = () => {
  const paper = document.getElementById('paper')

  const buttonsBlock = document.createElement('div')
  buttonsBlock.classList.add('buttons-block')

  paper.appendChild(buttonsBlock)

  for (let i = 0; i < TASKS_AMOUNT; i++) {
    buttons[i] = createButton(`Task ${i + 1}`)
    buttonsBlock.appendChild(buttons[i])
  }

  buttons[0].addEventListener('click', taskFunction1)
}

function taskFunction1 () {
  const pic = document.createElement('img')

  const picName = randomPicName(0)
  pic.src = `./images/${picName}`
  pic.alt = `${picName} was not provided`
  pic.style.display = 'block'

  document.getElementById('paper').appendChild(pic)

  function randomPicName (n) {
    return n !== 0 ? `${n}.jpg` : randomPicName( Math.trunc(10 * Math.random()) )
  }
}

function createButton (name) {
  const button = document.createElement('button')
    
  button.classList.add('button')
  button.textContent = name

  return button
}