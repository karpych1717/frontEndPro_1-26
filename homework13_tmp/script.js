'use strict'

const taskFunctions = [taskFunction1]
window.onload = () => setUpButtonBlock(taskFunctions)

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

function setUpButtonBlock (taskFunctions) {
  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]

  for (let i = 0; i < taskFunctions.length; i++) {
    buttonsBlock.appendChild( createButton(`Task ${i + 1}`, taskFunctions[i]) )
  }

  paper.appendChild(buttonsBlock)
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')
    
  button.classList.add('button')
  button.textContent = name
  button.addEventListener('click', taskFunction)

  return button
}