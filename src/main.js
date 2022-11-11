import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AudioVisual from 'vue-audio-visual'
import eventBus from '@/plugins/event-bus';
import VueRouter from 'vue-router';
import routes from '@/routes';
import filter from '@/filters/ms-to-mm';
import blur from '@/directives/blur';
import store from '@/store.js';
import i18n from '@/i18n';


Vue.use(AudioVisual)
Vue.use(VueAxios, axios)
Vue.use(eventBus);
Vue.use(VueRouter);
Vue.use(filter);
Vue.use(blur);

const router = new VueRouter({ routes,
  mode: 'history'
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
