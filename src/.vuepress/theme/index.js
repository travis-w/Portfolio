module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: '_posts',
            // Path of the `entry page` (or `list page`)
            path: '/blog/',
            itemPermalink: '/blog/:year/:month/:day/:slug',
            pagination: {
              sorter: (prev, next) => {
                console.log(prev.frontmatter.date, next);
                const dayjs = require('dayjs');
                const prevTime = dayjs(prev.frontmatter.date);
                const nextTime = dayjs(next.frontmatter.date);
                return prevTime - nextTime > 0 ? -1 : 1;
              }
            }
          }
        ]
      }
    ]
  ]
}