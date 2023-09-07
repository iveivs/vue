<template>
    <div>
        <p>{{ count }}</p>
        <!-- <button @click="increase">+</button>
        <button @click="decreace">-</button> -->
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
import { mapState, mapMutations} from 'vuex';
export default {
    name: 'CounterComp2',
    computed: {
        // counter() {
        //     return this.$store.state.count
        // }
        ...mapState(['count']),
    },
    data() {
        return {
            
        };
    },
    methods: {
        ...mapMutations(['increment', 'decrement'])
        // increase() {
        //     this.$store.commit('increment')
        // },
        // decreace() {
        //     this.$store.commit('decrement')
        // },
    },
};
</script>

<style lang="scss" scoped>

</style>