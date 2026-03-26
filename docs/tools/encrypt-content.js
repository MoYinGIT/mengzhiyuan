#!/usr/bin/env node
/**
 * 默隐·蒙知苑 - 内容加密工具
 * Mengzhi Academy Content Encryption Tool
 * 
 * 使用方法:
 *   node encrypt-content.js <input.md> <password> [output.enc]
 * 
 * 示例:
 *   node encrypt-content.js 家长手册.md "Mz123456" 家长手册.enc
 *   node encrypt-content.js 教案-L4-Week1.md "Teach2026"
 */

const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

// 检查参数
if (process.argv.length < 4) {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║     默隐·蒙知苑 - 内容加密工具 (方案A: 前端加密)          ║
╚══════════════════════════════════════════════════════════╝

用法:
  node encrypt-content.js <输入文件> <密码> [输出文件]

参数:
  <输入文件>  要加密的Markdown或HTML文件路径
  <密码>      访问密码（建议8位以上，含字母数字）
  [输出文件]  可选，默认: <输入文件>.enc

示例:
  node encrypt-content.js 家长手册.md "Mz2026Parent"
  node encrypt-content.js 教案-L4.md "TeachL4@2026" 教案-L4.enc

注意:
  - 密码请妥善保管，遗忘后无法恢复内容
  - 建议定期更换密码并通知授权用户
  - 加密后的.enc文件可以安全上传至公开仓库
`);
  process.exit(1);
}

const inputFile = process.argv[2];
const password = process.argv[3];
const outputFile = process.argv[4] || `${inputFile}.enc`;

// 检查输入文件
if (!fs.existsSync(inputFile)) {
  console.error(`❌ 错误: 找不到文件 "${inputFile}"`);
  process.exit(1);
}

// 读取内容
const content = fs.readFileSync(inputFile, 'utf-8');
console.log(`📖 读取文件: ${inputFile} (${content.length} 字符)`);

// 加密
const encrypted = CryptoJS.AES.encrypt(content, password).toString();
console.log(`🔐 加密完成: ${encrypted.length} 字符`);

// 保存
fs.writeFileSync(outputFile, encrypted);
console.log(`💾 保存至: ${outputFile}`);

// 生成HTML片段（可选）
const htmlSnippet = `<!-- 加密内容片段 - 可嵌入 secure-template.html -->
<script id="encrypted-data" type="text/encrypted">
${encrypted}
</script>`;

const htmlFile = `${outputFile}.html-snippet`;
fs.writeFileSync(htmlFile, htmlSnippet);
console.log(`📄 HTML片段: ${htmlFile}`);

// 显示信息
console.log(`
✅ 加密成功!

密码: ${password}
输出: ${outputFile}

下一步:
1. 将 ${outputFile} 或 ${htmlFile} 中的内容复制到网站
2. 使用 secure-template.html 作为页面模板
3. 将密码安全分发给授权用户

⚠️  安全提醒:
   - 原始文件 ${inputFile} 仍保留在本地，请妥善保管或删除
   - 密码是唯一的解密方式，请勿丢失
`);
