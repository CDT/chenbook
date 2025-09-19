import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/chenbook/',
  title: "ChenBook",
  description: "Personal Knowledge Management System",
  head: [
    ['link', { rel: 'icon', href: '/chenbook/icon.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: [
      { text: 'Music', link: '/music/' },
      { text: 'Coding', link: '/coding/' },
      { text: 'History', link: '/history/' },
      { text: 'Science', link: '/science/' },
      { text: 'Miscellaneous', link: '/miscellaneous/' }
    ],

    sidebar: {
      '/music/': [
        {
          text: 'Overview',
          link: '/music/'
        },
        {
          text: 'Compare Music and Language',
          link: '/music/compare-music-and-language'
        },
        {
          text: 'Play by Ear',
          link: '/music/play-by-ear'
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
      ],
      '/miscellaneous/': [
        {
          text: 'Miscellaneous',
          items: [
            {
              text: '正念',
              link: '/miscellaneous/mindfulness'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CDT/chenbook.github.io' }
    ]
  }
})
