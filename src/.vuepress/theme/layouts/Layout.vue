<template>
  <div class="theme-container">
    <Home />
    <Content/>
    {{ this.$page }}
    <hr />
    {{ this.$site }}
  </div>
</template>

<script>
import Home from "../components/Home";

export default {
  components: {
    Home
  }
}
</script>