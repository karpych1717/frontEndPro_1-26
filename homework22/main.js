'use strict'

function main () {
  const appWrapper = document.querySelector('.js--app')
  const form = appWrapper.querySelector('.js--form')
  const erorSpan = form.querySelector('.js--form-error')
  const post = appWrapper.querySelector('.js--post')

  const postText = post.querySelector('.js--post-text')
  const comments = post.querySelector('.js--comments')
  const commentTemplate = comments.querySelector('.js--comment-template')

  const sourcePath = new URL('https://jsonplaceholder.typicode.com')
  let postID

  form.addEventListener('submit', function (event) {
    event.preventDefault()
    erorSpan.classList.add('js--hidden')
    postID = +form.elements[0].value

    if (Number.isNaN(postID)) {
      erorSpan.innerHTML = 'Input is NaN'
      erorSpan.classList.remove('js--hidden')
      return
    }

    if (postID < 1 || postID > 100) {
      erorSpan.innerHTML = 'invalid ID'
      erorSpan.classList.remove('js--hidden')
      return
    }

    fetch(new URL(`posts/${postID}`, sourcePath), { method: 'GET' })
      .then(responce => responce.json())
      .then(data => {
        postText.querySelector('p').innerHTML = data.body

        post.classList.remove('js--hidden')
      })
      .catch(error => console.error(error))

    if (isVisible(comments)) {
      comments.classList.add('js--hidden')

      comments
        .querySelectorAll(':scope > .js--comment')
        .forEach(comment => comment.remove())
    }
  })

  post.querySelector('.js--show-comments').addEventListener('click', function () {
    if (isVisible(comments)) return

    fetch(new URL(`posts/${postID}/comments`, sourcePath), { method: 'GET' })
      .then(responce => responce.json())
      .then(data => {
        data.forEach(comment => {
          const newComment = commentTemplate.content.cloneNode(true)

          newComment.querySelector('.js--comment-name').innerHTML = comment.name
          newComment.querySelector('.js--comment-email').innerHTML = comment.email
          newComment.querySelector('.js--comment-body').innerHTML = comment.body

          comments.appendChild(newComment)
        })

        comments.classList.remove('js--hidden')
      })
      .catch(error => console.error(error))
  })
}

function isVisible (node) {
  return !node.matches('.js--hidden')
}

document.addEventListener('DOMContentLoaded', main)
