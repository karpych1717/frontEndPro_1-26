'use strict'

document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('button').addEventListener('click', function () {
    fetch('http://api.openweathermap.org/data/2.5/weather' +
    '?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(data => console.log(data))
  })
})
