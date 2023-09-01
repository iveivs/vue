<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <newComp hello-text="Hello Evereone"/>
    <picGal/>
    <catalogComp/>
    <!-- <catalogItem/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import newComp from './components/newComp.vue';
import picGal from './components/picGal.vue';
import catalogComp from './components/catalogComp.vue';
// import catalogItem from './components/catalogItem.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    newComp,
    picGal,
    catalogComp,
    // catalogItem,
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
