<template>
    <div>
        <h3 >{{ book.title }}</h3>
        <button @click="toggleDescription">Подробнее</button>
        <div v-if="showDescription">
            <p>Автор: {{ book.author }}</p>
            <p>Год издания: {{ book.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookItem',
    props: ["book"],
    data() {
        return {
            showDescription: false
        };
    },

    methods: {
        toggleDescription() {
            this.showDescription = !this.showDescription
        }
    },
};
</script>

<style lang="scss" scoped>

</style>