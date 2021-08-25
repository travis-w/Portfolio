<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ excerpt }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: false,
    }
  }
}
</script>

