import Vue from 'vue'
import App from './App.vue'

import LangFlag from 'vue-lang-code-flags';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as faStars } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStars)
library.add(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
