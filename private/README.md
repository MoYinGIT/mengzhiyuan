# 🔐 个人知识库加密说明

## 加密方案

本个人知识库采用**前端静态加密**方案，特点：

1. **纯静态部署** - 无需后端服务器
2. **SHA256 密码验证** - 密码永不传输到服务器
3. **LocalStorage 令牌** - 30天自动过期
4. **无索引保护** - robots.txt 阻止搜索引擎收录

## 默认密码

- **密码**: `MoYin@2026`
- **修改方式**: 编辑 `login.html` 中的 `DEFAULT_HASH` 值

## 生成新密码哈希

```javascript
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// 使用
const hash = await sha256('你的新密码');
console.log(hash);
```

## 文件说明

| 文件 | 作用 |
|:---|:---|
| `login.html` | 密码验证登录页面 |
| `public/auth-check.js` | 访问验证脚本 |
| `.vitepress/config.mjs` | VitePress配置（包含安全头） |

## 部署

个人知识库建议部署到：
1. **Vercel** - 支持密码保护环境变量
2. **Mac本地服务器** - 仅内网访问
3. **Cloudflare Pages** - 支持访问控制

不建议部署到 GitHub Pages（公开）。
