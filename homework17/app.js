function setUp (appWrapper) {
  loadTableTo(appWrapper)

  appWrapper.querySelector('.js--form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('uwu')
    addUser.call(
        this,
        this.elements['name'].value,
        this.elements['phone'].value,
        +this.elements['age'].value
    )
  })

  appWrapper.querySelector('.js--add-button').addEventListener('click', function () {
    this.closest('.js--app-wrapper').querySelector('.js--form')
      .classList.remove('js--hidden')
  })
}

function addUser (name, phone, age) {

  const user = {
    id: Math.floor(Math.random() * 10000),
    name,
    phone,
    age
  }
  console.log(this.closest('.js--app-wrapper'))

  const table = this.closest('.js--app-wrapper').querySelector('.js--content')
  addRow(table, user)

  const currentUsers = JSON.parse(localStorage.getItem('users')) || []

  currentUsers.push(user)
  localStorage.setItem('users', JSON.stringify(currentUsers))

  this.classList.add('js--hidden')
  console.log(this.classList)
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
  console.log('new', newRow)

  newRow.querySelector('.js--user-id').innerHTML = user.id
  newRow.querySelector('.js--user-name').innerHTML = user.name
  newRow.querySelector('.js--user-phone').innerHTML = user.phone
  newRow.querySelector('.js--user-age').innerHTML = user.age

  newRow.querySelector('.js--delete-button').addEventListener('click', function (event) {
    const thisRow = this.closest('tr')
    const id = +thisRow.querySelector('.js--user-id').innerHTML

    thisRow.remove()
    removeUser(id)
  })

  table.appendChild(newRow)
}

export default setUp