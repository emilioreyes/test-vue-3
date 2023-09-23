<template >
    <div>
        <ProductCounter />
        <h1>Welcome to Home</h1>
        <Product />
    </div>
</template>
<script setup>
import Product from '../components/Product.vue';
import ProductCounter from '../components/ProductCounter.vue';
</script>
<style lang="scss" scoped>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>