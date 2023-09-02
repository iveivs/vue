<template>
    <div>
        <div v-for="(item, index) in cartItems" :key="index">
            <p>{{ item.title }}</p>
            <p>Price: {{ item.price }}</p>
            <input type="number" v-model.number="item.quantity">
            <p>Sub total: {{ item.price * item.quantity }}</p>
            <div>Total: {{ totalPrice }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartBlock',

    data() {
        return {
            cartItems: [
                {id: 1, title: 'product 1', quantity: 2, price: 50},
                {id: 2, title: 'product 2', quantity: 5, price: 100}
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    }
};
</script>

<style lang="scss" scoped>

</style>