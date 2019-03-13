import Vue from 'vue'
import App from './App.vue'

import login from './../packages/index'

Vue.use(login);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
