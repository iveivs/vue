<template>
    <div>
        <ProductItem
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        />
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
    name: 'ProductDetails',
    components: {
        ProductItem,
    },
    data() {
        return {
            products: [
                {id: 1, name: 'product 1', price: 100, available: true},
                {id: 2, name: 'product 2', price: 250, available: false},
                {id: 3, name: 'product 3', price: 300, available: true},
            ]
        };
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>

</style>