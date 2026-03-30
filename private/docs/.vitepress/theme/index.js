// 自定义主题 - 添加访问验证
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app, router, siteData }) {
    // 在应用增强时执行
    if (typeof window !== 'undefined') {
      // 客户端执行验证
      import('./auth-guard.js').then(() => {
        console.log('🔐 访问验证已加载')
      }).catch(err => {
        console.error('访问验证加载失败:', err)
      })
    }
  }
}
