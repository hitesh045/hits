<template>
  <div id="app">
    <!-- <header-Section /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/service">Service</router-link>|
      <router-link to="/props">Props</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
// import headerSection from "@/components/header-section.vue";
// import headerSection from "@/components/scroller-header.vue";
// import headerSection from "@/components/scroll-header.vue";
export default {
  components: {
    // headerSection
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
