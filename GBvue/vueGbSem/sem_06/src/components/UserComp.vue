<template>
    <div class="box">
        
        <p>Name: {{ user.firstName }}</p>

        <p>LastName: {{ user.lastName }}</p>
        <button @click="showEmail(user)">Show Email</button>
        <p v-if="user.showMore">{{ user.email }}</p>
        <br>
    </div>
</template>

<script>
export default {
    name: 'UserComp',
    props: ['user'],
    data() {
        return {
            test: 'Test'
        };
    },


    methods: {
        showEmail(user) {
            this.$emit('showEmail', user)
        }
    },
};
</script>

<style lang="css" scoped>
.box {
    border: 1px solid red;
    margin-bottom: 30px;
    padding: 20px;
}
</style>