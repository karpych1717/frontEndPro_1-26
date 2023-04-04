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

  const presenceVolume = presenceAmount / lessonsAmount

  if (avarageMark > 90 && presenceAmount > 90) {
    return 'Molodets!'
  }

  if (avarageMark > 90 || presenceAmount > 90) {
    return 'Dobre, ale mozhna krasche.'
  }

  return 'Redyska!'
}