'use strict'

const degToWord = (() => {
  const sectors = [
    'північний',
    'північно-східний',
    'північно-східний',
    'східний',
    'східний',
    'південно-східний',
    'південно-східний',
    'південний',
    'південний',
    'південно-західний',
    'південно-західний',
    'західний',
    'західний',
    'північно-західний',
    'північно-західний', 
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
    const pic = wrapper.querySelector('img')

    let weather
    let iconRef = new URL('https://openweathermap.org')

    let path = new URL('?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
      'https://api.openweathermap.org/data/2.5/weather')
    
    fetch(path, { method: 'GET' })
    .then(responce => responce.json())
    .then(data => {
      weather = `Температура в Києві складає ${data.main.temp} градусів, ` +
        `атмосферний тиск - ${Math.round(data.main.pressure / 1000 * 760)} мм.рт.ст., ` +
        `вологість повітря - ${data.main.humidity}%, ` +
        `швидкість вітру - ${data.wind.speed} м/с, ` +
        `напрямок вітру - ${degToWord(data.wind.deg)}.`

      iconRef = new URL ( `/img/w/${data.weather[0].icon}.png`, iconRef)

      pic.src = iconRef.href

      span.textContent = weather
    })
  })
})
