class FormElement {
  constructor (name, value) {
    this.name = name
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
