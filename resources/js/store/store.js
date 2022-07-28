import axios from "axios";
import {createStore} from  "vuex";


export const store = createStore({
    state:{
        items:{},
        carts:[]
    },
    getters:{
        items: (state) => {
            return state.items
        },
        // carts:(state)=>{
        //     return state.carts
        // }
    },
    mutations:{
        set_items: (state, data) => {
            state.items = data
        },
        set_carts:(state, data) =>{
            state.carts = data
        }
    },
    actions:{
        get_items:({state, commit}) =>{
            axios.get(`http://127.0.0.1:8000/api/cart-item`).then((response)=>{
                commit('set_items', response.data.data)
            }).catch((errors)=>{
                console.log(errors);
            })
        }
    }
})
