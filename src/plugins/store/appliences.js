export const appliences = {
    state: () => ({
        appliences: [],
        applience: {}
    }),
    mutations:{
        SETAPPLIENCES(state, payload){
            state.appliences = payload
        },
        SETAPPLIENCE(state, payload){
            state.applience = payload
        }
    },
    actions:{
        setAppliences(context, payload){
            context.commit('SETAPPLIENCES', payload)
        },
        setApplience(context, payload){
            context.commit('SETAPPLIENCE', payload)
        }
    },
    getters:{
        getAppliences(state){
            return state.appliences
        },
        getApplience(state){
            return state.applience
        },
    }
}