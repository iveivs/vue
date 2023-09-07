<template>
    <div>
        <h3>Задача 4</h3>
        <div v-if="selectedMovie">
            <h3> {{ selectedMovie.title }}</h3>
            <p> {{ selectedMovie.director }}</p>
        </div>
        <MovieInfo
        v-for="(movie, index) in movies"
        :key="movie.id"
        :movie="movie"
        :index="index"
        @showInfo="showInfo"
        />
    </div>
</template>

<script>
import MovieInfo from './MovieInfo.vue';
export default {
    components: {
        MovieInfo,
    },
    name: 'MovieList',

    data() {
        return {
            movies: [
                { id: 1, title: 'Фильм 1', director: 'Режиссер 1', year: 2020, showDetails: false },
                { id: 2, title: 'Фильм 2', director: 'Режиссер 2', year: 2019, showDetails: false },
                { id: 3, title: 'Фильм 3', director: 'Режиссер 3', year: 2021, showDetails: false }
            ],
            currentIndex: null,
        };
    },

    methods: {
        showInfo(index) {
            this.currentIndex = index
        }
    },
    computed: {
        selectedMovie() {
            const { currentIndex } = this

            if( typeof currentIndex === 'number') {
                return this.movies[currentIndex]
            }
            return currentIndex
        }
    }
};
</script>

<style lang="scss" scoped>

</style>