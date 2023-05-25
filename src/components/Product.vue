<template >
    <div>
        <span>Add products</span>
        <form class="wrap__form">
            <input class="wrap__form--control" type="text" v-model="product.name" placeholder="Name">
            <input class="wrap__form--control" type="text" v-model="product.code" placeholder="Code">
            <select class="wrap__form--control" v-model="product.type">
                <option disabled value="">Select one element</option>
                <option v-for="(item, index) in options" :key="item.value" v-bind:value="item.value" >{{item.value}}</option>
            </select>
            <div>
                <input class="wrap__form--control" type="checkbox" v-model="product.status">Status
            </div>
        </form>
        <button @click="onAddProduct()">Add Product</button>
    </div>
    <h1>Product List</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Type</th>
            <th>isActive</th>
        </tr>
            <List :name="item.name" :code="item.code" :status="item.status" :type="item.type" v-for="(item, index) in products" :key="item.code"/>
    </table>
</template>
<script setup>
import { ref } from 'vue';
import List from './ProductList.vue'
import {productCounter} from '../store/ProductCounter'
const store= productCounter()
let product= ref({
    name:'',
    code:'',
    status: false,
    type:''
})
let options = [
  { text: 'Uno', value: 'A' },
  { text: 'Dos', value: 'B' },
  { text: 'Tres', value: 'C' }
]
let products=ref([]);
const onAddProduct=()=>{
    products.value.push({
        name:product.value.name,
        code:product.value.code,
        status:product.value.status,
        type:product.value.type,
    });
    store.update(products.value)
}
</script>
<style lang="scss" scoped>
    span{
        text-transform: uppercase;
    }
    .wrap__form{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        &--control{
            line-height: 1rem;
            margin: 0.5rem;
        }
    }
    table {
  border-collapse: collapse;
}


</style>