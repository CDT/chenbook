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
      { text: 'Science', link: '/science/' }
    ],

    sidebar: {
      '/music/': [
        {
          text: 'Overview',
          link: '/music/'
        },
        {
          text: '🎹 Piano Improvisation Learning Roadmap',
          items: [
            { text: 'Foundations (Alphabet & Pronunciation)', link: '/music/foundations' },
            { text: 'Musical Vocabulary (Words)', link: '/music/vocabulary' },
            { text: 'Grammar & Syntax', link: '/music/grammar-syntax' },
            { text: 'Listening & Repetition (Immersion)', link: '/music/listening-immersion' },
            { text: 'Fluency (Speaking & Improvising)', link: '/music/fluency' },
            { text: 'Expanding Expression (Advanced Conversation)', link: '/music/expanding-expression' },
            { text: 'Performance & Integration', link: '/music/performance-integration' }
          ]
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
