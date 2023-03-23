function setUp (appWrapper) {
  loadTableTo(appWrapper)

  const addButtonCard = appWrapper.querySelector('.js--add-button-card')
  const addForm = appWrapper.querySelector('.js--add-form')
  const editForm = appWrapper.querySelector('.js--edit-form')
  const table = appWrapper.querySelector('.js--content')

  appWrapper.querySelector('.js--new-button').addEventListener('click', function () {
    addButtonCard.classList.add('js--hidden')

    addForm.classList.remove('js--hidden')

    editForm.classList.add('js--hidden')
  })

  appWrapper.querySelector('.js--add-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name: this.elements['name'].value,
      phone: this.elements['phone'].value,
      age: +this.elements['age'].value
    }

    addUser(newUser)
    addRow(table, newUser)

    this.reset()

    this.classList.add('js--hidden')
    addButtonCard.classList.remove('js--hidden')
  })
}

function addUser (user) {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || []

  currentUsers.push(user)
  localStorage.setItem('users', JSON.stringify(currentUsers))
}

function removeUser (id) {
  const currentUsers = JSON.parse(localStorage.getItem('users'))

  let index = -1

  for (let i = 0; i < currentUsers.length; i++) {
    if (currentUsers[i].id === id) {
      index = i
      break
    }
  }

  if (index === -1) return

  currentUsers.splice(index, 1)
  localStorage.setItem('users', JSON.stringify(currentUsers))
}

function loadTableTo (appWrapper) {
  const users = JSON.parse(localStorage.getItem('users'))

  if (users === null) return

  const table = appWrapper.querySelector('.js--content')
  for (const user of users) {
    addRow(table, user)
  }
}

function addRow(table, user) {
  const newRow = table.querySelector('.js--row-template').content.cloneNode(true)

  newRow.querySelector('.js--user-id').innerHTML = user.id
  newRow.querySelector('.js--user-name').innerHTML = user.name
  newRow.querySelector('.js--user-phone').innerHTML = user.phone
  newRow.querySelector('.js--user-age').innerHTML = user.age

  newRow.querySelector('.js--edit-button').addEventListener('click', function (event) {
    const thisRow = this.closest('tr')
    const id = +thisRow.querySelector('.js--user-id').innerHTML

    this.closest('.js--app-wrapper').querySelector('.js--add-button-card')
      .classList.add('js--hidden')

    this.closest('.js--app-wrapper').querySelector('.js--add-form')
      .classList.add('js--hidden')
  
    this.closest('.js--app-wrapper').querySelector('.js--edit-form')
      .classList.remove('js--hidden')
  })

  newRow.querySelector('.js--delete-button').addEventListener('click', function (event) {
    const thisRow = this.closest('tr')
    const id = +thisRow.querySelector('.js--user-id').innerHTML

    thisRow.remove()
    removeUser(id)
  })

  table.appendChild(newRow)
}

export default setUp