<template>
    <div>
        PaymentsDisplay !.
        <!-- {{ info }} -->
        <p>Сумма всех платежей {{ getFV }}</p>
        <div v-for="item in items" :key="item.id">
            {{ item }}
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    // props: ['items', 'info'],
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },

    data() {
        return {
            
        };
    },

    methods: {
        
    },
    computed: {
        getFV() {
            return this.$store.getters.getFullPayment
        }
    }
};
</script>

<style lang="scss" scoped>

</style>