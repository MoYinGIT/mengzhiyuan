import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '默隐·蒙知苑 - 个人知识库',
  description: '内部教学资料（密码保护）',
  base: '/mengzhiyuan/private/',
  
  // 忽略死链检查
  ignoreDeadLinks: true,
  
  // 注入访问验证脚本
  head: [
    ['script', { src: '/mengzhiyuan/private/auth-check.js' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['style', {}, `
      /* 注销按钮样式 */
      .logout-btn {
        background: #e74c3c;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        margin-left: 10px;
      }
      .logout-btn:hover {
        background: #c0392b;
      }
      .auth-status {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #666;
      }
    `]
  ],
  
  vite: {
    // 确保静态资源正确复制
    publicDir: 'public'
  },
  
  themeConfig: {
    logo: '/logo.svg',
    
    // 添加顶部导航
    nav: [
      { text: '🏠 仪表盘', link: '/' },
      { text: '📚 GESP', link: '/gesp/' },
      { text: '🤖 AI教学', link: '/secure/ai/' },
      { text: '🌍 全球资源', link: '/resources/world-top-forums/' },
      { text: '← 总站', link: 'https://moyingit.github.io/mengzhiyuan/portal/' },
      { 
        text: '🔓 注销',
        items: [
          { text: '退出登录', link: 'javascript:logout()' }
        ]
      }
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
    },
    
    // 页脚
    footer: {
      message: '🔐 个人知识库 · 密码保护区域',
      copyright: '© 2026 默隐·蒙知苑 · 仅限授权访问'
    },
    
    // 搜索
    search: {
      provider: 'local'
    }
  }
})
