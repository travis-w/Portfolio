<template>
  <div id="container">
    <Container title="Project">TEStestestets</Container>
  </div>
</template>

<script>
import Container from './components/Container.vue'

export default {
  components: { Container },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style lang="sass">
//Import Google Font
@import url(https://fonts.googleapis.com/css?family=Maven+Pro:400,700,500);
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

@import 'globals';

html, body {
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100%;

  background-color: $primary-color;

  font-family: 'Roboto', sans-serif;
}

//Container
#container {
  display: table;
  height: 100%;

  width: 90%;
  max-width: 600px !important;

  margin-left: auto;
  margin-right: auto;
}
</style>
