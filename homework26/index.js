import { TextElement, CheckboxElement, ButtonElement } from './pageElements.js'

document.addEventListener('DOMContentLoaded', () => {
  console.log('uwu')

  const _wrapper = document.querySelector('.app-wrapper')
  const _form = document.createElement('form')

  _form.classList.add('form')

  const nameField = new TextElement('name', '', 'name')
  const surnameField = new TextElement('surname', '', 'surname')
  const checkBox = new CheckboxElement('confirm', 'on', false)
  const button = new ButtonElement('submit', '', 'submit')

  nameField.makeIt()
  nameField.addClass('input')
  surnameField.makeIt()
  surnameField.addClass('input')

  checkBox.makeIt()
  checkBox.addClass('checkbox')
  const _checkLabel = document.createElement('label')
  const _checkSpan = document.createElement('span')

  _checkSpan.innerHTML = 'confirm it, please'

  _checkLabel.appendChild(checkBox.element)
  _checkLabel.appendChild(_checkSpan)

  button.makeIt()
  button.addClass('button')

  _form.appendChild(nameField.element)
  _form.appendChild(surnameField.element)
  _form.appendChild(_checkLabel)
  _form.appendChild(button.element)

  _form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(_form)

    if (data.get('confirm') !== 'on') {
      window.alert('you have to confirm it')
      return
    }

    if (data.get('name').trim() === '') {
      window.alert('name is missing')
      return
    }

    if (data.get('surname').trim() === '') {
      window.alert('surname is missing')
      return
    }

    for (const pair of data.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`)
    }
  })

  _wrapper.appendChild(_form)
})
