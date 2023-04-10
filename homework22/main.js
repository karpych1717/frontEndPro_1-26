'use strict'

function main () {
  const appWrapper = document.querySelector('.js--app')
  const form = appWrapper.querySelector('.js--form')
  const erorSpan = form.querySelector('.js--form-error')
  const post = appWrapper.querySelector('.js--post')

  const postText = post.querySelector('.js--post-text')
  const comments = post.querySelector('.js--comments')

  let postID

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    erorSpan.classList.add('js--hidden')    
    postID = +form.elements[0].value

    if (Number.isNaN(input)) {
      erorSpan.innerHTML = 'Input is NaN'
      erorSpan.classList.remove('js--hidden')
      return
    }

    if (input < 1 || input > 100) {
      erorSpan.innerHTML = 'ID is out of range'
      erorSpan.classList.remove('js--hidden')
      return
    }
    
    
  })
}

document.addEventListener('DOMContentLoaded', main)
