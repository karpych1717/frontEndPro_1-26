'use strict'

const arrowFunc = () => {
  console.log(this)
}

function nestedArrowFunc () {
  arrowFunc()
}

const pureObjWithArrow = {
  firstArrow: arrowFunc,
  secondArrow: () => { console.log(this) }
}

function ConstructObjWithArrow () {
  this.firstArrow = arrowFunc
  this.secondArrow = () => { console.log(this) }
}

const objViaConstructor = new ConstructObjWithArrow()

class ObjViaClass {
  constructor () {
    this.firstArrow = arrowFunc
    this.secondArrow = () => { console.log(this) }
  }
}

const objViaClass = new ObjViaClass()

function callBackIt (funk) {
  funk()
}

class ObjWithPureFunc {
  constructor () {
    this.met = function () {
      console.log(this)
    }
  }
}

const objWithPureFunc = new ObjWithPureFunc()
const pureFunc = objWithPureFunc.met

const reassighnedMethod = objViaClass.secondArrow

// here is real action
const buttonsActions = [arrowFunc, nestedArrowFunc,
  pureObjWithArrow.firstArrow, pureObjWithArrow.secondArrow,
  objViaConstructor.firstArrow, objViaConstructor.secondArrow,
  objViaClass.firstArrow, objViaClass.secondArrow,
  () => callBackIt(objViaClass.secondArrow), () => reassighnedMethod(),
  () => objWithPureFunc.met(), objWithPureFunc.met, pureFunc]

window.onload = () => setUpButtonBlock(buttonsActions)

function setUpButtonBlock (taskFunctions) {
  const buttonsBlock = document.getElementsByClassName('buttons-block')[0]

  for (let i = 0; i < taskFunctions.length; i++) {
    buttonsBlock.appendChild(createButton(`Button ${i + 1}`, taskFunctions[i]))
  }
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')

  button.classList.add('button')
  button.textContent = name
  button.addEventListener('click', taskFunction)

  return button
}
