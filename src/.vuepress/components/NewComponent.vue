<template>
  <p class="demo">
    {{ msg }}
    {{ testing }}
  </p>
</template>

<script>
  export default {
    props: {
      testing: String
    },
    data () {
      return {
        msg: 'Hello this is <NewComponent>'
      }
    }
  }
</script>
