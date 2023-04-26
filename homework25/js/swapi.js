function setUp (params) {
  const { form, elPre, elController, elId, elLoader } = params
  const elForm = document.querySelector(`.${form}`)

  elForm.addEventListener('submit', onSubmit)

  async function onSubmit (event) {
    event.preventDefault()

    elLoader.classList.remove('d-none')

    const formURL = new FormData(elForm).get('url')
    const regEx = /\//
    const hasSlash = regEx.test(formURL)

    if (hasSlash) {
      const normalizeURL = formURL.trim()
      const response = await getSwapiData(elForm.action, normalizeURL)
      console.log('response', response)

      showResponse(response, normalizeURL)
    } else {
      window.alert('input "/"')
      elLoader.classList.add('d-none')
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
      elController.classList.remove('d-none')
      elController.innerHTML = getURLInfo[0]
      const id = getURLInfo[1]
      if (id) {
        elId.classList.remove('d-none')
        elId.innerHTML = id
      } else {
        elId.classList.add('d-none')
      }
      elPre.innerHTML = JSON.stringify(response.data, null, 2)
    } else {
      elController.classList.add('d-none')
      elId.classList.add('d-none')
      elPre.innerHTML = JSON.stringify(response, null, 2)
    }

    elLoader.classList.add('d-none')
  }
}

export default setUp
