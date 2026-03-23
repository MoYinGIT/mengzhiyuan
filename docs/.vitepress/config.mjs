import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '默隐·蒙知苑',
  description: '让所有孩子有处可学',
  base: '/mengzhiyuan/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mengzhiyuan/logo.svg' }],
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
      { text: '国学经典', link: '/chinese-classics/' },
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
            { text: '代码食谱', link: '/programming/cookbook' },
            { text: '常见错误', link: '/programming/errors' },
            {
              text: 'Scratch',
              collapsed: false,
              items: [
                { text: 'Scratch 首页', link: '/programming/scratch/' },
                { text: 'L1 一级', link: '/programming/scratch/l1' },
                { text: 'L2 二级', link: '/programming/scratch/l2' },
                { text: 'L3 三级', link: '/programming/scratch/l3' },
                { text: 'L4 四级（过渡）', link: '/programming/scratch/l4' },
                {
                  text: '项目案例',
                  collapsed: true,
                  items: [
                    { text: 'Pong 游戏', link: '/programming/scratch/examples/pong-game' },
                    { text: '贪吃蛇', link: '/programming/scratch/examples/snake-game' },
                    { text: 'Flappy Bird', link: '/programming/scratch/examples/flappy-bird' },
                    { text: '算法可视化', link: '/programming/scratch/examples/algorithm-visualization' }
                  ]
                }
              ]
            },
            {
              text: 'Python',
              collapsed: true,
              items: [
                { text: 'Python 首页', link: '/programming/python/' },
                { text: 'L1 一级', link: '/programming/python/l1' },
                { text: 'L2 二级', link: '/programming/python/l2' }
              ]
            },
            {
              text: 'C++',
              collapsed: true,
              items: [
                { text: 'C++ 首页', link: '/programming/cpp/' },
                { text: 'L1 一级', link: '/programming/cpp/l1' },
                { text: 'L2 二级', link: '/programming/cpp/l2' },
                { text: 'L3 三级', link: '/programming/cpp/l3' },
                { text: 'L4 四级', link: '/programming/cpp/l4' },
                { text: 'L5 五级', link: '/programming/cpp/l5' },
                { text: 'L6 六级', link: '/programming/cpp/l6' },
                { text: 'L7 七级', link: '/programming/cpp/l7' },
                { text: 'L8 八级', link: '/programming/cpp/l8' },
                { text: '编程练习题', link: '/programming/cpp/exercises' },
                { text: '语法速查表', link: '/programming/cpp/cheatsheet' }
              ]
            }
          ]
        }
      ],
      '/programming/scratch/': [
        {
          text: 'Scratch 图形化编程',
          items: [
            { text: '← 返回编程学院', link: '/programming/' },
            { text: 'Scratch 首页', link: '/programming/scratch/' },
            { text: 'L1 一级', link: '/programming/scratch/l1' },
            { text: 'L2 二级', link: '/programming/scratch/l2' },
            { text: 'L3 三级', link: '/programming/scratch/l3' },
            { text: 'L4 四级（过渡）', link: '/programming/scratch/l4' },
            {
              text: '项目案例',
              collapsed: false,
              items: [
                { text: 'Pong 游戏', link: '/programming/scratch/examples/pong-game' },
                { text: '贪吃蛇', link: '/programming/scratch/examples/snake-game' },
                { text: 'Flappy Bird', link: '/programming/scratch/examples/flappy-bird' },
                { text: '算法可视化', link: '/programming/scratch/examples/algorithm-visualization' }
              ]
            }
          ]
        }
      ],
      '/math/': [
        {
          text: '数学天地',
          items: [
            { text: '概述', link: '/math/' },
            { text: '编程数学基础', link: '/math/programming-basics' },
            { text: '奥数思维', link: '/math/olympiad' },
            { text: '竞赛数学', link: '/math/competition' }
          ]
        }
      ],
      '/parents/': [
        {
          text: '家长指南',
          items: [
            { text: '概述', link: '/parents/' },
            { text: 'Scratch阶段指南', link: '/parents/scratch-guide' },
            { text: 'Python阶段指南', link: '/parents/python-guide' },
            { text: 'C++竞赛指南', link: '/parents/cpp-guide' },
            { text: '常见问题解答', link: '/parents/faq' }
          ]
        }
      ],
      '/psychology/': [
        {
          text: '心理驿站',
          items: [
            { text: '概述', link: '/psychology/' },
            { text: '6-8岁学习心理', link: '/psychology/age6-8' },
            { text: '9-11岁学习心理', link: '/psychology/age9-11' },
            { text: '12岁+学习心理', link: '/psychology/age12plus' },
            { text: '亲子沟通技巧', link: '/psychology/communication' }
          ]
        }
      ],
      '/programming/cpp/': [
        {
          text: 'C++ 竞赛编程',
          items: [
            { text: '← 返回编程学院', link: '/programming/' },
            { text: 'C++ 首页', link: '/programming/cpp/' },
            { text: 'L1 一级', link: '/programming/cpp/l1' },
            { text: 'L2 二级', link: '/programming/cpp/l2' },
            { text: 'L3 三级', link: '/programming/cpp/l3' },
            { text: 'L4 四级', link: '/programming/cpp/l4' },
            { text: 'L5 五级', link: '/programming/cpp/l5' },
            { text: 'L6 六级', link: '/programming/cpp/l6' },
            { text: 'L7 七级', link: '/programming/cpp/l7' },
            { text: 'L8 八级', link: '/programming/cpp/l8' },
            { text: '编程练习题', link: '/programming/cpp/exercises' },
            { text: '语法速查表', link: '/programming/cpp/cheatsheet' }
          ]
        }
      ],
      '/chinese-classics/': [
        {
          text: '国学经典',
          items: [
            { text: '国学首页', link: '/chinese-classics/' },
            {
              text: '三经典与编程',
              collapsed: false,
              items: [
                { text: '《易经》与算法', link: '/chinese-classics/yijing-algorithm' },
                { text: '《道德经》与软件', link: '/chinese-classics/daodejing-software' },
                { text: '《论语》与学习', link: '/chinese-classics/lunyu-learning' }
              ]
            },
            {
              text: '蒙学经典',
              collapsed: false,
              items: [
                { text: '三字经', link: '/chinese-classics/children/sanzijing' },
                { text: '弟子规', link: '/chinese-classics/children/dizigui' },
                { text: '千字文', link: '/chinese-classics/children/qianziwen' },
                { text: '百家姓', link: '/chinese-classics/children/baijiaxing' },
                { text: '成语故事', link: '/chinese-classics/children/chengyu' },
                { text: '声律启蒙', link: '/chinese-classics/children/shenglvqimeng' },
                { text: '古诗词精选', link: '/chinese-classics/children/gushici' },
                { text: '历史故事', link: '/chinese-classics/children/lishigushi' }
              ]
            }
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