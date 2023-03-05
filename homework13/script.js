'use strict'

const taskFunctions = [taskFunction1]
window.onload = () => setUpButtonBlock(taskFunctions)

function taskFunction1 () {
  const links = document.querySelectorAll('a.unsafe')
  console.log(links)
  
  for (let link of links) {
    if ( isSafe(link) ) continue

  }
}

function isSafe (link) {
  return link.indexOf('https://') === 0
}

function setUpButtonBlock (taskFunctions) {
  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]

  for (let i = 0; i < taskFunctions.length; i++) {
    buttonsBlock.appendChild( createButton(`Task ${i + 1}`, taskFunctions[i]) )
  }
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')
    
  button.classList.add('button')
  button.textContent = name
  button.addEventListener('click', taskFunction)

  return button
}