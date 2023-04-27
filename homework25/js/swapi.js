function setUp (classes) {
  const { formClass, preClass, controllerClass, idClass, loaderClass } = classes

  const _form = document.querySelector(`.${formClass}`)
  const _pre = document.querySelector(`.${preClass}`)
  const _controller = document.querySelector(`.${controllerClass}`)
  const _id = document.querySelector(`.${idClass}`)
  const _loader = document.querySelector(`.${loaderClass}`)

  _form.addEventListener('submit', (event) => {
    event.preventDefault()
    onSubmit({ _form, _pre, _controller, _id, _loader })
  })
}

async function onSubmit (elements) {
  const { _form, _pre, _controller, _id, _loader } = elements

  _loader.classList.remove('inactive')

  const formURL = new FormData(_form).get('url')
  const regEx = /\//
  const hasSlash = regEx.test(formURL)

  if (hasSlash) {
    const normalizedURL = formURL.trim()
    const response = await getSwapiData(_form.action, normalizedURL)
    console.log('response', response)

    showResponse(
      response,
      normalizedURL,
      { _pre, _controller, _id, _loader }
    )
  } else {
    window.alert('input "/"')
    _loader.classList.add('inactive')
  }
}

async function getSwapiData (start, end) {
  const response = await fetch(`${start}/${end}`, {
    method: 'GET'
  })

  try {
    return {
      status: 'success',
      data: await response.json()
    }
  } catch (event) {
    console.error(event)
    return {
      status: 'error',
      data: null
    }
  }
}

function showResponse (response, url, elements) {
  const { _pre, _controller, _id, _loader } = elements

  if (response?.status === 'success') {
    const splittedURL = url.split('/')
    _controller.innerHTML = splittedURL[0]
    _controller.classList.remove('inactive')
    const id = splittedURL[1]

    if (id) {
      _id.innerHTML = id
      _id.classList.remove('inactive')
    } else {
      _id.classList.add('inactive')
    }

    _pre.innerHTML = JSON.stringify(response.data, null, 2)
  } else {
    _pre.innerHTML = JSON.stringify(response, null, 2)

    _controller.classList.add('inactive')
    _id.classList.add('inactive')
  }

  _loader.classList.add('inactive')
}

export default setUp
