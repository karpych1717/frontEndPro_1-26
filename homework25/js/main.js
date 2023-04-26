
import setUp from './swapi.js'

document.addEventListener('DOMContentLoaded', () => {
  setUp({
    form: 'js--swapi_form',
    pre: 'js--swapi_pre',
    controller: 'js--swapi_controller',
    id: 'js--swapi_id',
    loader: 'js--swapi_load'
  })
})
