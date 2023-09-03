<template>
    <div>
        <button @click="$emit('mySupaEvemt', {title: 'Test'})">click me</button>
    </div>
</template>

<script>
export default {
    name: 'TestBlock',

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