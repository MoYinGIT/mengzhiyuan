import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑 - 家长指南',
  description: '陪伴孩子学习成长',
  base: '/mengzhiyuan/parent/',
  
  // 忽略死链检查
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/mengzhiyuan/parent/' },
      { text: '📖 家长指南', link: '/mengzhiyuan/parent/guide/' },
      { text: '🧠 心理驿站', link: '/mengzhiyuan/parent/psychology/' },
      { text: '🎓 学生中心', link: '/mengzhiyuan/student/' },
      { text: '← 总站', link: '/mengzhiyuan/' }
    ],
    
    sidebar: {
      '/mengzhiyuan/parent/guide/': [
        { text: '家长指南首页', link: '/mengzhiyuan/parent/guide/' },
        { text: 'C++学习指南', link: '/mengzhiyuan/parent/guide/cpp-guide' },
        { text: 'Python学习指南', link: '/mengzhiyuan/parent/guide/python-guide' },
        { text: 'Scratch学习指南', link: '/mengzhiyuan/parent/guide/scratch-guide' },
        { text: '常见问题', link: '/mengzhiyuan/parent/guide/faq' },
        { text: '招生政策', link: '/mengzhiyuan/parent/guide/admission-policy' }
      ],
      '/mengzhiyuan/parent/psychology/': [
        { text: '心理驿站首页', link: '/mengzhiyuan/parent/psychology/' },
        { text: '6-8岁心理特点', link: '/mengzhiyuan/parent/psychology/age6-8' },
        { text: '9-11岁心理特点', link: '/mengzhiyuan/parent/psychology/age9-11' },
        { text: '12岁以上心理特点', link: '/mengzhiyuan/parent/psychology/age12plus' },
        { text: '亲子沟通', link: '/mengzhiyuan/parent/psychology/communication' }
      ]
    }
  }
})
