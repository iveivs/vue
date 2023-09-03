<template>
    <div class="product">
        <h2> Наименование товара: <span>{{ product.name }}</span></h2>
        <h3>Цена в рублях: <span>{{ product.price }}</span> </h3>
        <h3>Цена в долларах: <span>{{ formattedPrice(product.price) }}</span></h3>
        <h3 v-if="product.available"><span class="green">Available</span></h3>
        <h3 v-else><span>Out of stock</span></h3>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product'],
    data() {
        return {
            changedPrise: '$',
        };
    },
    computed: {
        
    },

    methods: {
        formattedPrice(price) {
            return this.changedPrise + (price / 100)
        }
    },
};
</script>

<style lang="css" scoped>
.product {
    border: 1px solid #222;
    margin: 20px;
    border-radius: 20px;
    width: 440px;
}
span {
    color: red
}
.green {
    color: green;
}
</style>