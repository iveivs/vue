<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <img alt="Vue logo" src="./assets/ar_icon.svg"> -->
    <HeaderBlock/>
    <main>
      <router-view/>
    </main>
    <!-- <MainPage/> -->
    <FooterBlock/>
    
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
// import MainPage from './pages/MainPage.vue'


export default {
  name: 'App',
  components: {
    HeaderBlock,
    // MainPage,
    FooterBlock,
  }
}
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // text-align: center
  color: #2c3e50
  // margin-top: 60px
.container
  width: 1200px
  margin: 0 auto
.title
  font-size: 50px
  text-align: center
.subtitle
  font-size: 22px
  font-style: normal
  font-weight: 400
  text-align: center
*
  margin: 0
  padding: 0
  box-sizing: border-box
  list-style-type: none

</style>
