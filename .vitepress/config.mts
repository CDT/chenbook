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
          items: [
            {
              text: 'AI Coding Essentials',
              link: '/coding/ai-coding-essentials'
            },
            {
              text: 'AGENTS.md',
              link: '/coding/agentsmd'
            },
            {
              text: 'OpenAI Related',
              link: '/coding/openai-related'
            },
            {
              text: 'Open Source Projects Deployment',
              link: '/coding/opensource-projects-deployment'
            },
            {
              text: 'Prompt Engineering',
              link: '/coding/prompt-engineering'
            }
          ]
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
            },
            {
              text: '心理学',
              link: '/miscellaneous/psychology'
            },
            {
              text: 'Book summaries',
              items: [
                {
                  text: 'Collection One',
                  link: '/miscellaneous/book-summaries/collection-one'
                }
              ]
            },
            {
              text: '李继刚 Prompts',
              link: '/miscellaneous/lijigang'
            },
            {
              text: 'English Vocabulary',
              link: '/miscellaneous/english-vocab'
            },
            {
              text: 'Money Making',
              items: [
                {
                  text: 'Introduction to Side Hustles',
                  link: '/miscellaneous/money-making/side-hustles'
                },
                {
                  text: 'Passive Income Ideas',
                  link: '/miscellaneous/money-making/passive-income'
                },
                {
                  text: 'Freelancing Platforms',
                  link: '/miscellaneous/money-making/freelancing-platforms'
                }
              ]
            },
            {
              text: 'Excerpts',
              items: [
                {
                  text: 'Zhihu',
                  link: '/miscellaneous/excerpts/zhihu'
                }
              ]
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
