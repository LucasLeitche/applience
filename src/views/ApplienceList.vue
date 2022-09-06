<template>
  <section id="list">
    <div class="container-button">
      <ButtonNewRegister @clicked="handleShowModal"/>
    </div>
    <ApplienceListItem 
      v-for="(applience , key) in appliences" 
      :key="key"
      :applience="{data: applience.data, key:key}"
      @edit="handleEdit($event)"
      @delete="handleDelete($event)"
    />
    <ApplienceForm v-if="showModalForm" @close="handleCloseModal "  :index="key"  />
    <ConfirmDeletion v-if="showModalConfirmDeletion" @close="handleCloseModalConfirmDeletion" @confirm="handleConfirm" :index="key" />
  </section>
</template>

<script>
import ApplienceListItem from '../components/ApplienceListItem.vue';
import ApplienceForm from '../components/ApplienceForm.vue';
import ButtonNewRegister from '../components/ButtonNewRegister.vue';
import ConfirmDeletion from '../components/ConfirmDeletion.vue'

import { store } from '../plugins/store';
import { DeleteApplience, GetListAppliences } from '../services/api/applience/appliceApiService';

export default {
  data(){
    return{
      showModalForm: false,
      showModalConfirmDeletion: false,
      key: null
    }
  },
  components:{
    ApplienceListItem,
    ApplienceForm,
    ButtonNewRegister,
    ConfirmDeletion,
    
  },
  computed:{
    appliences: function () {
      return store.getters.getAppliences
    }
  },
  methods:{
    async handleConfirm(){
      await DeleteApplience(this.key);
      this.handleCloseModalConfirmDeletion();
    },
    handleShowModalConfirmDeletion(){
      this.showModalConfirmDeletion = true;
    },
    async handleCloseModalConfirmDeletion(){
      this.showModalConfirmDeletion = false;
      await GetListAppliences();
      this.key = null;
    },
    async handleCloseModal(){
      this.showModalForm = false;
      await GetListAppliences();
      this.key = null;
    },
    handleShowModal(){
      this.showModalForm = true;
    },
    handleDelete(value){
      this.key = value;
      this.handleShowModalConfirmDeletion();
    },
    handleEdit(value){
      this.key = value;
      this.handleShowModal();
    },
  },
  mounted(){
    GetListAppliences();
  }
}
</script>

<style>
#list{
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
}
.container-button{
  width: 100%;
  display: flex;
  justify-content: end;
  margin: 20px 0;
}
@media only screen and (max-width: 1020px){
  #list{
      width: 90%;
      margin: 0 auto;
    }
}
@media only screen and (max-width: 750px) {
    #list{
      width: 90%;
      margin: 0 auto;
    }
}
</style>