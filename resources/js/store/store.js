import {Vue} from "vue";
import axios from "axios";
import Vuex from  "vuex";

Vue.use(Vuex);

export const store = new Vuex.store({
    state:{
        items:{}
    },
    getters:{
        items: (state) => {
            return state.items
        }
    },
    mutations:{
        set_items: (state, data) => {
            state.items = data
        }
    },
    actions:{
        get_items:(context) =>{
            axios.get(`http://127.0.0.1:8000/api/cart-item`).then((response)=>{
                context.commit('set_uset_items', response.data)
            }).catch((errors)=>{
                console.log(errors);
            })
        }
    }
})
