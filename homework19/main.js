'use strict'

window.addEventListener('DOMContentLoaded', main)

function main () {
  const form = document.querySelector('.js--form-password')
  const erors = form.querySelector('.erors').querySelectorAll('li')

  const regBigLetter = /[A-Z]/
  const regNumber = /[0-9]/
  const regSym = /\W/

  form.addEventListener('reset', function () {
    erors.forEach(span => {
      span.classList.add('js--hidden')
    })
  })

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    erors.forEach(span => {
      span.classList.add('js--hidden')
    })

    const password = form.querySelector('input').value

    if (password.length === 0) {
      window.alert('there is no input')
      return
    }

    let isValid = true

    if (!regBigLetter.test(password)) {
      erors[0].classList.remove('js--hidden')
      isValid = false
    }
    if (!regNumber.test(password)) {
      erors[1].classList.remove('js--hidden')
      isValid = false
    }
    if (!regSym.test(password)) {
      erors[2].classList.remove('js--hidden')
      isValid = false
    }
    if (password.length < 8) {
      erors[3].classList.remove('js--hidden')
      isValid = false
    }

    if (isValid) {
      console.log('ok')
    } else {
      console.log('Nooooo')
    }
  })
}
