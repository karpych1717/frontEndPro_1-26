'use strict'

const pictures = new Array(4)

window.onload = setUp

function setUp () {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i] = document.createElement('img')
    pictures[i].alt = `${i + 1}.jpg`
    pictures[i].src = `${i + 1}.jpg`
    pictures[i].style.width = '300px'
    pictures[i].style.height = '300px'
  }

  const wrapper = document.querySelector('.pic-wrapper')

  pictures[0].style.position = 'relative'
  pictures[0].style.left = '0'
  pictures[0].style.top = '0'
  wrapper.appendChild(pictures[0])

  for (let i = 1; i < pictures.length; i++) {
    pictures[i].style.position = 'absolute'
    pictures[i].style.left = '0'
    pictures[i].style.top = '0'
    pictures[i].classList.add('hide-it')
    wrapper.appendChild(pictures[i])
  }

  wrapper.querySelector('#button-left').classList.add('hide-it')

  wrapper.querySelector('#button-right').addEventListener('click', function (event) {
    this.closest('.pic-wrapper').querySelector('#button-left')
      .classList.remove('hide-it')

    for (let i = 1; i < pictures.length; i++) {
      if (i === pictures.length - 1) this.classList.add('hide-it')

      if (pictures[i].classList.contains('hide-it')) {
        pictures[i].classList.remove('hide-it')
        break
      }
    }
  })

  wrapper.querySelector('#button-left').addEventListener('click', function (event) {
    this.closest('.pic-wrapper').querySelector('#button-right')
      .classList.remove('hide-it')

    for (let i = pictures.length - 1; i > 0; i--) {
      if (i === 1) this.classList.add('hide-it')

      if (!pictures[i].classList.contains('hide-it')) {
        pictures[i].classList.add('hide-it')
        break
      }
    }
  })
}
