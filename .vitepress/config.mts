import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/chenbook/',
  title: "ChenBook",
  description: "Personal Knowledge Management System",
  head: [
    ['link', { rel: 'icon', href: '/icon.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: [
      { text: 'Music', link: '/music/' },
      { text: 'Coding', link: '/coding/' },
      { text: 'History', link: '/history/' },
      { text: 'Science', link: '/science/' }
    ],

    sidebar: {
      '/music/': [
        {
          text: 'Music',
          items: []
        }
      ],
      '/coding/': [
        {
          text: 'Coding',
          items: []
        }
      ],
      '/history/': [
        {
          text: 'History',
          items: []
        }
      ],
      '/science/': [
        {
          text: 'Science',
          items: []
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CDT/chenbook.github.io' }
    ]
  }
})
