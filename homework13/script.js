'use strict'

window.onload = setUpButtonsBlock

function setUpButtonsBlock () {
  let ref = null

  function setRef () {
    ref = prompt('weredouwannago?', 'karpych1717.github.io/simulations')
  }

  function goRef () {
    if (ref === null) {
      alert('no ref availiable')
      return
    }

    if (ref.indexOf('https://') === 0) {
      window.open(ref, '_blank').focus()
      return
    }

    window.open('https://' + ref, '_blank').focus()
  }

  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]

  buttonsBlock.appendChild( createButton('Ask', setRef) )
  buttonsBlock.appendChild( createButton('Go', goRef) )
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')
  
  button.addEventListener('click', taskFunction)
  button.classList.add('button')
  button.textContent = name

  return button
}
