'use strict'

$(setUp)

function setUp () {
  const gallery = $('.gallery')

  const pictures = gallery.find('img')

  const modal = $('.js--modal')
  const modalPic = modal.find('img')

  let current = 0

  gallery.on('click', 'li', function (event) {
    modal.addClass('active')

    current = pictures.index(event.target)

    modalPic.attr('src', event.target.src)
  })

  modal.find('.js--modal__close').on('click', function () {
    modal.removeClass('active')
  })

  modal.find('.js--modal__prev').on('click', function () {
    current--
    if (current < 0) current = pictures.length - 1

    modalPic.attr('src', pictures.eq(current).attr('src'))
  })

  modal.find('.js--modal__next').on('click', function () {
    current++
    if (current >= pictures.length) current = 0

    modalPic.attr('src', pictures.eq(current).attr('src'))
  })
}
