<template>
    <div>
        <h2>Название</h2>
        <div>{{ product.name }}</div>
        <h2>Цена</h2>
        <div>{{ product.price }}</div>
    </div>
</template>

<script>
export default {
    name: 'catalogItem',
    props: ['product'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>