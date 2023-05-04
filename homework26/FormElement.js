class FormElement {
  constructor (name, type, value) {
    this.name = name
    this.type = type
    this.value = value
  }

  showName () {
    console.log(`Name: ${this.name}`)
  }

  getValue () {
    return this.value
  }
}

export default FormElement
