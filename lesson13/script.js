'use strict'

const testFunction = () => {
  console.log(this)
}

window.onload = main

function main () {
  testFunction()
}
