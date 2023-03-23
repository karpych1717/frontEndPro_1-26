function setUp (appWrapper) {
  loadTableTo(appWrapper)

  const table = appWrapper.querySelector('.js--content')
  const addButtonCard = appWrapper.querySelector('.js--add-button-card')
  const addForm = appWrapper.querySelector('.js--add-form')
  const editForm = appWrapper.querySelector('.js--edit-form')

  table.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'view') console.log('O_o')
    if (event.target.dataset.action === 'edit') editButtonAction.call(event.target)
    if (event.target.dataset.action === 'delete') deleteButtonAction.call(event.target)
  })

  appWrapper.querySelector('.js--new-button').addEventListener('click', function () {
    addButtonCard.classList.add('js--hidden')

    addForm.classList.remove('js--hidden')

    editForm.classList.add('js--hidden')
  })

  addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name: this.elements['name'].value,
      phone: this.elements['phone'].value,
      age: +this.elements['age'].value
    }

    addLocalUser(newUser)
    addRow(table, newUser)

    this.reset()

    this.classList.add('js--hidden')
    addButtonCard.classList.remove('js--hidden')
  })

  editForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newUser = {
      id: +this.elements['id'].value,
      name: this.elements['name'].value,
      phone: this.elements['phone'].value,
      age: +this.elements['age'].value
    }

    rewriteLocalUser(newUser.id, newUser)

    const rowToEdit = this.closest('.js--app-wrapper').querySelector('.js--editing')

    rowToEdit.querySelector('.js--user-name').innerHTML = newUser.name
    rowToEdit.querySelector('.js--user-phone').innerHTML = newUser.phone
    rowToEdit.querySelector('.js--user-age').innerHTML = newUser.age

    this.reset()
    rowToEdit.classList.remove('js--editing')

    this.classList.add('js--hidden')
    addButtonCard.classList.remove('js--hidden')
  })

  editForm.addEventListener('reset', function () {
    this.classList.add('js--hidden')

    const appWrapper = this.closest('.js--app-wrapper')

    appWrapper.querySelector('.js--editing').classList.remove('js--editing')
    appWrapper.querySelector('.js--add-button-card').classList.remove('js--hidden')
  })
}

function editButtonAction () {
  const appWrapper = this.closest('.js--app-wrapper')
  
  appWrapper.querySelector('.js--add-button-card')
    .classList.add('js--hidden')

  appWrapper.querySelector('.js--add-form')
    .classList.add('js--hidden')

  const highlitedRow = appWrapper.querySelector('.js--editing')
  if (highlitedRow !== null) highlitedRow.classList.remove('js--editing')

  const editForm = appWrapper.querySelector('.js--edit-form')
  editForm.classList.remove('js--hidden')

  const thisRow = this.closest('tr')
  thisRow.classList.add('js--editing')

  const user = {
    id: +thisRow.querySelector('.js--user-id').innerHTML,
    name: thisRow.querySelector('.js--user-name').innerHTML,
    phone: thisRow.querySelector('.js--user-phone').innerHTML,
    age: +thisRow.querySelector('.js--user-age').innerHTML
  }

  editForm.elements['id'].value = user.id
  editForm.elements['name'].value = user.name
  editForm.elements['phone'].value = user.phone
  editForm.elements['age'].value = user.age
}

function deleteButtonAction () {
  const thisRow = this.closest('tr')
  const id = +thisRow.querySelector('.js--user-id').innerHTML

  thisRow.remove()
  removeLocalUser(id)
}

function addLocalUser (user) {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || []

  currentUsers.push(user)
  localStorage.setItem('users', JSON.stringify(currentUsers))
}

function removeLocalUser (id) {
  const currentUsers = JSON.parse(localStorage.getItem('users'))

  let index = getLocalUserIndex(currentUsers, id)

  if (index === -1) return

  currentUsers.splice(index, 1)
  localStorage.setItem('users', JSON.stringify(currentUsers))
}

function rewriteLocalUser (id, newUser) {
  const currentUsers = JSON.parse(localStorage.getItem('users'))

  let index = getLocalUserIndex(currentUsers, id)

  currentUsers[index] = newUser
  localStorage.setItem('users', JSON.stringify(currentUsers))
}

function getLocalUserIndex(users, id) {
  let index = -1

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      index = i
      break
    }
  }

  return index
}

function loadTableTo (appWrapper) {
  const users = JSON.parse(localStorage.getItem('users'))

  if (users === null) return

  const table = appWrapper.querySelector('.js--content')
  for (const user of users) {
    addRow(table, user)
  }
}

function addRow (table, user) {
  const newRow = table.querySelector('.js--row-template').content.cloneNode(true)

  newRow.querySelector('.js--user-id').innerHTML = user.id
  newRow.querySelector('.js--user-name').innerHTML = user.name
  newRow.querySelector('.js--user-phone').innerHTML = user.phone
  newRow.querySelector('.js--user-age').innerHTML = user.age

  table.appendChild(newRow)
}

export default setUp