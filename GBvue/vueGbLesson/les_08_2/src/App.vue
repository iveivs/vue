<template>
  <div id="app">
    <h2>8_2ver</h2>
    <header>
      <!-- <nav @click="ClickMenu">
        <a href="#dashboard"  class="menu__link">DashBoard</a>
        <a href="#about" class="menu__link">About</a>
        <a href="#notfound" class="menu__link">NotFound</a>
      </nav> -->
      <nav>
        <router-link to="/dashboard">DashBoard</router-link>
        <router-link to="/about">About Page</router-link>
      </nav>
    </header>
    <router-view/>
    <!-- <DashBoard v-if="page === 'dashboard'"/>
    <AboutContent  v-if="page === 'about'"/>
    <NotFound  v-if="page === 'notfound'"/> -->
  </div>
</template>

<script>
// import AboutContent from './pages/AboutContent.vue'
// import DashBoard from './pages/DashBoard.vue'
// import NotFound from './pages/NotFound.vue'

export default {
  name: 'App',
  components: {
    // AboutContent,
    // DashBoard,
    // NotFound
  },
  data() {
    return {
      // page: 'dashboard',
    };
  },
  methods: {
    // setPage() {
    //   this.page = window.location.hash.slice(1)
    // },
    // ClickMenu() {
    //   this.setPage()
    //   window.addEventListener('hashchange', function () {
    //     this.setPage();
    //   })
    // }
  },
  mounted() {
    // const links = document.querySelectorAll('.menu__link');

    // links.forEach(element => {
    //   element.addEventListener('click', function (e){
    //     e.preventDefault();
    //     history.pushState({}, '' , element.href)
    //   })
    // });
  },
  created() {
    this.$router.push({name: 'Dashboard'})
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

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
