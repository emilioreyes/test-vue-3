<template >
    <form class="wrap__form">
        <input class="wrap__form--input" type="text" v-model="credential.username" placeholder="user">
        <input class="wrap__form--input" type="password" v-model="credential.password" placeholder="pass">
    </form>
    <button @click="onLogin()" >Login</button>   
</template>
<script setup>
import { ref } from 'vue';
import { inject } from 'vue';
import { useRouter, useRoute, onBeforeRouteUpdate  } from 'vue-router'

    let credential= ref({
        username:'',
        password:''
    })
    const router = useRouter()
    const $httpMain = inject('$httpMain')
    const onLogin=()=>{
        $httpMain.post('auth/authenticate', credential.value)
        .then(function (response) {
            console.log(response);
            if (response.data.valid){
                localStorage.setItem('TOKEN', response.data.jwt );
                router.push({name:'Home'})
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

</script>
<style lang="scss">
    .wrap__form{
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        &--input{
            line-height: 2rem;
            margin-bottom: 1rem;
        }
    }
</style>