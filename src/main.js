import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './mock/index.js'
import store from './store'


// import VideoCard from './components/Monitor/VideoCard.vue';
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.component('VideoCard', VideoCard);
new Vue({
  store,
  render: h => h(App),
  
}).$mount('#app')
