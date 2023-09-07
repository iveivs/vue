<template>
    <div>
        <p @click="showInfo(index)">Название: {{ movie.title }}</p>
        <button @click="showInfo(index)">Подробнее</button>
    </div>
</template>

<script>
export default {
    name: 'MovieInfo',
    props: ['movie', 'index'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        showInfo(index) {
            this.$emit('showInfo', index);
        }
    },
};
</script>

<style lang="scss" scoped>

</style>