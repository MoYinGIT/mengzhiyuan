#!/usr/bin/env node
/**
 * 批量加密教学研究页面
 * 密码: MoYin123
 */

const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

const PASSWORD = 'MoYin123';
const SOURCE_DIR = '/root/.openclaw/workspace/mengzhiyuan/docs/world-top-forums';
const SECURE_DIR = '/root/.openclaw/workspace/mengzhiyuan/docs/secure/world-top-forums';
const TEMPLATE_FILE = '/root/.openclaw/workspace/mengzhiyuan/docs/tools/secure-template.html';

// 确保目录存在
if (!fs.existsSync(SECURE_DIR)) {
  fs.mkdirSync(SECURE_DIR, { recursive: true });
}

// 读取模板
const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

// 页面标题映射
const pageTitles = {
  'index.md': '教学研究首页',
  'AI-Machine-Learning.md': 'AI与机器学习研究',
  'Mathematics-Core.md': '数学核心研究',
  'Mengzhiyuan-Integration.md': '蒙知苑整合研究',
  'Psychology-Core.md': '心理学核心研究',
  'Sociology-Education.md': '社会学与教育研究'
};

// 加密文件
function encryptFile(filename) {
  const inputPath = path.join(SOURCE_DIR, filename);
  const content = fs.readFileSync(inputPath, 'utf-8');
  
  // 加密
  const encrypted = CryptoJS.AES.encrypt(content, PASSWORD).toString();
  
  // 生成HTML文件名
  const htmlName = filename.replace('.md', '.html');
  const outputPath = path.join(SECURE_DIR, htmlName);
  
  // 获取页面标题
  const pageTitle = pageTitles[filename] || filename.replace('.md', '');
  
  // 替换模板中的配置
  let html = template;
  html = html.replace(/pageTitle:\s*["'][^"']*["']/, `pageTitle: "${pageTitle}"`);
  html = html.replace(/encryptedContent:\s*["'][^"']*["']/, `encryptedContent: "${encrypted}"`);
  
  // 特殊处理：替换模板中的密文占位符
  // 查找 CONFIG 对象并替换
  const configMatch = html.match(/const\s+CONFIG\s*=\s*\{[\s\S]*?\};/);
  if (configMatch) {
    const newConfig = `const CONFIG = {
  // 加密内容 - 使用AES加密
  encryptedContent: "${encrypted}",
  
  // 页面配置
  pageTitle: "${pageTitle}",
  passwordPlaceholder: "请输入访问密码",
  
  // 功能开关
  showPasswordHint: false,
  passwordHint: "",
  rememberUnlock: true,
  
  // 界面文本
  unlockButtonText: "🔓 解锁内容",
  lockButtonText: "🔒 重新加密",
  errorMessage: "密码错误，请重试",
  
  // 外观配置
  theme: {
    primaryColor: "#5c7cfa",
    backgroundColor: "#0d1117",
    cardBackground: "#161b22",
    textColor: "#c9d1d9",
    borderColor: "#30363d"
  }
};`;
    html = html.replace(configMatch[0], newConfig);
  }
  
  // 保存HTML文件
  fs.writeFileSync(outputPath, html);
  
  console.log(`✅ ${filename} -> ${htmlName}`);
  console.log(`   📄 标题: ${pageTitle}`);
  console.log(`   🔐 加密: ${content.length} 字符 -> ${encrypted.length} 字符`);
  
  return { filename, htmlName, pageTitle };
}

// 批量加密
console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║     批量加密「默隐·蒙知苑」教学研究页面                   ║');
console.log('╚══════════════════════════════════════════════════════════╝');
console.log(`\n📁 源目录: ${SOURCE_DIR}`);
console.log(`📁 目标目录: ${SECURE_DIR}`);
console.log(`🔑 密码: ${PASSWORD}\n`);

const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));
const results = [];

for (const file of files) {
  try {
    const result = encryptFile(file);
    results.push(result);
    console.log('');
  } catch (err) {
    console.error(`❌ 加密失败: ${file} - ${err.message}`);
  }
}

// 生成索引页面
const indexHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🔒 教学研究专区 - 默隐·蒙知苑</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
      background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
      min-height: 100vh;
      color: #c9d1d9;
      padding: 40px 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      margin-bottom: 40px;
      padding: 30px;
      background: rgba(92, 124, 250, 0.1);
      border-radius: 16px;
      border: 1px solid rgba(92, 124, 250, 0.3);
    }
    h1 {
      font-size: 2em;
      margin-bottom: 10px;
      background: linear-gradient(90deg, #5c7cfa, #845ef7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      color: #8b949e;
    }
    .page-list {
      display: grid;
      gap: 16px;
    }
    .page-card {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }
    .page-card:hover {
      border-color: #5c7cfa;
      transform: translateX(8px);
      box-shadow: 0 4px 20px rgba(92, 124, 250, 0.2);
    }
    .page-info h3 {
      color: #c9d1d9;
      margin-bottom: 4px;
    }
    .page-info p {
      color: #8b949e;
      font-size: 0.9em;
    }
    .lock-icon {
      font-size: 1.5em;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      padding: 20px;
      color: #6e7681;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🔒 教学研究专区</h1>
      <p class="subtitle">默隐·蒙知苑内部研究资料</p>
    </header>
    
    <div class="page-list">
      ${results.map(r => `
      <a href="${r.htmlName}" class="page-card">
        <div class="page-info">
          <h3>${r.pageTitle}</h3>
          <p>点击查看详细内容</p>
        </div>
        <span class="lock-icon">🔐</span>
      </a>
      `).join('')}
    </div>
    
    <div class="footer">
      <p>© 2026 默隐·蒙知苑 | 内部资料，请勿外传</p>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(SECURE_DIR, 'index.html'), indexHtml);

console.log('╔══════════════════════════════════════════════════════════╗');
console.log('║                    ✅ 加密完成!                           ║');
console.log('╚══════════════════════════════════════════════════════════╝');
console.log(`\n📊 统计:`);
console.log(`   加密文件数: ${results.length}`);
console.log(`   输出目录: ${SECURE_DIR}`);
console.log(`   密码: ${PASSWORD}`);
console.log(`\n📁 生成的文件:`);
results.forEach(r => console.log(`   - ${r.htmlName}`));
console.log(`   - index.html (索引页面)`);
console.log(`\n🔗 访问地址:`);
console.log(`   https://moyingit.github.io/mengzhiyuan/secure/world-top-forums/`);
