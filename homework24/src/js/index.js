/* globals setUp */
import '../scss/globalStyles.scss'
import '../scss/localStyles.scss'

import setUp from './app.js'

window.onload = () => setUp(document.querySelector('.js--app-wrapper'))
