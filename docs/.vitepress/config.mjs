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
      { text: '首页', link: '/index.html' },
      { text: '编程学院', link: '/programming/index.html' },
      { text: '国学经典', link: '/chinese-classics/index.html' },
      { text: '数学天地', link: '/math/index.html' },
      { text: '家长指南', link: '/parents/index.html' },
      { text: '心理驿站', link: '/psychology/index.html' }
    ],

    sidebar: {
      '/programming/': [
        {
          text: '编程学院',
          items: [
            { text: '概述', link: '/programming/index.html' },
            { text: '代码食谱', link: '/programming/cookbook.html' },
            { text: '常见错误', link: '/programming/errors.html' },
            {
              text: 'Scratch',
              collapsed: false,
              items: [
                { text: 'Scratch 首页', link: '/programming/scratch/index.html' },
                { text: 'L1 一级', link: '/programming/scratch/l1.html' },
                { text: 'L2 二级', link: '/programming/scratch/l2.html' },
                { text: 'L3 三级', link: '/programming/scratch/l3.html' },
                { text: 'L4 四级（过渡）', link: '/programming/scratch/l4.html' },
                {
                  text: '项目案例',
                  collapsed: true,
                  items: [
                    { text: 'Pong 游戏', link: '/programming/scratch/examples/pong-game.html' },
                    { text: '贪吃蛇', link: '/programming/scratch/examples/snake-game.html' },
                    { text: 'Flappy Bird', link: '/programming/scratch/examples/flappy-bird.html' },
                    { text: '小猫追蝴蝶', link: '/programming/scratch/examples/cat-chase-butterfly.html' },
                    { text: '迷宫冒险', link: '/programming/scratch/examples/maze-adventure.html' },
                    { text: '算法可视化', link: '/programming/scratch/examples/algorithm-visualization.html' }
                  ]
                }
              ]
            },
            {
              text: 'Python',
              collapsed: true,
              items: [
                { text: 'Python 首页', link: '/programming/python/index.html' },
                { text: 'L1 一级', link: '/programming/python/l1.html' },
                { text: 'L2 二级', link: '/programming/python/l2.html' }
              ]
            },
            {
              text: 'C++',
              collapsed: true,
              items: [
                { text: 'C++ 首页', link: '/programming/cpp/index.html' },
                { text: 'L1 一级', link: '/programming/cpp/l1.html' },
                { text: 'L2 二级', link: '/programming/cpp/l2.html' },
                { text: 'L3 三级', link: '/programming/cpp/l3.html' },
                { text: 'L4 四级', link: '/programming/cpp/l4.html' },
                { text: 'L5 五级', link: '/programming/cpp/l5.html' },
                { text: 'L6 六级', link: '/programming/cpp/l6.html' },
                { text: 'L7 七级', link: '/programming/cpp/l7.html' },
                { text: 'L8 八级', link: '/programming/cpp/l8.html' },
                { text: '编程练习题', link: '/programming/cpp/exercises.html' },
                { text: '语法速查表', link: '/programming/cpp/cheatsheet.html' }
              ]
            }
          ]
        }
      ],
      '/programming/scratch/': [
        {
          text: 'Scratch 图形化编程',
          items: [
            { text: '← 返回编程学院', link: '/programming/index.html' },
            { text: 'Scratch 首页', link: '/programming/scratch/index.html' },
            { text: 'L1 一级', link: '/programming/scratch/l1.html' },
            { text: 'L2 二级', link: '/programming/scratch/l2.html' },
            { text: 'L3 三级', link: '/programming/scratch/l3.html' },
            { text: 'L4 四级（过渡）', link: '/programming/scratch/l4.html' },
            {
              text: '项目案例',
              collapsed: false,
              items: [
                { text: 'Pong 游戏', link: '/programming/scratch/examples/pong-game.html' },
                { text: '贪吃蛇', link: '/programming/scratch/examples/snake-game.html' },
                { text: 'Flappy Bird', link: '/programming/scratch/examples/flappy-bird.html' },
                { text: '小猫追蝴蝶', link: '/programming/scratch/examples/cat-chase-butterfly.html' },
                { text: '迷宫冒险', link: '/programming/scratch/examples/maze-adventure.html' },
                { text: '算法可视化', link: '/programming/scratch/examples/algorithm-visualization.html' }
              ]
            }
          ]
        }
      ],
      '/math/': [
        {
          text: '数学天地',
          items: [
            { text: '概述', link: '/math/index.html' },
            { text: '基础数学（6-9岁）', link: '/math/basic.html' },
            { text: '趣味数学', link: '/math/fun-math.html' },
            { text: '编程数学基础', link: '/math/programming-basics.html' },
            { text: '数学与编程', link: '/math/programming-math.html' },
            { text: '奥数思维', link: '/math/olympiad.html' },
            { text: '竞赛数学', link: '/math/competition.html' }
          ]
        }
      ],
      '/parents/': [
        {
          text: '家长指南',
          items: [
            { text: '概述', link: '/parents/index.html' },
            { text: 'Scratch阶段指南', link: '/parents/scratch-guide.html' },
            { text: 'Python阶段指南', link: '/parents/python-guide.html' },
            { text: 'C++竞赛指南', link: '/parents/cpp-guide.html' },
            { text: '升学政策解读', link: '/parents/admission-policy.html' },
            { text: '常见问题解答', link: '/parents/faq.html' }
          ]
        }
      ],
      '/psychology/': [
        {
          text: '心理驿站',
          items: [
            { text: '概述', link: '/psychology/index.html' },
            { text: '6-8岁学习心理', link: '/psychology/age6-8.html' },
            { text: '9-11岁学习心理', link: '/psychology/age9-11.html' },
            { text: '12岁+学习心理', link: '/psychology/age12plus.html' },
            { text: '亲子沟通技巧', link: '/psychology/communication.html' }
          ]
        }
      ],
      '/programming/cpp/': [
        {
          text: 'C++ 竞赛编程',
          items: [
            { text: '← 返回编程学院', link: '/programming/index.html' },
            { text: 'C++ 首页', link: '/programming/cpp/index.html' },
            { text: 'L1 一级', link: '/programming/cpp/l1.html' },
            { text: 'L2 二级', link: '/programming/cpp/l2.html' },
            { text: 'L3 三级', link: '/programming/cpp/l3.html' },
            { text: 'L4 四级', link: '/programming/cpp/l4.html' },
            { text: 'L5 五级', link: '/programming/cpp/l5.html' },
            { text: 'L6 六级', link: '/programming/cpp/l6.html' },
            { text: 'L7 七级', link: '/programming/cpp/l7.html' },
            { text: 'L8 八级', link: '/programming/cpp/l8.html' },
            { text: '编程练习题', link: '/programming/cpp/exercises.html' },
            { text: '语法速查表', link: '/programming/cpp/cheatsheet.html' }
          ]
        }
      ],
      '/chinese-classics/': [
        {
          text: '国学经典',
          items: [
            { text: '国学首页', link: '/chinese-classics/index.html' },
            {
              text: '三经典',
              collapsed: false,
              items: [
                { 
                  text: '《易经》', 
                  collapsed: false,
                  items: [
                    { text: '易经首页', link: '/chinese-classics/yijing.html' },
                    { text: '通行本全文', link: '/chinese-classics/yijing/fulltext.html' },
                    { text: '帛书甲本（古本）', link: '/chinese-classics/yijing/boshu.html' }
                  ]
                },
                { 
                  text: '《道德经》', 
                  collapsed: false,
                  items: [
                    { text: '道德经首页', link: '/chinese-classics/daodejing.html' },
                    { text: '通行本全文', link: '/chinese-classics/daodejing/fulltext.html' },
                    { text: '帛书甲本（西汉）', link: '/chinese-classics/daodejing/boshu.html' },
                    { text: '郭店楚简本（战国）', link: '/chinese-classics/daodejing/guodian.html' },
                    { text: '版本对比', link: '/chinese-classics/daodejing/compare.html' }
                  ]
                },
                { 
                  text: '《论语》', 
                  collapsed: false,
                  items: [
                    { text: '论语首页', link: '/chinese-classics/lunyu.html' },
                    { text: '通行本全文（含异文）', link: '/chinese-classics/lunyu/fulltext.html' }
                  ]
                }
              ]
            },
            {
              text: '兵法谋略',
              collapsed: false,
              items: [
                { 
                  text: '孙子兵法',
                  collapsed: false,
                  items: [
                    { text: '孙子兵法首页', link: '/chinese-classics/sunzi.html' },
                    { text: '全文', link: '/chinese-classics/sunzi/fulltext.html' },
                    { text: '名家注释版', link: '/chinese-classics/sunzi/annotated.html' }
                  ]
                }
              ]
            },
            {
              text: '现当代著作',
              collapsed: false,
              items: [
                { 
                  text: '毛泽东选集',
                  collapsed: false,
                  items: [
                    { text: '毛选首页', link: '/chinese-classics/maoxuan.html' },
                    { text: '经典篇目', link: '/chinese-classics/maoxuan/selected.html' },
                    { text: '哲学思想', link: '/chinese-classics/maoxuan/philosophy.html' }
                  ]
                }
              ]
            },
            {
              text: '三经典与编程',
              collapsed: false,
              items: [
                { text: '《易经》与算法', link: '/chinese-classics/yijing-algorithm.html' },
                { text: '《道德经》与软件', link: '/chinese-classics/daodejing-software.html' },
                { text: '《论语》与学习', link: '/chinese-classics/lunyu-learning.html' }
              ]
            },
            {
              text: '蒙学经典',
              collapsed: false,
              items: [
                { 
                  text: '三字经',
                  collapsed: true,
                  items: [
                    { text: '儿童版', link: '/chinese-classics/children/sanzijing.html' },
                    { text: '全文', link: '/chinese-classics/children/sanzijing-full.html' }
                  ]
                },
                { 
                  text: '弟子规',
                  collapsed: true,
                  items: [
                    { text: '儿童版', link: '/chinese-classics/children/dizigui.html' },
                    { text: '全文', link: '/chinese-classics/children/dizigui-full.html' }
                  ]
                },
                { 
                  text: '千字文',
                  collapsed: true,
                  items: [
                    { text: '儿童版', link: '/chinese-classics/children/qianziwen.html' },
                    { text: '全文', link: '/chinese-classics/children/qianziwen-full.html' }
                  ]
                },
                { 
                  text: '百家姓',
                  collapsed: true,
                  items: [
                    { text: '儿童版', link: '/chinese-classics/children/baijiaxing.html' },
                    { text: '全文', link: '/chinese-classics/children/baijiaxing-full.html' }
                  ]
                },
                { text: '成语故事', link: '/chinese-classics/children/chengyu.html' },
                { 
                  text: '声律启蒙',
                  collapsed: true,
                  items: [
                    { text: '儿童版', link: '/chinese-classics/children/shenglvqimeng.html' },
                    { text: '全文', link: '/chinese-classics/children/shenglvqimeng-full.html' }
                  ]
                },
                { 
                  text: '古诗词精选',
                  collapsed: true,
                  items: [
                    { text: '儿童版', link: '/chinese-classics/children/gushici.html' },
                    { text: '全文', link: '/chinese-classics/children/gushici-full.html' }
                  ]
                },
                { text: '历史故事', link: '/chinese-classics/children/lishigushi.html' }
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