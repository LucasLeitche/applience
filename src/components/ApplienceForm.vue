<template>
  <div class="shadow" >
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="title">Registre um eletrodoméstico</h1>
                <button @click="$emit('close')">
                    <font-awesome-icon class="times-icon" icon="fas fa-times" />
                </button>
            </div>
            <div class="modal-form">
                <form class="form" v-if="applience">
                    <div class="col-6">
                        <div class="container d-flex-column">
                            <label class="label">Nome</label>
                            <input
                                required
                                v-model="applience.nome"
                                class="input-form" 
                                type="text">
                        </div>
                        <div class="container d-flex-column">
                            <label class="label">Descrição</label>
                            <input 
                                required
                                class="input-form" 
                                type="text"
                                v-model="applience.desc"
                            >
                        </div>
                        <div class="container d-flex-column">
                            <label class="label">Marca</label>
                            <select 
                                required
                                name="" 
                                v-model="applience.marc" 
                                class="input-form select" 
                                id="">
                                <option value="Eletrol">Eletrolux</option>
                                <option value="Brastemp">Brastemp</option>
                                <option value="Fischer">Fischer</option>
                                <option value="Samsung">Samsung</option>
                                <option value="LG">LG</option>
                            </select>
                        </div>
                        <div class="container d-flex-row gap-8 align-items-center my-1">
                            <label class="label">Voltagem</label>
                            <input type="radio" v-model="applience.volt" value="220" class="input" id=""> <small style="font-weight:400">220vw</small>
                            <input type="radio" v-model="applience.volt" value="144" class="input" id=""> <small>144vw</small>
                        </div>
                    </div>
                    <div class="col-4 text-center d-flex-column align-items-center">
                        <h4>Selecione uma imagem</h4>
                        <div class="d-flex-row">
                            <a 
                                href="javascript:void(0)" 
                                class="container-img" 
                                @click="handleShowChoseImg()"
                                v-if="!applience.img || applience.img == 'icon'"
                            >
                                <font-awesome-icon class="icon" icon="fa-solid fa-camera" title="Selecionar" />
                            </a>
                            <a 
                                href="javascript:void(0)" 
                                class="container-img" 
                                @click="handleShowChoseImg()"
                                v-else
                            >
                                <img class="img-chosed" :src="applience.img" alt="">
                            </a>

                            <div class="options-image" v-if="showChoseImg">
                                <ul>
                                    <li 
                                        v-for="op in imageOptions"
                                        :key="op.id"
                                    >
                                        <img 
                                            :src="`${op.src}`" 
                                            :title="op.name" 
                                            alt="Foto de um fogão"
                                            v-if="op.id != 'noImg'"
                                            @click="handleImgSelected(op.src)"
                                        />
                                            <font-awesome-icon 
                                                class="icon" 
                                                icon="fa-solid fa-camera" 
                                                title="Sem imagem"
                                                @click="handleImgSelected(op.src)"
                                                v-else 
                                            />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
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
                    @click="submitInformation()"
                >
                    Salvar
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { GetApplience, PostApplience, PutApplience } from '../services/api/applience/appliceApiService.js';

import Fogao from '../assets/fogao.webp';
import Geladeira from '../assets/geladeira.webp';
import Fritadeira from '../assets/fritadeira.webp';
import LavaRoupa from '../assets/lavar_roupa.webp';
import Microondas from '../assets/microondas.webp';
import { store } from '../plugins/store';
import { ToastService } from '../services/api/toast/toastService.js';

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
        validateForm(){
            let {nome, desc, marc, volt} = {...this.applience};         
            if(this.applience){
                if((nome && desc && marc && volt)){
                    this.formIsValid =  true;
                } else{
                    ToastService('danger', 'Obrigatório preenchimento')
                    this.formIsValid = false;
                }
            } 
        },
        async submitInformation(){
            this.validateForm();

            const data = this.applience;
            const validated = this.formIsValid;

            if(validated){
                if(this.index){
                  await PutApplience(data, this.index);
                } else{
                   await PostApplience(data);
                } 
                this.$emit('close')
            }
            
            
        },
        handleImgSelected(url){
            this.applience.img = '' + url
            this.handleShowChoseImg();
        },
        handleShowChoseImg(){
            this.showChoseImg = !this.showChoseImg
        },
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
    computed:{
        
        imageOptions: function (){
            return[
                {
                    id: 'FG',
                    src: Fogao,
                    name: 'Fogao',
                },
                {
                    id: 'GL',
                    src: Geladeira,
                    name: 'Geladeira',
                },
                {
                    id: 'FR',
                    src: Fritadeira,
                    name: 'Fritadeira',
                },
                {
                    id: 'LR',
                    src: LavaRoupa,
                    name: 'LavaRoupa',
                },
                {
                    id: 'MC',
                    src: Microondas,
                    name: 'Microondas',
                },
                {
                    id: 'noImg',
                    src: 'icon'
                }
                
            ]
        }
    },
    created(){
        if(this.index){
            this.loadApplience();
        }
        
    }
}
</script>

<style scoped>
.col-6{
    width: 60%;
}
.col-4{
    width: 40%;
}
.btn{
    max-width: 150px;
}
.select{
    padding: 5px;
}
.input-form{
    width: 100%;
    height: 35px;
}
 .img{
    min-height: 100px;
}

.shadow{
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    background: rgba(0, 0, 0, 0.623);
    overflow: hidden;
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
    padding: 1rem;
    
}
.modal-form{
    padding: 1.3rem 0;

}
.form{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
}
.container-img{
    background: #f1f5fb;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.container-img .icon{
    color: var(--primary);
}
.options-image{
    position: absolute;
    background: #fff;
    border: 1px solid gray;
    overflow-y: scroll;
    height: 150px;

}
.options-image ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.options-image ul li img{
    padding: 1rem;
    max-width: 50px;
}
.options-image ul li:hover{
    background: lightgray;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.options-image::-webkit-scrollbar {
  width: 10px;               
}

.options-image::-webkit-scrollbar-track {
  background: lightgray;        
}

.options-image::-webkit-scrollbar-thumb {
  background-color: gray;   
  border-radius: 5px;       
  border: 1px solid lightgray;  
}
.icon{
    font-size: 40px;
    padding: 1rem;
}
.img-chosed{
    max-width: 100px;
}
@media only screen and (max-width: 750px) {
    .form{
        display: flex;
        flex-direction: column;
    }
    .col-6{
        width: 100%;
    }
    .col-4{
        width: 100%;
    }
}
</style>