<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <slot>
      No body provided
    </slot>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style lang="sass">
@import '../globals';

.container {
  //Project Header
  background-color: $panel-color;
  padding: 10px;
  margin: 10px 0px;
  box-shadow: 1px 1px 2px $shadow-color;
  font-size: 15px;

  h1 {
    font-family: 'Maven Pro', sans-serif;
    width: 100%;
    color: $header-color;
    background-color: $accent-color;
    margin: -10px -10px 10px -10px;
    padding: 5px 10px;
    font-size: 1.25em;
  }
}
</style>
