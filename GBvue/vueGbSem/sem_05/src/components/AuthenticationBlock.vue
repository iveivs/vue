<template>
    <div>
        <form v-if="!isAuthenticated" @submit.prevent="login">
            <label for="username">Имя пользователя:</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Войти</button>
        </form>
        <p v-else> Вы успншно авторизованны</p>
    </div>
</template>

<script>
export default {
    name: 'AuthenticationBlock',

    data() {
        return {
            isAuthenticated: false,
        };
    },

    methods: {
        login() {
            this.isAuthenticated = true
        }
    },
};
</script>

<style lang="scss" scoped>

</style>