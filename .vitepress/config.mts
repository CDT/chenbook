import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ChenBook",
  description: "Personal Knowledge Management System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Coding', link: '/coding/' },
      { text: 'Music', link: '/music/' },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
