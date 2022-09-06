import { createStore } from "vuex";
import { appliences } from "./appliences";

export const store = createStore({
    modules:{
        appliences
    },
    state:{
        loading: false,
        toast: {
            show: false,
            message: 'Erro inesperado aconteceu, favor checar',
            type: 'danger'
        }
    },
    mutations:{
        SETLOADING(state, payload){
            state.loading = payload;
        },
        SETTOAST(state, payload){
            state.toast = payload;
        }
    },
    actions:{
        setLoading({commit}, payload){
            commit('SETLOADING', payload);
        },
        setToast({commit}, payload){
            commit('SETTOAST', payload);
        }
    },
    getters:{
        getLoading(state){
            return state.loading;
        },
        getToast(state){
            return state.toast;
        }
    },
    
})