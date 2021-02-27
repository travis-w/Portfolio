<template>
  <div class="theme-container">
    <DarkModeSwitch />
    <Home v-if="$page.title === 'Home'" />
    <Content/>
  </div>
</template>

<script>
import Home from "../components/Home";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default {
  components: {
    Home,
    DarkModeSwitch
  }
}
</script>