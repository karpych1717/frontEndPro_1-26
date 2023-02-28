'use strict'

window.onload = () => setUp(1)

function taskFunction1 () {
  const num = +prompt('your number', 3)
  const degree = +prompt('your degree', 5)

  alert(`pow(${num}, ${degree}) = ${pow(num, degree)}`)

  function pow (num, degree) {
    if (degree === 0) return 1
    if (degree === 1) return num

    return num * pow(num, degree - 1)
  }
}

function setUp (taskAmount) {
  const paper = document.getElementById('paper')

  const buttonsBlock = document.createElement('div')
  buttonsBlock.classList.add('buttons-block')
  paper.appendChild(buttonsBlock)

  for (let i = 0; i < taskAmount; i++) {
    buttonsBlock.appendChild( document.createElement('button') )
    buttonsBlock.lastChild.classList.add('button')
    buttonsBlock.lastChild.textContent = `Task ${i + 1}`
    buttonsBlock.lastChild.addEventListener('click', eval(`taskFunction${i + 1}`)) //bad idea, but
  }
}