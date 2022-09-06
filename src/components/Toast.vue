<template>
    <div :class="'toast ' + color" @click="handleClose">
        <div>
            <font-awesome-icon  class="icon"  :icon="'fas ' + icon " />
        </div>
        <div>
            <span>{{toast.message}} </span>
        </div>

    </div>
    
</template>

<script>
import { store } from '../plugins/store'
export default {
    data(){
        return{
            toast: {
                show: false,
                type: '',
                message: ''
            }
        }
    },
    computed:{
        icon(){
            if(this.toast.type == 'success'){
                return ' fa-check-circle'
            }
            if(this.toast.type == 'warning'){
                return ' fa-exclamation-circle'
            }
            if(this.toast.type == 'danger'){
                return 'fa-times-circle'
            }
            else{
                return 'fa-info-circle'
            }
        },
        color(){
            if(this.toast.type == 'success'){
                return 'toast-success'
            }
            if(this.toast.type == 'warning'){
                return 'toast-warning'
            }
            if(this.toast.type == 'danger'){
                return 'toast-danger'
            }
            else{
                return 'toast-info'
            }
        }
    },
    methods:{
        handleClose(){
            store.dispatch('setToast', false);
        }
    },
    mounted(){
        if(store.getters.getToast){
            this.toast = store.getters.getToast;
        }
    }
    
}
</script>

<style>
.toast{
    position: absolute;
    top: 5%;
    right: 2%;
    background: white;
    border-radius: 5px;
    height: 80px;
    width: 90%;
    overflow: hidden ;
    max-width: 350px;
    padding: 1rem;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1;
}
.icon{
    font-size: 30px;
}
.toast-success{
    border-left: 7px solid var(--success) !important;

}
.toast-success .icon {
    color: var(--success);
}
.toast-warning{
    border-left: 7px solid var(--warning) !important;

}
.toast-warning .icon {
    color: var(--warning);
}
.toast-info{
    border-left: 7px solid var(--info) !important;

}
.toast-info .icon {
    color: var(--info);
}

.toast-danger{
    border-left: 7px solid var(--danger) !important;

}
.toast-danger .icon {
    color: var(--danger);
}


</style>