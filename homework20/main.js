'use strict'

function Student (fullName, birthDay, marks) {
  this.name = fullName.name
  this.surname = fullName.surname
  this.birthDay = birthDay

  this.marks = marks

  this.presence = new Array(25)
  this.presentDay = 0
}

Student.prototype.getAge = function () {
  const today = new Date()
  const age = Math.round( (today - this.birthDay) / 1000 / 60 / 60 / 24 / 365.25 )

  return age
}

Student.prototype.getAverageMark = function () {
  const summ = this.marks.reduce((accumulator, value) => accumulator + value, 0)
  const avarage = Math.round(summ / this.marks.length)

  return avarage
}

Student.prototype.present = function () {
  if (this.presentDay >= this.presence.length) {
    console.log('run out of program')
    return
  }

  this.presence[this.presentDay] = true
  this.presentDay++
}

Student.prototype.absent = function () {
  if (this.presentDay >= this.presence.length) {
    console.log('run out of program')
    return
  }

  this.presence[this.presentDay] = false
  this.presentDay++
}

Student.prototype.summary = function () {
  const avarageMark = this.getAverageMark()
  
  let presenceAmount = 0
  let lessonsAmount = 0

  for (let i = 0; i < this.presence.length; i++) {
    if (this.presence[i] === undefined) break

    lessonsAmount++

    if (this.presence[i] === false) continue

    presenceAmount++
  }

  const presenceVolume = lessonsAmount > 0 
    ? presenceAmount / lessonsAmount
    : 0

  if (avarageMark > 90 && presenceVolume > 0.9) {
    return 'Molodets!'
  }

  if (avarageMark > 90 || presenceVolume > 0.9) {
    return 'Dobre, ale mozhna krasche.'
  }

  return 'Redyska!'
}

const student1 = new Student({ name: 'Vasya', surname: 'Poopkeen' }, new Date('1991-05-08'), [ 100, 80, 10 ])
const student2 = new Student({ name: 'Petya', surname: 'Nagibator' }, new Date('1993-02-01'), [ 100, 90, 100 ])
const student3 = new Student({ name: 'Seryozha', surname: 'Ivanov' }, new Date('1998-10-07'), [ 100, 65, 100 ])

;[student1, student2, student3]
  .forEach(student => {
    for (let i = 0; i < 26; i++) {
      randomAttend(student)
    }
  })

console.log('student1:', student1.getAge(), student1.summary())
console.log('student2:', student2.getAge(), student2.summary())
console.log('student3:', student3.getAge(), student3.summary())

function randomAttend (student) {
  if (Math.random() < 0.1) {
    student.absent()
  } else {
    student.present()
  }
}