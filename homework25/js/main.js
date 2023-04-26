
import setUp from './swapi.js'

document.addEventListener('DOMContentLoaded', () => {
  setUp({
    form: 'js--swapi_form',
    elPre: document.querySelector('.js--swapi_pre'),
    elController: document.querySelector('.js--swapi_controller'),
    elId: document.querySelector('.js--swapi_id'),
    elLoader: document.querySelector('.js--swapi_load')
  })
})
