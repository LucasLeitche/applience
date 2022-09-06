<template>
  <div class="shadow" >
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="title">Deseja deletar esse registro?</h1>
                <button @click="$emit('close')">
                    <font-awesome-icon class="times-icon" icon="fas fa-times" />
                </button>
            </div>
            <div class="modal-form">
                <img class="img" :src="applience.img" alt="">
                <div class="d-flex-column">
                    <span>{{applience.nome}}</span>
                    <small>{{applience.marc}}</small>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-cancell"
                    @click="$emit('close')"
                >
                    Cancelar
                </button>
                <button 
                    class="btn btn-submit" 
                    type="submit"
                    @click="$emit('confirm')"
                >
                    Confirmar
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../plugins/store/index.js';
import { GetApplience } from '../services/api/applience/appliceApiService.js';

export default {
    data(){
        return{
            showChoseImg: false,
            applience:{
                    nome: null,
                    desc: null,
                    marc: null,
                    volt: null,
                    img: null,
            },
            formIsValid: false,
            arrErr:[]
        }
    },
    methods:{
        async loadApplience(){
            await GetApplience(this.index);
            this.applience = {...store.getters.getApplience.data}
        }
    },
    props:{
        index:{
            type: String
        }
    },
    created(){
        if(this.index){
            this.loadApplience();
        }
        
    },
    mounted(){
        if(this.index){
            GetApplience(this.index);
        }
    }
}
</script>

<style scoped>

.btn{
    max-width: 150px;
}
 .img{
    max-height: 100px;
}

.shadow{
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.623);
    overflow: hidden;
    height: 100%;
}
.modal{
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items:end;
    padding: 100px 0;

}
.modal-header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
}
.times-icon{
    font-size: 1.3rem;
}
.modal-footer{
    display: flex;
    justify-content: end;
    gap: .8rem;
    padding: .5rem 0;
    border-top: 1px solid lightgray;
}
.modal-content{
    background: #fff;
    width: 80%;
    max-width: 800px;
    border-radius: 5px;
    padding: 2rem;
    
}
.modal-form{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    color: var(--font);
    padding: 2rem 0;
    gap:10px;
}
.modal-form span{
    font-weight: 700;
    font-size: 1.3rem;
}
.modal-form small{
    color: var(--primary);
    font-size: .9rem;
    font-weight: 500;
}
</style>