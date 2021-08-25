<template>
  <div class="theme-container">
    <Header :navLinks="navLinks" />
    <div class="content">
      <Home v-if="$page.title === 'Home'" />
      <Content/>
    </div>
  </div>
</template>

<script>
import Home from "../components/Home";
import Header from "../components/Header";

export default {
  components: {
    Home,
    Header
  },
  computed: {
    navLinks() {
      return this.$site.themeConfig.navigation
    }
  },
  created() {
    console.log(this.$site);
    console.log(this.$page);
  }
}
</script>