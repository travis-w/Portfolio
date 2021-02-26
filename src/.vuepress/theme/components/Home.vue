<template>
  <div>
    <h1 class="page-title">
      Travis<br />
      Weidenbenner
    </h1>
    <div class="social-links">
      <a
        v-for="link in this.$page.frontmatter.social"
        :title="link.title"
        :href="link.link"
        target="_blank"
      >
        <svg
          role="img"
          class="social-icon"
          :style="{ height: link.height }"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="link.icon" />
        </svg>
      </a>
    </div>
  </div>
</template>