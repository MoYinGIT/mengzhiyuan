import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑 - 个人知识库',
  description: '内部教学资料',
  base: '/private/',
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 仪表盘', link: '/' },
      { text: '📚 GESP', link: '/gesp/' },
      { text: '🤖 AI教学', link: '/secure/ai/' },
      { text: '🌍 全球资源', link: '/resources/world-top-forums/' },
      { text: '← 总站', link: '/' }
    ],
    
    sidebar: {
      '/gesp/': [
        { text: 'GESP教案首页', link: '/gesp/' },
        { text: '编程GESP教程', link: '/gesp/gesp/' },
        { text: '完整课程体系', link: '/gesp/curriculum/' }
      ],
      '/secure/': [
        { text: '加密内容首页', link: '/secure/' },
        { text: 'AI教学研究', link: '/secure/ai/' },
        { text: '教师资源', link: '/secure/teacher/' },
        { text: '家长沟通', link: '/secure/parent/' }
      ],
      '/resources/': [
        { text: '全球顶级资源', link: '/resources/world-top-forums/' },
        { text: 'AI与机器学习', link: '/resources/world-top-forums/AI-Machine-Learning' },
        { text: '数学核心', link: '/resources/world-top-forums/Mathematics-Core' },
        { text: '心理学核心', link: '/resources/world-top-forums/Psychology-Core' }
      ]
    }
  }
})
