<template>
    <div>
        <h2>Task 1</h2>
        <p>Создайте компонент "Список пользователей" (UserList), который будет отображать список пользователей из переданного массива. 
            Каждый пользователь должен быть представлен в виде отдельного компонента "Пользователь" (User),
            принимающего пропсы с данными о пользователе (например, имя, фамилия и электронная почта).</p>
        <UserComp 
        v-for="user in users"
        :key="user.id"
        :user="user"
        @showEmail="showEmail"
        />
        <hr>
    </div>
</template>

<script>
import UserComp from './UserComp.vue';
export default {
    name: 'UsersList',
    components: {
        UserComp,
    },
    data() {
    return {
        users: [
            { id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@example.com', showMore: false },
            { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@example.com', showMore: false },
            { id: 3, firstName: 'Анна', lastName: 'Сидорова', email: 'anna@example.com', showMore: false }
            ],
        };
    },

    methods: {
        showEmail(user) {
            user.showMore = !user.showMore
        }
    },
};
</script>

<style lang="scss" scoped>

</style>