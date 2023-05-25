<template >
    <tr :class="[{'is-active':props.status}]">
        <td>{{props.name}}</td>
        <td>{{props.code}}</td>
        <td>{{props.type}}</td>
        <td><input type="checkbox" v-model="props.status"></td>
    </tr>

</template>
<script setup>
const props= defineProps({
    name:{
        required:true,
        type:String
    },
    code:String,
    status:{
        required:true,
        type:Boolean
    },
    type:{
        required:true,
        type:String
    }
})
</script>
<style lang="scss">
    .is-active{
        color: chocolate;
    }
    tr{
        border: 1px solid white;
    }
</style>