import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos';
AOS.init();

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './imports.css';
import './style.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleDown, faEnvelope, faMobile, faEye, faCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faAngleDoubleDown, faEnvelope, faFacebook, faLinkedin, faMobile, faEye, faCode);

new Vue({
  el: '#app',
  render: h => h(App)
})
