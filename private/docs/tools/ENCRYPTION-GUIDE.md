# 「默隐·蒙知苑」前端加密方案实施指南
# Mengzhi Academy - Frontend Encryption Guide

**方案**: A方案（前端加密）  
**适用**: 教案、家长手册等敏感内容  
**安全级别**: ⭐⭐⭐  
**实施难度**: ⭐⭐  

---

## 快速开始（5分钟上手）

### 步骤1: 安装依赖

```bash
# 进入项目目录
cd /root/.openclaw/workspace

# 安装加密工具
npm install crypto-js
```

### 步骤2: 加密你的内容

```bash
# 加密家长手册
node encrypt-content.js 家长手册.md "Mz2026Parent" 家长手册.enc

# 加密教案
node encrypt-content.js 教案-L4-Week1.md "TeachL4@2026" 教案-L4-Week1.enc
```

### 步骤3: 创建加密页面

1. 复制 `secure-template.html` 为新的页面文件
2. 打开文件，找到 `CONFIG.encryptedContent`
3. 将 `.enc` 文件中的密文粘贴替换
4. 修改 `CONFIG.pageTitle` 为页面标题

```javascript
const CONFIG = {
  // 粘贴密文到这里
  encryptedContent: "U2FsdGVkX1+vupppZksvRf5pq5g5XjFRlipTg9+MvKLJmzJ...",
  
  // 修改页面标题
  pageTitle: "家长沟通手册",
  
  rememberUnlock: true
};
```

### 步骤4: 部署到网站

```bash
# 将页面上传到你的网站
cp secure-template.html /var/www/mengzhiyuan/parent-handbook.html

# 或上传到GitHub Pages等静态托管
```

---

## 目录结构建议

```
默隐·蒙知苑网站/
├── 📁 public/                    # 公开内容（完全开源）
│   ├── index.html               # 首页
│   ├── roadmap.html             # 学习路径图
│   ├── code-style.html          # 代码规范
│   └── tools.html               # 工具指南
│
├── 📁 secure/                    # 加密内容（密文公开）
│   ├── parent-handbook.html     # 🔒 家长手册
│   ├── teacher-docs.html        # 🔒 教师专区
│   ├── L4-syllabus.html         # 🔒 L4教学大纲
│   ├── L5-syllabus.html         # 🔒 L5教学大纲
│   └── L6-syllabus.html         # 🔒 L6教学大纲
│
├── 📁 scripts/                   # 工具脚本
│   ├── encrypt-content.js       # 加密工具
│   └── generate-secure-page.js  # 页面生成器（可选）
│
├── 📁 original/                  # 原始文档（本地保管，不上传）
│   ├── 家长手册.md              # 原始Markdown
│   ├── 教案-L4-Week1.md
│   └── ...
│
└── secure-template.html          # 页面模板
```

---

## 使用示例

### 示例1: 加密家长手册

```bash
# 1. 准备原始内容
cat > 家长手册.md << 'EOF'
# 默隐·蒙知苑 - 家长沟通手册

## 学习进度查询

### 如何查看孩子学习进度

1. 登录 Hydro OJ 评测系统
2. 进入「我的作业」页面
3. 查看提交记录和通过率

### 各阶段目标

| 阶段 | 时间 | 目标 |
|:---:|:---:|:---|
| 暑假班 | 7-8月 | 掌握L1基础语法 |
| 秋季班 | 9-12月 | L1考级通过 |
| 寒假班 | 1-2月 | L3进阶学习 |

## 屏幕使用建议

- 每日编程练习不超过2小时
- 每20分钟休息远眺
- 晚间优先纸质练习

---
联系方式：如有疑问请联系默隐
EOF

# 2. 加密
node encrypt-content.js 家长手册.md "Mz2026Parent"

# 3. 创建页面
cp secure-template.html parent-handbook.html
# 编辑 parent-handbook.html，粘贴密文

# 4. 本地测试
# 用浏览器打开 parent-handbook.html
# 输入密码 Mz2026Parent 查看内容
```

### 示例2: 加密教案

```bash
# 加密L4第1周教案
node encrypt-content.js 教案-L4-Week1.md "TeachL4W1@2026"

# 创建页面
cp secure-template.html L4-syllabus.html
# 编辑并嵌入密文
```

---

## 密码管理策略

### 密码分发

```
家长手册密码：
├── 2026春季班家长：Mz2026Parent_Spring
├── 2026暑假班家长：Mz2026Parent_Summer
└── 定期更换：每学期更换一次

教案密码：
├── L4教案：TeachL4@2026
├── L5教案：TeachL5@2026
└── 通用教师密码：MengzhiTeacher2026
```

### 密码更新流程

1. 修改原始文档内容
2. 使用新密码重新加密
3. 更新网页中的密文
4. 通知授权用户新密码
5. 旧密码在一定过渡期后失效

---

## 安全注意事项

### ⚠️ 必须遵守

1. **原始文档不上传**
   - `.md` 原始文件只在本地保管
   - 只上传加密后的 `.enc` 或嵌入密文的 `.html`

2. **密码安全传输**
   - 不在Git commit message中写密码
   - 通过微信/私信单独发送密码
   - 不在公开渠道讨论密码

3. **定期更换密码**
   - 建议每学期更换一次
   - 人员变动时立即更换

### 🔒 安全增强（可选）

```javascript
// 在 secure-template.html 中添加以下限制

// 1. 限制访问次数
let attemptCount = 0;
const MAX_ATTEMPTS = 5;

function unlock() {
  if (attemptCount >= MAX_ATTEMPTS) {
    alert('尝试次数过多，请1小时后再试');
    return;
  }
  // ... 原逻辑
}

// 2. 添加访问日志（发送到私有服务器）
function logAccess(success) {
  fetch('https://your-private-server.com/log', {
    method: 'POST',
    body: JSON.stringify({
      page: CONFIG.pageTitle,
      time: new Date().toISOString(),
      success: success,
      ip: 'user-ip' // 需要后端配合
    })
  });
}

// 3. 设置内容有效期
const EXPIRE_DATE = '2026-12-31';
if (new Date() > new Date(EXPIRE_DATE)) {
  alert('此内容已过期，请联系管理员获取新版本');
}
```

---

## 批量加密脚本

创建 `batch-encrypt.sh`：

```bash
#!/bin/bash
# 批量加密脚本

PASSWORD_PARENT="Mz2026Parent"
PASSWORD_TEACHER="MengzhiTeacher2026"

echo "🔐 批量加密开始..."

# 加密家长相关文档
for file in original/家长*.md; do
  if [ -f "$file" ]; then
    echo "加密: $file"
    node encrypt-content.js "$file" "$PASSWORD_PARENT" "secure/$(basename $file .md).enc"
  fi
done

# 加密教案
for file in original/教案*.md; do
  if [ -f "$file" ]; then
    echo "加密: $file"
    node encrypt-content.js "$file" "$PASSWORD_TEACHER" "secure/$(basename $file .md).enc"
  fi
done

echo "✅ 批量加密完成"
```

使用：
```bash
chmod +x batch-encrypt.sh
./batch-encrypt.sh
```

---

## 常见问题

### Q1: 忘记密码怎么办？

**A**: 无法恢复。需要：
1. 找到原始 `.md` 文件
2. 使用新密码重新加密
3. 分发新密码

**预防措施**：
- 密码本保存在安全的地方
- 设置密码提示（不直接显示密码）
- 多人保管不同部分的密码

### Q2: 密文可以公开吗？

**A**: 可以。AES加密强度足够，只要密码不泄露，密文公开是安全的。

### Q3: 如何防止密码被暴力破解？

**A**: 
- 使用8位以上复杂密码（字母+数字+符号）
- 添加访问次数限制
- 定期更换密码
- 不要使用常见密码

### Q4: 可以嵌入图片吗？

**A**: 可以。方案：
1. 图片单独存放在公开目录
2. Markdown中引用图片URL
3. 加密后的内容解密后会正常显示图片

```markdown
![说明](/public/images/diagram.png)
```

---

## 下一步行动

### 立即执行

- [ ] 安装依赖：`npm install crypto-js`
- [ ] 测试加密：`node encrypt-content.js 测试.md "test123"`
- [ ] 创建第一个加密页面
- [ ] 设置密码分发流程

### 本周完成

- [ ] 加密现有敏感文档
- [ ] 创建密码管理制度
- [ ] 培训其他教师使用

### 持续维护

- [ ] 定期更换密码（每学期）
- [ ] 备份原始文档
- [ ] 监控访问情况（可选）

---

**方案实施完成时间**: 2026-03-27  
**文档版本**: v1.0  
**维护者**: 明夷
