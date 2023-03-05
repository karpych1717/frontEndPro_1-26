'use strict'

const taskFunctions = [taskFunction1]
window.onload = () => setUpButtonBlock(taskFunctions)

function taskFunction1 () {
  const list = makeList([1, 2, [3.1, 3.2, 3.3], 4])

  document.getElementById('paper').appendChild(list)
}

function makeList (array) {
  const list = document.createElement('ul')

  for (const elem of array) {
    list.appendChild( document.createElement('li') )

    if ( Array.isArray(elem) ) {
      list.lastChild.appendChild( makeList(elem) )
    } else {
      list.lastChild.innerHTML = elem
    }
  }

  return list
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