<template>
    <div>
        <BookItem 
        v-for="book in books" 
        :key="book.id" 
        :book="book"
        />
    </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
export default {
    name: 'BookList',
    components: {
        BookItem,
    },
    data() {
        return {
            books: [
                { id: 1, title: 'Книга 1', author: 'Автор 1', year: 2020,  },
                { id: 2, title: 'Книга 2', author: 'Автор 2', year: 2019, },
                { id: 3, title: 'Книга 3', author: 'Автор 3', year: 2021, }
            ]
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>