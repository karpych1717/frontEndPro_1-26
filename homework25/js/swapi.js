function setUp (classes) {
  const { form, pre, controller, id, loader } = classes

  const _form = document.querySelector(`.${form}`)
  const _pre = document.querySelector(`.${pre}`)
  const _controller = document.querySelector(`.${controller}`)
  const _id = document.querySelector(`.${id}`)
  const _loader = document.querySelector(`.${loader}`)

  _form.addEventListener('submit', onSubmit)

  async function onSubmit (event) {
    event.preventDefault()

    _loader.classList.remove('d-none')

    const formURL = new FormData(_form).get('url')
    const regEx = /\//
    const hasSlash = regEx.test(formURL)

    if (hasSlash) {
      const normalizedURL = formURL.trim()
      const response = await getSwapiData(_form.action, normalizedURL)
      console.log('response', response)

      showResponse(response, normalizedURL)
    } else {
      window.alert('input "/"')
      _loader.classList.add('d-none')
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

  function showResponse (response, url) {
    if (response?.status === 'success') {
      const getURLInfo = url.split('/')
      _controller.classList.remove('d-none')
      _controller.innerHTML = getURLInfo[0]
      const id = getURLInfo[1]

      if (id) {
        _id.classList.remove('d-none')
        _id.innerHTML = id
      } else {
        _id.classList.add('d-none')
      }

      _pre.innerHTML = JSON.stringify(response.data, null, 2)
    } else {
      _controller.classList.add('d-none')
      _id.classList.add('d-none')
      _pre.innerHTML = JSON.stringify(response, null, 2)
    }

    _loader.classList.add('d-none')
  }
}

export default setUp
