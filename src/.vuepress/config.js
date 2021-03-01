const { description } = require('../../package')

module.exports = {
  title: 'Travis Weidenbenner',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    navigation: [
      {
        text: 'Projects',
        link: '/projects/',
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
    ]
  }
}
