<template>
  <div class="theme-container">
    <Header
      :navLinks="navLinks"
    />
    <div class="content">
      <Home subtitle="Projects" />
      <div class="project-list">
        <div
          v-for="project in projects"
          :key="project.key"
          class="project"
        >
          <div class="project__title">
            # {{ project.title }}
          </div>
          <div class="project__links">
            <a
              v-for="link in project.frontmatter.links"
              :key="link.title"
              :href="link.link"
              target="_blank"
              rel="noopener"
            >{{ link.title }}</a>
          </div>
          <div 
            class="project__summary"
            v-html="project.summary"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Home from "../components/Home";

export default {
  components: {
    Header,
    Home
  },
  computed: {
    navLinks() {
      return this.$site.themeConfig.navigation
    },
    projects() {
      return this.$pagination.pages;
    }
  }
}
</script>

<style lang="stylus">
.project-list
  margin-top: 15px

.project
  & + &
    margin-top: 20px
  
  &__title
    font-family: Roboto
    font-size: 24px
    font-weight: bold
    
  &__links
    margin: 2px 0
    
    a + a::before
      display: inline-block
      content: "|";
      margin: 0 5px
      text-decoration: none
      color: $txtColor

body.dark-mode
  .project__links a + a::before
    color: $darkTxtColor
</style> 