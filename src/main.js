import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faJs, faVuejs  } from '@fortawesome/free-brands-svg-icons'
import VueSplide from '@splidejs/vue-splide';


//veevalidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


// ..Scroll Magic
AOS.init();

import './assets/css/styles.css'
import { BootstrapVue, IconsPlugin, BUser } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//splide
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

library.add(faUserSecret,faJs, faVuejs )

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('BUser', BUser)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueSplide)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
