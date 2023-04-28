import FormElement from './FormElement.js'

class TextElement extends FormElement {
  constructor (name, value, placeholder) {
    super(name, value)

    this.type = 'text'
    this.placeholder = placeholder
  }

  makeIt () {
    this.element = document.createElement('input')
    this.element.type = this.type

    this.element.name = this.name
    this.element.value = this.value
    this.element.placeholder = this.placeholder

    return this.element
  }
}

class CheckboxElement extends FormElement {
  constructor (name, value, isChecked) {
    super(name, value)

    this.type = 'checkbox'
    this.isChecked = isChecked
  }

  makeIt () {
    this.element = document.createElement('input')
    console.log(this.element)
    this.element.type = this.type

    this.element.name = this.name
    this.element.value = this.value
    this.element.checked = this.isChecked

    return this.element
  }
}

class ButtonElement extends FormElement {
  constructor (name, value, type) {
    super(name, value)

    this.type = type
  }

  makeIt () {
    this.element = document.createElement('button')

    this.element.type = this.type
    this.element.name = this.name
    this.element.value = this.value

    return this.element
  }
}

export { TextElement, CheckboxElement, ButtonElement }
