<template>
    <div>
        <p>{{ counter }}</p>
        <button @click="increase">+</button>
        <button @click="decreace">-</button>
    </div>
</template>

<script>
export default {
    name: 'CounterComp',
    computed: {
        counter() {
            return this.$store.state.count
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        increase() {
            this.$store.commit('increment')
        },
        decreace() {
            this.$store.commit('decrement')
        },
    },
};
</script>

<style lang="scss" scoped>

</style>