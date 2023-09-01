<template>
    <div>
        <p :class="$style.hello"> {{ HelloText }}</p>
    </div>
</template>

<script>
export default {
    name: 'newComp',
    props: ['HelloText'],
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

<style lang="css" module>
.hello {
    color: red;
}
</style>