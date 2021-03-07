<template>
  <div>
    <h1 class="page-title">
      Travis<br />
      Weidenbenner
      <span class="sub-title" v-if="subtitle">| {{ subtitle }}</span>
    </h1>
    <div class="social-links">
      <a
        v-for="link in $site.themeConfig.socialIcons"
        :title="link.title"
        :href="link.link"
        target="_blank"
        rel="noopener"
      >
        <svg
          role="img"
          class="social-icon"
          :style="{ height: link.height }"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @mouseenter.stop="mouseEnter($event, link.hoverColor)"
          @mouseleave.stop="mouseLeave"
        >
          <path
            :d="link.icon"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: String
  },
  methods: {
    mouseEnter(e, hoverColor) {
      e.target.style.fill = `#${hoverColor}`;
    },
    mouseLeave(e) {
      e.target.style.fill = "";
    }
  }
}
</script>