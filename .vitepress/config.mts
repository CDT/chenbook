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
      { text: 'Literature', link: '/literature/' },
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
        },
        {
          text: 'Tabs',
          items: [
            { text: 'Overview', link: '/music/tabs/' },
            { text: 'Always With Me (Demo)', link: '/music/tabs/always-with-me' }
          ]
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
            },
            {
              text: 'Platforms',
              link: '/coding/platforms'
            },
            {
              text: 'Testing',
              link: '/coding/testing'
            }
          ]
        }
      ],
      '/history/': [
        {
          text: 'History',
          items: [
            {
              text: 'Chinese History Overview',
              link: '/history/china/index',
              items: [
                { text: '史前', link: '/history/china/prehistory' },
                { text: '商', link: '/history/china/shang' },
                { text: '周', link: '/history/china/xia' },
                { text: '秦', link: '/history/china/qin' },
                { text: '汉', link: '/history/china/han' },
                { text: '三国', link: '/history/china/three-kingdoms' },
                { text: '晋', link: '/history/china/jin' },
                { text: '南北朝', link: '/history/china/northern-and-southern-dynasties' },
                { text: '隋', link: '/history/china/sui' },
                { text: '唐', link: '/history/china/tang' },
                { text: '五代十国', link: '/history/china/five-dynasties-ten-kingdoms' },
                { text: '宋', link: '/history/china/song' },
                { text: '元', link: '/history/china/yuan' },
                { text: '明', link: '/history/china/ming' },
                { text: '清', link: '/history/china/qing' },
                { text: '近现代', link: '/history/china/modern' }
              ]
            },
            {
              text: 'World History Overview',
              link: '/history/world'
            }
          ]
        }
      ],
      '/science/': [
        {
          text: 'Science',
          items: [
          {
            text: '心理学',
            link: '/science/psychology'
          },
          {
            text: '正念',
            link: '/science/mindfulness'
          },
          {
            text: '睡眠'
          }]
        }
      ],
      '/literature/': [
        {
          text: 'Literature',
          items: [
            {
              text: '增广贤文',
              link: '/literature/zgxw'
            },
            {
              text: '诗词古文摘录',
              link: '/literature/poetry'
            }
          ]
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
                  text: 'Resume',
                  link: '/miscellaneous/money-making/resume'
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
