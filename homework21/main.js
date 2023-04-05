'use strict'

const degToWord = (() => {
  const sectors = [
    'північний',
    'північно-західний',
    'північно-західний',
    'західний',
    'західний',
    'південно-західний',
    'південно-західний',
    'південний',
    'південний',
    'південно-східний',
    'південно-східний',
    'східний',
    'східний',
    'північно-східний',
    'північно-східний',
    'північний'
  ]

  return function (deg) {
    const index = Math.trunc(deg / 22.5)

    return sectors[index]
  } 
})()

document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('button').addEventListener('click', function () {
    const span = document.querySelector('span')
    const wrapper = span.closest('div')

    let weather
    let iconRef = new URL('https://openweathermap.org')

    let path = new URL('?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
      'http://api.openweathermap.org/data/2.5/weather')
    
    fetch(path, { method: 'GET' })
    .then(responce => responce.json())
    .then(data => {
      weather = `Температура в Києві складає ${data.main.temp} градусів, ` +
        `атмосферний тиск - ${data.main.pressure} мм.рт.ст., ` +
        `вологість поітря - ${data.main.humidity}%, ` +
        `швидкість вітру - ${data.wind.speed} м/с, ` +
        `напрямок вітру - ${degToWord(data.wind.deg)}.`

      iconRef = new URL ( `/img/w/${data.weather[0].icon}.png`, iconRef)

      wrapper.prepend(document.createElement('br'))

      wrapper.prepend((() => {
        const icon = document.createElement('img')
        icon.src = iconRef.href
        return icon
      })())

      span.textContent = weather
    })
  })
})
