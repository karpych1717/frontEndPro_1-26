'use strict'

document.addEventListener('DOMContentLoaded', () => {
  fetch('./resources/pages.json').then(responce => responce.json())
    .then(function (lessons) {
      console.log(lessons)

      const pagesList = document.getElementById('pages').querySelector('ul')
      const lessonTemplate = pagesList.querySelector('#page-template')

      console.log(lessonTemplate)

      let temp
      let tempList
      for (const lesson of lessons) {
        temp = lessonTemplate.content.cloneNode(true)

        temp.querySelector('h3').innerText = '▸ ' + lesson.lesson
        tempList = temp.querySelector('ul')

        for (const practice of lesson.practice) {
          tempList.insertAdjacentHTML('beforeend',
            `<li class='page'><a href='${practice.url}'>${practice.name}</a></li>`
          )
        }

        for (const homework of lesson.homework) {
          tempList.insertAdjacentHTML('beforeend',
            `<li class='page'><a href='${homework.url}'>${homework.name}</a></li>`
          )
        }

        pagesList.appendChild(temp)
      }

      pagesList.addEventListener('click', function (event) {
        if (event.target.tagName === 'H3') {
          event.target.closest('.paragraph').querySelector('ul')
            .classList.toggle('inactive')
          console.log('uwu')
        }
      })
    })
})