<template>
    <div>
        PaymentsDisplay !.
        <!-- {{ info }} -->
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

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>