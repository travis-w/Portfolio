<template>
  <div class="theme-container">
    <Home v-if="$page.title === 'Home'" />
    <Content/>
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