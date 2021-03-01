<template>
  <button @click="toggleMode" class="darkModeBtn">
    <Sun v-if="darkMode" />
    <Moon v-else />
  </button>
</template>

<script>
import Sun from "../components/Sun";
import Moon from "../components/Moon";

export default {
  data() {
    return {
      darkMode: false,
    }
  },
  components: {
    Sun,
    Moon,
  },
  mounted() {
    const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let localPref = localStorage.getItem("DarkMode")

    if (localPref !== null) {
      localPref = localPref === "true"
    }

    if (localPref ?? browserPref) {
      document.body.classList.add("dark-mode");
      this.darkMode = true;
    }
  },
  methods: {
    toggleMode() {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("DarkMode", "false");
        this.darkMode = false;
      } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("DarkMode", "true");
        this.darkMode = true;
      }
    }
  }
}
</script>