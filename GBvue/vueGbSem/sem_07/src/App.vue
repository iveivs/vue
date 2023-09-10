<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CounterComp/>
    <CounterComp2/>
    <CartItems/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CounterComp from './components/CounterComp.vue';
import CounterComp2 from './components/CounterComp2.vue';
import CartItems from './components/CartItems.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    CounterComp,
    CounterComp2,
    CartItems
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
