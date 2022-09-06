<script setup>
import './assets/styles/global.css';
import Header from './components/Header.vue';
import Toast from './components/Toast.vue';
import Loader from './components/Loader.vue';
import { store } from './plugins/store';
</script>

<template>
    <transition name="fade" >
        <Toast v-if="store.getters.getToast.show"/>
    </transition>
    <Loader v-if="store.getters.getLoading"/>

    <Header/>
    <RouterView/>
</template>

<style scoped>

</style>
