<template>
    <div>
        <h3>Корзина покупок</h3>
        <p>количество: {{ totalItems }}</p>
        <p>Стоимость: {{ totalPrice }}</p>
        <button @click="addRandomItem">Добавить товар</button>
        <div v-for="item in cartItems" :key="item.id">
            <h4>{{ item.name }}</h4>
            <p>кол-во: {{ item.quantity }}</p>
            <p>стоимость: {{ item.quantity *  item.price }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'CartItems',

    data() {
        return {
            
        };
    },

    computed: {
        ...mapGetters(['totalItems', 'totalPrice', 'cartItems'])
    },  

    methods: {
        ...mapActions(['addToCart']),
        addRandomItem() {
            const newItem = {
                id: Date.now(),
                name: 'Товар' + Date.now(),
                price: 123
            }
            this.addToCart(newItem)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>