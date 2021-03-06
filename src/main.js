import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos';
AOS.init();

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './imports.css';
import './style.scss';
import $ from 'jquery'
window.$ = $;
import vueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(vueSmoothScroll)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleDown, faEnvelope, faMobile, faEye, faCode, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faAngleDoubleDown, faEnvelope, faFacebook, faLinkedin, faMobile, faEye, faCode, faGithub, faBars);

$(document).ready(function(e){
  var scrollTop = window.scrollY;
  if(scrollTop>=150){
    $("#nav-bar").addClass('scrolled');
  }else{
    $("#nav-bar").removeClass('scrolled');
  }
  $("#responsive-btn").click(function(){
    $("#nav-bar ul").toggleClass('d-none d-md-none');
  });
  $("#nav-bar a").click(function(){
    $("#nav-bar ul").toggleClass('d-none d-md-none');
  })
});

$(window).scroll(function(){
  var scrollTop = window.scrollY;
  if(scrollTop>=150){
    $("#nav-bar").addClass('scrolled');
  }else{
    $("#nav-bar").removeClass('scrolled');
  }
});




new Vue({
  el: '#app',
  render: h => h(App)
})
