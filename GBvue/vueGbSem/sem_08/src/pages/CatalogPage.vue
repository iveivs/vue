<template>
    <div>
        <h3>Catalog</h3>
        <div v-for="product in currentProductList" :key="product.id">
        <h5>{{ product.name }}</h5>
        <p>{{ product.price }}</p>
        </div>
        <router-link 
            v-for="page in 3" 
            :to="`/catalog/${page}`" 
            :key="page" 
            >
                {{ page  }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CatalogPage',
    watch: {
        $route(to, from) {
            // const page = this.$route.params.page // ещё один вариант
            const { page }  = this.$route.params
            // if(page) this.currentPage = page // необязательная проверка
            this.currentPage = +page
            console.log(to, from);
        }
    },

    data() {
        return {
            products: [
                {id: 1, name: 'Товар 1', price: 13},
                {id: 2, name: 'Товар 2', price: 313},
                {id: 3, name: 'Товар 3', price: 1},
                {id: 4, name: 'Товар 4', price: 8},
                {id: 5, name: 'Товар 5', price: 8},
                {id: 6, name: 'Товар 6', price: 6},
                {id: 7, name: 'Товар 7', price: 4},
                {id: 8, name: 'Товар 8', price: 3},
                {id: 9, name: 'Товар 9', price: 3},
                {id: 10, name: 'Товар 10', price: 5},
                {id: 11, name: 'Товар 11', price: 4},
                {id: 12, name: 'Товар 12', price: 6},
                {id: 13, name: 'Товар 13', price: 9},
                {id: 14, name: 'Товар 14', price: 10},
                {id: 15, name: 'Товар 15', price: 12},
            ],
            currentPage: 1,
            itemsPerPage: 5,
        };
    },
    computed: {
        currentProductList() {
            const {currentPage , itemsPerPage} = this
            const startIndex = (currentPage - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            return this.products.slice(startIndex, endIndex)
        }
    },

    // mounted() {
    //     console.log(this.$route);
    // },

    methods: {
        
    },
};
</script>

<style scoped>

</style>