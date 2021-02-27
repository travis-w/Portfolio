<template>
  <div>
    <button @click="toggleMode">DarkMode</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let localPref = localStorage.getItem("DarkMode")

    if (localPref !== null) {
      localPref = localPref === "true"
    }

    if (localPref ?? browserPref) {
      document.body.classList.add("dark-mode");
    }
  },
  methods: {
    toggleMode() {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("DarkMode", "false");
      } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("DarkMode", "true");
      }
    }
  }
}
</script>