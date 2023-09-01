<template>
    <div>
        <button @click="sortByPrice(true)">Сортировать по увеличению цены</button>
        <button @click="sortByPrice(false)">Сортировать по уменьшению цены</button>
        <catalogItem v-for="(product, index) in products" :product="product" :key="index"/>
    </div>
</template>

<script>
import catalogItem from '@/components/catalogItem.vue';
export default {
    name: 'catalogComp',
    components: {
        catalogItem,
    },
    data() {
        return {
            products: [
                {id:1, name: 'Tovar1', image: 'product1.jpg', price: 100},
                {id:2, name: 'Tovar2', image: 'product2.jpg', price: 50},
                {id:3, name: 'Tovar3', image: 'product3.jpg', price: 200},
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        sortByPrice(ascending) {
            if(ascending) {
                this.products.sort((a,b) => a.price - b.price)
            } else {
                this.products.sort((a,b) => b.price - a.price)
            }
        }

    },
};
</script>

<style lang="scss" scoped>

</style>