<template >
    <div class="wrap__badge">
        <span class="badge">{{store.getCount}}</span>
        <span class="badge badge--active">{{store.getActive}}</span>
        <span class="badge badge--inactive">{{store.getInactive}}</span>
    </div>
</template>
<script setup>
import {productCounter} from '../store/ProductCounter'
const store= productCounter()
</script>
<style lang="scss" scoped>
    .wrap__badge{
        position: fixed;
        top: 1rem;
        right: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .badge{
        width: 30px;
        height: 30px;
        font-weight: bold;
        background-color: blueviolet;
        border-radius: 30px;
        &--active{
            background-color: green;
        }
        &--inactive{
            background-color: red;
        }
    }
</style>