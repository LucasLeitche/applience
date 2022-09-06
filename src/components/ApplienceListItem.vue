<template>
  <div :class="'list-item ' + (striped ? 'striped' : 'no-striped') ">
    <div class="container list-item-content " style="position: relative">
      <div style="width: 100%; max-width: 50px;">
        <div class="item img">
          <img 
            :src="applience.data.img" 
            v-if="applience.data.img != 'icon'" 
            :title="applience.data.desc" 
            :alt="applience.data.desc"
          >
          <font-awesome-icon 
            class="icon" 
            icon="fa-solid fa-camera" 
            title="Sem imagem"
            v-else 
          />
        </div>
      </div>  
      <div class="item name">
        <span title="applience.data.nome">{{applience.data.nome}}</span>
      </div>
      <div class="item desc">
        <span title="Descrição">{{applience.data.desc}}</span>
      </div>
      <div class="item volt">
        <span title="Voltagem">{{applience.data.volt}}</span>
      </div>
      <div class="item brand">
        <span title="Marca do produto">{{applience.data.marc}}</span>
      </div>
      <div class="item more-actions">
        <button class="more-actions-button" @click="handleShowDropDownItems">
          <span>
            Sobre o produto
          </span>
          <font-awesome-icon icon="fas fa-sort-down" />
        </button>
        <div class="dropdown"  v-if="showDropdownItems">
          <ul>
            <li>
              <small>Nome</small>
              {{applience.data.nome}}
            </li>
            <li>
              <small>Descrição</small>
              {{applience.data.desc}}
              </li>
            <li>
              <small>Marca</small>
              {{applience.data.marc}}
              </li>
            <li>
              <small>Voltagem</small>
              {{applience.data.volt}}
              </li>
            <li>Teste</li>
          </ul>
        </div>
      </div>
      <div class="item actions">
        <button @click="$emit('edit', applience.key)">
          <font-awesome-icon class="icon" icon="fas fa-pen" />
        </button>
        <button @click="$emit('delete', applience.key)">
          <font-awesome-icon class="icon" icon="fas fa-trash" />
        </button>
      </div>
    </div>
    
  </div>
</template>

<script>


export default {
    data(){
      return{
        showDropdownItems: false
      }
    },
    props: {
        applience: {
            type: Object
        },
        striped: {
            type: Boolean
        }
    },
    methods: {
      handleShowDropDownItems(){
        this.showDropdownItems = !this.showDropdownItems
      }
    },
    created() {
    },
}
</script>

<style scoped>
.list-item{
  border-left: 1px solid #dee4ed;  
  border-right: 1px solid #dee4ed; 
  min-height: 80px;
  padding: .9rem 3rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
}
.lista-item-content{
  display: flex;
  align-items: center;
  flex-wrap: wrap;

}

.striped{
  background: #f9fafe;
  box-shadow: #dee4ed;
}
.no-striped{
  background: #fff;
}
.container{
  display: flex;
  flex-direction: co;
  justify-content: space-between;
  width: 100%;
  padding: .5rem 0;
}
.item{
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  display: block;
}
.item span{
  overflow: hidden;
  text-overflow: ellipsis;
  height: 80px;
  color: var(--primary);
  font-weight: 600;

}
.img{
  width: 100%;
}
.img img{
  width: 100%;
}
.img .icon {
  font-size: 3rem;
  color: #f1f5fb;
  max-width: 50px;
  width: 100%;
}
.name{
  width: 20%;
  word-break: normal;
}
.desc{
  width: 20%;
}
.desc span{
  text-overflow: ellipsis;
}
.volt{
  width: 10%;
}
.brand{
  width: 10%;
}
.actions{
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}
.actions button{
  border: 1px solid transparent;
  background: #f1f5fb;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
button .icon{
  color: gray;
  font-size: 1rem;
}
.more-actions{
  display: none;
}
.dropdown{
  display: none;
}
@media only screen and (max-width: 1020px){
  .list-item{
    padding: .3rem 1rem;
  }
}
@media only screen and (max-width: 750px){
  .more-actions{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white; 
    color: var(--primary);
  }
  .more-actions-button{
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 
    gap: 5px;
  }
  .more-actions-button span{
    height: auto;
    margin-top: 5px;
  }
  .name{
    display: none;
  }
  .desc{
    display: none;
  }
  .volt{
    display: none;
  }
  .brand{
    display: none;
  }
  .actions{
    justify-content: end;
    
  }
  .actions button{
    height: 40px;
    width: 40px;
}
button .icon{
  color: gray;
  font-size: .8rem;
}
.dropdown{
  display: flex;
  max-width: 150px;
  justify-content: center;
  background: white;
  position: absolute;
  top: 80px;
  z-index: 1;
}
.dropdown ul li{
  padding: .5rem;
  display: flex;
  flex-direction: column;
}
.dropdown ul li small{
  color: var(--font);
}
}
@media only screen and (max-width: 350px){
  .list-item{
    min-height: 150px;
    align-items: center;
  }
  
  .img{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>