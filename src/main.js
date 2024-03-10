import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/store'

import components from './components/UI/index.js';
const app = createApp(App);
components.forEach(component => {
	app.component(component.name, component);
})

app.use(router).use(store).mount('#app')
