<template>
  <header id="header">
    <div class="container d-flex-row justify-content-between align-items-end h-100">
      <div class="logo">
        <font-awesome-icon class="logo-icon" icon="fa-brands fa-cloudversify" /> 
      </div>
      <div class="author">
        <span>Desenvolvido por <small><a target="_blank" href="https://www.linkedin.com/in/lucasleitche/">Lucas Leite</a></small></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.author span{
  color: #fff;
  font-size: 12px;
}
.author a{
  color: #baaaff
}
#header{
  background: var(--primary);
  height: 70px;
}
.logo{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.logo-icon{
  color: #fff;
  font-size: 3.5rem
}
</style>