import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑',
  description: '让所有孩子有处可学',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '编程学院', link: '/programming/' },
      { text: '数学天地', link: '/math/' },
      { text: '家长指南', link: '/parents/' },
      { text: '心理驿站', link: '/psychology/' }
    ],
    
    sidebar: {
      '/programming/': [
        {
          text: '编程学院',
          items: [
            { text: '概述', link: '/programming/' },
            { text: 'Scratch', link: '/programming/scratch/' },
            { text: 'Python', link: '/programming/python/' },
            { text: 'C++', link: '/programming/cpp/' }
          ]
        }
      ],
      '/math/': [
        {
          text: '数学天地',
          items: [
            { text: '概述', link: '/math/' }
          ]
        }
      ],
      '/parents/': [
        {
          text: '家长指南',
          items: [
            { text: '概述', link: '/parents/' }
          ]
        }
      ],
      '/psychology/': [
        {
          text: '心理驿站',
          items: [
            { text: '概述', link: '/psychology/' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moyingit/mengzhiyuan' }
    ],
    
    footer: {
      message: '让所有孩子有处可学',
      copyright: 'Copyright © 2026 默隐·蒙知苑'
    }
  }
})