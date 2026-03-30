import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑',
  description: '让所有孩子有处可学',
  base: '/mengzhiyuan/portal/',
  
  // 忽略死链检查
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: '/mengzhiyuan/portal/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🎓 学生', link: '/mengzhiyuan/student/' },
      { text: '👨‍👩‍👧 家长', link: '/mengzhiyuan/parent/' }
    ],
    
    footer: {
      message: '让所有孩子有处可学',
      copyright: '© 2026 默隐·蒙知苑'
    }
  }
})
