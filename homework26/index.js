import { TextElement, CheckboxElement, ButtonElement } from './pageElements.js'

document.addEventListener('DOMContentLoaded', () => {
  console.log('uwu')

  const _wrapper = document.querySelector('.app-wrapper')
  const _form = document.createElement('form')

  const textField = new TextElement('name', '', 'name')
  const checkBox = new CheckboxElement('confirm', 'on', false)
  const button = new ButtonElement('submit', '', 'submit')

  _form.appendChild(textField.makeIt())
  _form.appendChild(checkBox.makeIt())
  _form.appendChild(button.makeIt())

  _form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(_form)
    console.log(data)
  })

  _wrapper.appendChild(_form)
})
