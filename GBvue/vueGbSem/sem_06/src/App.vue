<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <UsersList/>
    <MovieList/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UsersList from './components/UsersList.vue'
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    UsersList,
    MovieList,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
