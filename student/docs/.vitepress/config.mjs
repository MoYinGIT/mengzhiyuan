import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑 - 学生学习中心',
  description: '编程、数学、国学，一站式学习',
  base: '/mengzhiyuan/student/',
  
  // 忽略死链检查
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/mengzhiyuan/student/' },
      { text: '💻 编程', link: '/mengzhiyuan/student/programming/' },
      { text: '🔢 数学', link: '/mengzhiyuan/student/math/' },
      { text: '📚 题解', link: '/mengzhiyuan/student/programming/solutions/' },
      { text: '📜 国学', link: '/mengzhiyuan/student/chinese-classics/' },
      { text: '← 总站', link: '/mengzhiyuan/' }
    ],
    
    sidebar: {
      '/mengzhiyuan/student/programming/': [
        { text: '编程学院首页', link: '/mengzhiyuan/student/programming/' },
        {
          text: '💻 编程基础',
          items: [
            { text: '代码食谱', link: '/mengzhiyuan/student/programming/cookbook' },
            { text: '算法速查卡', link: '/mengzhiyuan/student/programming/algorithm-cheatsheet' },
            { text: '常见错误', link: '/mengzhiyuan/student/programming/errors' }
          ]
        },
        {
          text: '🎨 Scratch',
          collapsed: true,
          items: [
            { text: 'Scratch教程', link: '/mengzhiyuan/student/programming/scratch/' }
          ]
        },
        {
          text: '🐍 Python',
          collapsed: true,
          items: [
            { text: 'Python教程', link: '/mengzhiyuan/student/programming/python/' }
          ]
        },
        {
          text: '⚡ C++',
          collapsed: true,
          items: [
            { text: 'C++教程', link: '/mengzhiyuan/student/programming/cpp/' },
            { text: '题解专栏', link: '/mengzhiyuan/student/programming/solutions/' }
          ]
        }
      ],
      '/mengzhiyuan/student/chinese-classics/': [
        { text: '国学经典首页', link: '/mengzhiyuan/student/chinese-classics/' },
        { text: '《易经》', link: '/mengzhiyuan/student/chinese-classics/yijing' },
        { text: '《道德经》', link: '/mengzhiyuan/student/chinese-classics/daodejing' },
        { text: '《论语》', link: '/mengzhiyuan/student/chinese-classics/lunyu' }
      ]
    }
  }
})
