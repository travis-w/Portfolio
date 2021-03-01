<template>
  <div class="header">
    <div class="title">
      
    </div>
    <div class="nav">
      <DarkModeSwitch />
      <ul>
        <li
          v-for="link in navLinks"
        >
          <a
            :href="link.link"
            class="nav-link"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DarkModeSwitch from "./DarkModeSwitch";

export default {
  components: {
    DarkModeSwitch
  },
  props: {
    navLinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus">
.header
  overflow: hidden

.title
  display: inline-block
  
.nav
  display: inline-block
  float: right
  padding: 10px 0

ul
  list-style: none
  margin: 0 0 0 10px
  padding: 0
  display: inline-block
  line-height: 33px
  font-size: 16px
  
  li
    display: inline-block
    
    a.nav-link
      color: $txtColor
      text-decoration: none
      font-weight: 600
      
      &:hover
        text-decoration: underline
  
  li + li
    margin-left: 25px

body.dark-mode
  a.nav-link
    color: $darkTxtColor
</style>
