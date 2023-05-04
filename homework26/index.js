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

  button.makeIt()
  button.addClass('button')

  _form.appendChild(nameField.element)
  _form.appendChild(surnameField.element)
  _form.appendChild(checkBox.element)
  _form.appendChild(button.element)

  _form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(_form)
    data.append('username', 'Chris')

    for (const value of data.values()) {
      console.log(value)
    }

    console.log(data.get('confirm'))
  })

  _wrapper.appendChild(_form)
})
