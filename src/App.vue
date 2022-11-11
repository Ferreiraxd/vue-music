<template>
  <div id="app">
    <navbar />
    <router-view />
    <custom-footer />
  </div>
</template>

<script>
import CustomFooter from "./components/layout/CustomFooter.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    CustomFooter,
    Navbar,
  },
};
</script>
<style lang="scss">
@import "./scss/main.scss";
</style>
