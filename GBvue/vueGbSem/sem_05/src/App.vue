<template>
  <div id="app">
    <AuthenticationBlock/>
    <CartBlock/>
  </div>
</template>

<script>
import AuthenticationBlock from './components/AuthenticationBlock.vue'
import CartBlock from './components/CartBlock.vue'

export default {
  name: 'App',
  components: {
    AuthenticationBlock,
    CartBlock,
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
