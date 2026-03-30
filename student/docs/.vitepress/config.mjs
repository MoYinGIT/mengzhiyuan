import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑 - 学生学习中心',
  description: '编程、数学、国学，一站式学习',
  base: '/mengzhiyuan/student/',
  
  // 忽略死链检查
  ignoreDeadLinks: true,
  
  // 添加 favicon
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mengzhiyuan/student/logo.svg' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '💻 编程', link: '/programming/' },
      { text: '🔢 数学', link: '/math/' },
      { text: '📚 题解', link: '/programming/solutions/' },
      { text: '📜 国学', link: '/chinese-classics/' },
      { text: '← 总站', link: 'https://moyingit.github.io/mengzhiyuan/portal/' }
    ],
    
    sidebar: {
      '/programming/': [
        { text: '编程学院首页', link: '/programming/' },
        {
          text: '💻 编程基础',
          items: [
            { text: '代码食谱', link: '/programming/cookbook' },
            { text: '算法速查卡', link: '/programming/algorithm-cheatsheet' },
            { text: '常见错误', link: '/programming/errors' }
          ]
        },
        {
          text: '🎨 Scratch',
          collapsed: true,
          items: [
            { text: 'Scratch教程', link: '/programming/scratch/' }
          ]
        },
        {
          text: '🐍 Python',
          collapsed: true,
          items: [
            { text: 'Python教程', link: '/programming/python/' }
          ]
        },
        {
          text: '⚡ C++',
          collapsed: true,
          items: [
            { text: 'C++教程', link: '/programming/cpp/' },
            { text: 'C++教程v2.0（新）', link: '/programming/cpp-v2/' },
            { text: '题解专栏', link: '/programming/solutions/' }
          ]
        }
      ],
      '/programming/cpp-v2/': [
        { text: 'C++教程v2.0首页', link: '/programming/cpp-v2/' },
        {
          text: '📖 阅读程序练习',
          collapsed: false,
          items: [
            { text: '变量与赋值专题', link: '/programming/cpp-v2/gesp-variables-assignment-pro' },
            { text: '复合运算符专题', link: '/programming/cpp-v2/gesp-compound-operators-pro' },
            { text: '输入输出专题', link: '/programming/cpp-v2/gesp-cin-cout-pro' },
            { text: 'scanf/printf专题', link: '/programming/cpp-v2/gesp-scanf-printf-pro' },
            { text: '单分支专题', link: '/programming/cpp-v2/gesp-if-single-pro' },
            { text: '双分支专题', link: '/programming/cpp-v2/gesp-if-double-pro' },
            { text: '多分支专题', link: '/programming/cpp-v2/gesp-if-multi-pro' },
            { text: '分支嵌套专题', link: '/programming/cpp-v2/gesp-if-nested-pro' },
            { text: 'switch专题', link: '/programming/cpp-v2/gesp-switch-pro' },
            { text: 'for循环专题', link: '/programming/cpp-v2/gesp-for-loop-pro' },
            { text: 'while循环专题', link: '/programming/cpp-v2/gesp-while-loop-pro' },
            { text: 'do-while循环专题', link: '/programming/cpp-v2/gesp-do-while-pro' },
            { text: '循环嵌套专题', link: '/programming/cpp-v2/gesp-loop-nested-pro' },
            { text: '循环控制专题', link: '/programming/cpp-v2/gesp-loop-control-pro' }
          ]
        },
        { text: '练习题库', link: '/programming/cpp-v2/exercises' }
      ],
      '/chinese-classics/': [
        { text: '国学经典首页', link: '/chinese-classics/' },
        { text: '《易经》', link: '/chinese-classics/yijing' },
        { text: '《道德经》', link: '/chinese-classics/daodejing' },
        { text: '《论语》', link: '/chinese-classics/lunyu' }
      ]
    }
  }
})
