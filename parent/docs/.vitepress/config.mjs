import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑 - 家长指南',
  description: '陪伴孩子学习成长',
  base: '/parent/',
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📖 家长指南', link: '/guide/' },
      { text: '🧠 心理驿站', link: '/psychology/' },
      { text: '🎓 学生中心', link: '/student/' },
      { text: '← 总站', link: '/' }
    ],
    
    sidebar: {
      '/guide/': [
        { text: '家长指南首页', link: '/guide/' },
        { text: 'C++学习指南', link: '/guide/cpp-guide' },
        { text: 'Python学习指南', link: '/guide/python-guide' },
        { text: 'Scratch学习指南', link: '/guide/scratch-guide' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '招生政策', link: '/guide/admission-policy' }
      ],
      '/psychology/': [
        { text: '心理驿站首页', link: '/psychology/' },
        { text: '6-8岁心理特点', link: '/psychology/age6-8' },
        { text: '9-11岁心理特点', link: '/psychology/age9-11' },
        { text: '12岁以上心理特点', link: '/psychology/age12plus' },
        { text: '亲子沟通', link: '/psychology/communication' }
      ]
    }
  }
})
