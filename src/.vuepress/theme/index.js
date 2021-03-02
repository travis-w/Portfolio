module.exports = (themeConfig, ctx) => {
  return {
    plugins: [
      [
        "@vuepress/blog",
        {
          directories: [
            {
              id: "post",
              dirname: "_posts",
              path: "/blog/",
              itemPermalink: "/blog/:year/:month/:day/:slug",
            },
            {
              id: "projects",
              dirname: "_projects",
              path: "/projects/",
              itemPermalink: "/projects/:slug",
              layout: "ProjectList",
              pagination: {
                sorter: (prev, next) => {
                  // Default order to bottom if none provided
                  const prevOrder = prev.frontmatter.order ?? 9999;
                  const nextOrder = next.frontmatter.order ?? 9999;

                  return prevOrder < nextOrder ? -1 : 1;
                }
              }
            }
          ]
        }
      ]
    ],
    extendPageData(page) {
      const { _strippedContent, _context } = page;

      // Generate own summaries between <!-- summary --> <!-- /summary --> tags
      const hasSummary = _strippedContent && _strippedContent.indexOf("<!-- /summary -->") !== -1;

      if (hasSummary) {
        const summary = _strippedContent.split('<!-- summary -->').pop().split('<!-- /summary -->')[0];

        page.summary = _context.markdown.renderInline(summary);
      }
    }
  }
}