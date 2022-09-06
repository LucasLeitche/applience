<template>
  <button class="new-register" @click="$emit('clicked')"> 
    <font-awesome-icon icon="fas fa-plus" />
    <span>
        Novo Registro
    </span>
  </button>
</template>

<script>
export default {

}
</script>

<style>
.new-register{
    background: var(--success);
    width: 180px;
    padding: .6rem .4rem;
    font-size: .9rem;
    font-weight: 500;
    border-radius: 5px;
    color: #fff;
}
@media only screen and (max-width: 750px) {
    .new-register span{
        display: none;
    }
    .new-register{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
}
</style>