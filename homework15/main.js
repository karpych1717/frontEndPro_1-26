'use strict'

import setUp from './setUpToDoList.js'

window.addEventListener('DOMContentLoaded', main)

function main() {
  const listWrapper = document.getElementsByClassName('list-block')

  setUp(listWrapper[0])
}