import FormElement from './FormElement.js'

class SmartFormElement extends FormElement {
  redirectValue () {
    Object.defineProperty(this, 'value', {
      get () {
        return this.element.value
      },
      set (newValue) {
        this.element.value = newValue
      }
    })
  }

  addClass (className) {
    if (this.element === undefined) {
      throw new Error('unable to add class before element creation')
    }

    this.element.classList.add(className)
  }
}

class TextElement extends SmartFormElement {
  constructor (name, value, placeholder) {
    super(name, 'text-input', value)

    this.placeholder = placeholder
  }

  makeIt () {
    this.element = document.createElement('input')
    this.element.type = 'text'

    this.element.name = this.name
    this.element.value = this.value
    this.element.placeholder = this.placeholder

    this.redirectValue()

    return this.element
  }
}

class CheckboxElement extends SmartFormElement {
  constructor (name, value, isChecked) {
    super(name, 'checkbox-input', value)

    this.isChecked = isChecked
  }

  makeIt () {
    this.element = document.createElement('input')
    console.log(this.element)
    this.element.type = 'checkbox'

    this.element.name = this.name
    this.element.value = this.value
    this.element.checked = this.isChecked

    this.redirectValue()

    return this.element
  }
}

class ButtonElement extends SmartFormElement {
  constructor (name, value, type) {
    super(name, 'button', value)

    this.type = type
  }

  makeIt () {
    this.element = document.createElement('button')
    this.element.innerHTML = this.name

    this.element.type = this.type
    this.element.name = this.name
    this.element.value = this.value

    this.redirectValue()

    return this.element
  }
}

export { TextElement, CheckboxElement, ButtonElement }
