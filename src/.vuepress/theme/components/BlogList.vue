<template>
  <div>
    <BlogListItem
      v-for="blog in blogs"
      :key="blog.key"
      :title="blog.title"
      :excerpt="blog.excerpt"
    />
  </div>
</template>

<script>
import BlogListItem from "./BlogListItem";

export default {
  components: {
    BlogListItem
  },
  computed: {
    blogs() {
      return this.$pagination.pages;
    }
  }
}
</script>