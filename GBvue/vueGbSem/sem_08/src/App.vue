<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/main">Main</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contacts">Контакты</router-link> |
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
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
