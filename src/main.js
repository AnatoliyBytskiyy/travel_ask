import Vue from 'vue'
import App from './App.vue'
// Подключаем bootstrap
import './assets/scss/style.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin) // Optionally install the BootstrapVue icon components plugin 

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
