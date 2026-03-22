import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '默隐·蒙知苑',
  description: '让所有孩子有处可学',
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5c7cfa' }],
    ['meta', { name: 'keywords', content: '编程教育,少儿编程,Scratch,Python,C++,数学,家长指南' }],
    ['meta', { name: 'author', content: '默隐' }]
  ],
  
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  
  themeConfig: {
    logo: '/logo.svg',
    
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
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    outline: {
      label: '本页目录'
    },
    
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})