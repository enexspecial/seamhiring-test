import "bootstrap/dist/css/bootstrap.min.css"
import {createApp} from "vue";
import App from './components/App.vue'
import {store} from "./store/store";


createApp(App)
    .use(store)
    .mount("#app")
