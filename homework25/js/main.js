
import setUp from './swapi.js'

document.addEventListener('DOMContentLoaded', () => {
  setUp({
    formClass: 'js--swapi_form',
    preClass: 'js--swapi_pre',
    controllerClass: 'js--swapi_controller',
    idClass: 'js--swapi_id',
    loaderClass: 'js--swapi_load'
  })
})
