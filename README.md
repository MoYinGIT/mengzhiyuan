# 默隐·蒙知苑 v2.0

> **让所有孩子有处可学。**

## 🏛️ 三分架构

本项目采用总站门户 + 三子站的架构设计：

| 站点 | 路径 | 说明 | 访问权限 |
|:---|:---|:---|:---:|
| **总站门户** | `/portal/` | 统一入口，角色选择 | 公开 |
| **学生知识库** | `/student/` | 编程、数学、国学学习资源 | 公开 |
| **家长知识库** | `/parent/` | 家长指南、心理驿站 | 公开 |
| **个人知识库** | `/private/` | 内部教案、AI研究（密码保护） | 私密 |

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run student:dev    # 学生站
npm run parent:dev     # 家长站
npm run portal:dev     # 总站

# 构建
npm run build:all      # 构建所有站点
npm run build:student  # 仅构建学生站
npm run build:parent   # 仅构建家长站
```

## 📁 目录结构

```
mengzhiyuan/
├── portal/              # 总站门户
├── student/             # 学生知识库
├── parent/              # 家长知识库
├── private/             # 个人知识库（私密）
└── .github/             # GitHub Actions配置
    └── workflows/
        └── deploy.yml   # 自动部署配置
```

## 🌐 访问地址

- 总站: https://[用户名].github.io/mengzhiyuan/portal/
- 学生: https://[用户名].github.io/mengzhiyuan/student/
- 家长: https://[用户名].github.io/mengzhiyuan/parent/

## 📄 许可证

MIT License
