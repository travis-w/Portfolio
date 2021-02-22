<template>
  <div>{{ pages }}</div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$pagination.pages;
    }
  }
}
</script>