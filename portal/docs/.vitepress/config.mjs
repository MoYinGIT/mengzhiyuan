import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑',
  description: '让所有孩子有处可学',
  base: '/',
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '🎓 学生', link: '/student/' },
      { text: '👨‍👩‍👧 家长', link: '/parent/' }
    ],
    
    footer: {
      message: '让所有孩子有处可学',
      copyright: '© 2026 默隐·蒙知苑'
    }
  }
})
