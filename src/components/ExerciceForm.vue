<template lang="">
    <form>
        <input type="text" v-model="credential.name">
        <input type="text" v-model="credential.lastname">
    </form>
    
    <button @click="handlerShow()">show</button>
    <button @click="handlerAddCredential()">add credential</button>
    <h1>lista de credenciales</h1>
    <ul>
        <li v-for="(item, index) in credentials" :key="index">{{item.name}} {{item.lastname}}</li>
    </ul>
</template>
<script setup>
import { ref } from 'vue';
let credential=ref({
    name:'darwin',
    lastname:'reyes'
})
let credentials= ref([])
const handlerShow = ()=>{
    console.log(credential.value);
}
const handlerAddCredential = ()=>{
    credentials.value.push({
        name:credential.value.name,
        lastname:credential.value.lastname
    })
}
</script>
<style lang="">
    
</style>