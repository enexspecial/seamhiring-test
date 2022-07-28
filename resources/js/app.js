import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App.vue'
import {store} from "./store/store";



new Vue({
    store,
    render:(h)=>h(App)
}).$mount("#app")

// createApp(App).mount("#app")
