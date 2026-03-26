---
layout: doc
---

# 🛠️ 学习工具推荐

> 推荐的IDE、插件、学习App清单

---

## 编程开发工具

### 集成开发环境 (IDE)

| 工具 | 适用级别 | 平台 | 推荐理由 | 下载链接 |
|:---|:---:|:---:|:---|:---|
| **Dev-C++** | L1-L4 | Windows | 轻量简洁，GESP官方推荐 | [下载](https://sourceforge.net/projects/orwelldevcpp/) |
| **VS Code** | L3+ | 全平台 | 功能强大，插件丰富 | [下载](https://code.visualstudio.com/) |
| **CLion** | L5+ | 全平台 | 专业C++IDE，智能提示 | [下载](https://www.jetbrains.com/clion/) |
| **Xcode** | L3+ | macOS | Mac原生，性能优秀 | App Store |
| **Code::Blocks** | L1-L5 | 全平台 | 开源免费，跨平台 | [下载](https://www.codeblocks.org/) |

#### 选择建议

| 情况 | 推荐IDE |
|:---|:---|
| 初学者，Windows | Dev-C++ |
| 想要更多功能 | VS Code |
| 专业开发，预算充足 | CLion |
| Mac用户 | Xcode 或 VS Code |

---

### VS Code 必备插件

| 插件 | 功能 | 推荐度 |
|:---|:---|:---:|
| **C/C++** | 官方C++插件，调试+智能提示 | ⭐⭐⭐⭐⭐ |
| **C++ Intellisense** | 代码补全，跳转定义 | ⭐⭐⭐⭐⭐ |
| **Code Runner** | 一键运行代码 | ⭐⭐⭐⭐⭐ |
| **Error Lens** | 错误直接显示在行内 | ⭐⭐⭐⭐ |
| **Better Comments** | 注释高亮 | ⭐⭐⭐⭐ |
| **GitLens** | Git版本控制 | ⭐⭐⭐⭐ |
| **Markdown All in One** | Markdown支持 | ⭐⭐⭐⭐ |
| **Chinese (Simplified)** | 中文语言包 | ⭐⭐⭐ |
| **Prettier** | 代码格式化 | ⭐⭐⭐ |
| **Live Share** | 协作编程 | ⭐⭐⭐ |

#### VS Code 配置建议

```json
// settings.json
{
    "editor.fontSize": 16,
    "editor.tabSize": 4,
    "editor.insertSpaces": false,
    "C_Cpp.default.cppStandard": "c++17",
    "code-runner.runInTerminal": true,
    "code-runner.executorMap": {
        "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"
    }
}
```

---

## 在线学习平台

### 在线评测系统 (OJ)

| 平台 | 特点 | 适合级别 | 链接 |
|:---|:---|:---:|:---|
| **洛谷** | 国内OI生态完整，题解丰富 | L3-L8 | [luogu.com.cn](https://www.luogu.com.cn) |
| **Hydro OJ** | 「蒙知苑」推荐，支持私有部署 | 全级别 | [hydro.ac](https://hydro.ac) |
| **Codeforces** | 国际竞赛，难度分级 | L6+ | [codeforces.com](https://codeforces.com) |
| **AtCoder** | 日本竞赛，题目清晰 | L4+ | [atcoder.jp](https://atcoder.jp) |
| **LeetCode** | 面试导向，题解丰富 | L5+ | [leetcode.cn](https://leetcode.cn) |
| **CSES** | 系统化题库，主题分类 | L4+ | [cses.fi](https://cses.fi) |
| **OpenJudge** | 北大出品，经典题目 | L3-L6 | [openjudge.cn](https://openjudge.cn) |

#### 使用建议

| 阶段 | 推荐平台 |
|:---|:---|
| L1-L2 | Hydro OJ（入门题库） |
| L3-L4 | 洛谷（入门+普及） |
| L5-L6 | 洛谷（提高）+ Codeforces |
| L7-L8 | Codeforces + AtCoder |

---

### 学习资源网站

| 网站 | 内容 | 推荐度 |
|:---|:---|:---:|
| **OI Wiki** | 算法知识百科 | ⭐⭐⭐⭐⭐ |
| **CP-Algorithms** | 英文算法百科 | ⭐⭐⭐⭐⭐ |
| **USACO Guide** | 系统化教程 | ⭐⭐⭐⭐⭐ |
| **VisuAlgo** | 算法可视化 | ⭐⭐⭐⭐⭐ |
| **GeeksforGeeks** | 算法教程 | ⭐⭐⭐⭐ |
| **菜鸟教程** | 基础语法 | ⭐⭐⭐⭐ |
| **W3School** | Web技术 | ⭐⭐⭐ |

---

## 移动学习App

### 编程学习

| App | 平台 | 特点 | 适合 |
|:---:|:---:|:---|:---|
| **Sololearn** | iOS/Android | 碎片化学习，互动式 | 入门 |
| **Mimo** | iOS/Android | 游戏化学习 | 入门 |
| **Grasshopper** | iOS/Android | Google出品，JS入门 | 入门 |
| **Enki** | iOS/Android | 每日5分钟 | 保持习惯 |

### 算法练习

| App | 平台 | 特点 |
|:---:|:---:|:---|
| **LeetCode** | iOS/Android | 手机刷题 |
| **CodinGame** | iOS/Android | 游戏化编程 |
| **CheckiO** | Web | Python游戏 |

### 笔记与效率

| App | 平台 | 用途 |
|:---:|:---:|:---|
| **Notion** | 全平台 | 知识管理、笔记 |
| **Obsidian** | 全平台 | Markdown笔记 |
| **Anki** | 全平台 | 间隔重复记忆 |
| **Forest** | iOS/Android | 专注计时 |
| **番茄ToDo** | iOS/Android | 番茄工作法 |

---

## 辅助工具

### 画图工具

| 工具 | 用途 | 链接 |
|:---|:---|:---|
| **Draw.io** | 流程图、结构图 | [app.diagrams.net](https://app.diagrams.net) |
| **Excalidraw** | 手绘风格图 | [excalidraw.com](https://excalidraw.com) |
| **ProcessOn** | 流程图 | [processon.com](https://processon.com) |

### 代码分享

| 工具 | 用途 | 链接 |
|:---|:---|:---|
| **GitHub Gist** | 代码片段分享 | [gist.github.com](https://gist.github.com) |
| **Pastebin** | 临时粘贴 | [pastebin.com](https://pastebin.com) |
| **Carbon** | 代码转图片 | [carbon.now.sh](https://carbon.now.sh) |

### 在线工具

| 工具 | 用途 | 链接 |
|:---|:---|:---|
| **Compiler Explorer** | 查看汇编代码 | [godbolt.org](https://godbolt.org) |
| **C++ Shell** | 在线运行C++ | [cpp.sh](https://cpp.sh) |
| **Regex101** | 正则表达式测试 | [regex101.com](https://regex101.com) |
| **JSON.cn** | JSON格式化 | [json.cn](https://json.cn) |

---

## 浏览器插件

### 开发辅助

| 插件 | 功能 | 浏览器 |
|:---|:---|:---:|
| **Octotree** | GitHub代码树 | Chrome/Firefox |
| **Sourcegraph** | 代码搜索 | Chrome |
| **JSON Viewer** | JSON格式化 | Chrome |
| **Wappalyzer** | 技术栈检测 | Chrome |

### 效率工具

| 插件 | 功能 | 浏览器 |
|:---|:---|:---:|
| **Momentum** | 新标签页美化 | Chrome |
| **OneTab** | 标签页管理 | Chrome |
| **Dark Reader** | 夜间模式 | Chrome/Firefox |
| **Grammarly** | 英文写作检查 | Chrome |

---

## 配置推荐

### 初学者配置（L1-L3）

```
IDE: Dev-C++ 或 VS Code
OJ: Hydro OJ + 洛谷
学习: OI Wiki + 菜鸟教程
笔记: 纸笔 或 记事本
```

### 进阶配置（L4-L6）

```
IDE: VS Code + C/C++插件
OJ: 洛谷 + Codeforces
学习: OI Wiki + USACO Guide
笔记: Notion 或 Obsidian
辅助: Draw.io + VisuAlgo
```

### 竞赛配置（L7-L8）

```
IDE: CLion 或 VS Code（高度定制）
OJ: Codeforces + AtCoder + 洛谷
学习: CP-Algorithms + 论文
笔记: Obsidian + Anki
辅助: Compiler Explorer + Python脚本
```

---

## 工具使用建议

### 学习建议

1. **不要贪多**：选择1-2个主力工具，用熟用透
2. **渐进升级**：随着水平提升，逐步增加工具
3. **注重基础**：工具是辅助，算法思维才是核心
4. **善用搜索**：遇到不会的，善用Google/百度

### 推荐学习路线

```
第1周：安装IDE，配置环境
第2-4周：熟悉IDE基本操作
第1-2月：注册OJ账号，开始刷题
第3月：学习使用调试工具
第4月+：根据需求选择进阶工具
```

---

## 常见问题 FAQ

**Q1: 一定要用VS Code吗？Dev-C++不行吗？**
- L1-L4用Dev-C++完全没问题
- L5+建议迁移到VS Code，功能更强大

**Q2: 手机上能写代码吗？**
- 可以，但不推荐作为主要学习方式
- 手机适合：看题解、读代码、简单修改

**Q3: 需要购买付费工具吗？**
- 初学者完全不需要
- 进阶阶段CLion有学生免费版
- 大部分工具都有免费替代品

**Q4: Mac用户有什么特别注意的？**
- 推荐Xcode或VS Code
- 部分OJ可能不支持Mac环境，提前确认

**Q5: 如何保护眼睛？**
- 开启IDE的暗色主题
- 使用Dark Reader插件
- 遵循20-20-20法则（每20分钟看20英尺外20秒）
- 考虑护眼显示器或护眼灯

---

**工欲善其事，必先利其器。但记住：工具只是手段，学习才是目的。**

**整理者**：明夷  
**日期**：2026-03-27

[← 返回首页](/)

