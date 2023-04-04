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

  const age = Math.floor( (today - this.birthDay) / 1000 / 60 / 60 / 24 / 365.25 )

  return age
}

Student.prototype.getAverageMark = function () {
  
}

Student.prototype.present = function () {
  
}

Student.prototype.absent = function () {
  
}

Student.prototype.summary = function () {
  
}