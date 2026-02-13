import { defineConfig } from 'vitepress'
import { createSidebar } from './utils/sidebar'

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
      { text: 'Miscellaneous', link: '/miscellaneous/' },
      { text: 'History', link: '/history/' }
    ],

    sidebar: createSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CDT/chenbook.github.io' }
    ]
  }
})
