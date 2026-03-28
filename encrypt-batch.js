// 批量加密脚本 - 用于加密「默隐·蒙知苑」敏感内容
const CryptoJS = require('crypto-js');
const fs = require('fs');
const path = require('path');

// 配置
const PASSWORD = 'MoYin123';
const OUTPUT_DIR = './secure-pages';

// 要加密的文件列表
const filesToEncrypt = [
    // GESP考级体系
    { file: 'programming/gesp/index.md', title: 'GESP考级体系', desc: 'L1-L8完整教学体系，包含考级大纲、教学手册、实战方案' },
    { file: 'programming/gesp/GESP-考级大纲全集.md', title: 'GESP考级大纲全集', desc: 'L1-L8完整大纲，37KB知识点详解' },
    { file: 'programming/gesp/GESP教学操作手册-三阶段完整版.md', title: 'GESP教学操作手册', desc: '144小时详细教案，暑假/秋季/寒假三阶段' },
    { file: 'programming/gesp/GESP教案-Day13-while循环.md', title: 'GESP教案示例', desc: 'Day13 while循环详细教案' },
    { file: 'programming/gesp/gesp-ai-integration-plan.md', title: 'GESP+AI整合方案', desc: 'AI工具与GESP教学深度融合方案' },
    { file: 'programming/gesp/gesp-tutoring-practical-plan.md', title: 'GESP辅导实战方案', desc: '基于刷题经验的实战辅导指南' },
    { file: 'programming/gesp/L4-L8-teaching-manual.md', title: 'L4-L8教学手册', desc: '进阶教学体系，300小时详细规划' },
    
    // AI教学助手
    // { file: 'programming/zhipu-qingyan-teaching-prompts.md', title: '智谱清言教学提示词', desc: '7大场景教学提示词，备课/授课/答疑全覆盖' },
    // 已停用：文心一言相关文件
    
    // 学习科学
    { file: 'psychology/psychology-learning-science-plan.md', title: '心理学+学习科学融合方案', desc: '认知心理学、心流培养、屏幕使用管理' },
    { file: 'psychology/screen-time-flow-teaching-strategies.md', title: '屏幕使用与心流策略', desc: '编程学习中的屏幕管理与专注培养' },
    { file: 'psychology/index.md', title: '心理驿站', desc: '儿童学习心理、家长情绪管理、亲子沟通' },
    { file: 'psychology/communication.md', title: '亲子沟通技巧', desc: '如何与孩子有效沟通，建立良好亲子关系' },
    
    // 加密工具指南（公开）
    // { file: 'tools/ENCRYPTION-GUIDE.md', title: '加密方案指南', desc: '前端加密实施方案' },
];

// 加密函数
function encryptContent(content, password) {
    return CryptoJS.AES.encrypt(content, password).toString();
}

// 创建加密HTML页面
function createSecurePage(title, desc, encryptedContent) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - 加密内容 | 默隐·蒙知苑</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 600px;
            width: 100%;
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 1.8em;
            margin-bottom: 10px;
        }
        
        .header .subtitle {
            opacity: 0.9;
            font-size: 0.95em;
        }
        
        .content-preview {
            padding: 30px;
            background: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
        }
        
        .content-preview h2 {
            color: #333;
            font-size: 1.2em;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .content-preview .desc {
            color: #666;
            line-height: 1.6;
        }
        
        .content-preview .meta {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px dashed #ddd;
            font-size: 0.85em;
            color: #888;
        }
        
        .unlock-section {
            padding: 30px;
        }
        
        .unlock-section h3 {
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .password-input {
            width: 100%;
            padding: 15px 20px;
            font-size: 16px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            transition: all 0.3s ease;
            margin-bottom: 15px;
        }
        
        .password-input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .unlock-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .unlock-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        
        .unlock-btn:active {
            transform: translateY(0);
        }
        
        .error-msg {
            color: #e74c3c;
            text-align: center;
            margin-top: 15px;
            display: none;
        }
        
        .error-msg.show {
            display: block;
        }
        
        .decrypted-content {
            display: none;
            padding: 30px;
        }
        
        .decrypted-content.show {
            display: block;
        }
        
        .decrypted-content pre {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.8;
        }
        
        .back-link {
            display: block;
            text-align: center;
            padding: 20px;
            color: #667eea;
            text-decoration: none;
            border-top: 1px solid #e9ecef;
            transition: background 0.2s;
        }
        
        .back-link:hover {
            background: #f8f9fa;
        }
        
        .lock-icon {
            font-size: 3em;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="lock-icon">🔒</div>
            <h1>${title}</h1>
            <div class="subtitle">默隐·蒙知苑 · 加密内容</div>
        </div>
        
        <div class="content-preview">
            <h2>📋 内容预览</h2>
            <div class="desc">${desc}</div>
            <div class="meta">
                🔐 此内容已加密，需要密码才能查看完整内容<br>
                📝 点击下方输入框，输入密码解锁
            </div>
        </div>
        
        <div class="unlock-section" id="unlockSection">
            <h3>🔑 输入密码解锁</h3>
            <input type="password" class="password-input" id="passwordInput" placeholder="请输入密码...">
            <button class="unlock-btn" onclick="decryptContent()">解锁内容</button>
            <div class="error-msg" id="errorMsg">密码错误，请重试</div>
        </div>
        
        <div class="decrypted-content" id="decryptedContent">
            <pre id="contentText"></pre>
        </div>
        
        <a href="/" class="back-link">← 返回首页</a>
    </div>
    
    <script>
        const encryptedData = '${encryptedContent}';
        
        function decryptContent() {
            const password = document.getElementById('passwordInput').value;
            const errorMsg = document.getElementById('errorMsg');
            const decryptedContent = document.getElementById('decryptedContent');
            const contentText = document.getElementById('contentText');
            const unlockSection = document.getElementById('unlockSection');
            
            try {
                const decrypted = CryptoJS.AES.decrypt(encryptedData, password).toString(CryptoJS.enc.Utf8);
                
                if (decrypted && decrypted.length > 0) {
                    contentText.textContent = decrypted;
                    decryptedContent.classList.add('show');
                    unlockSection.style.display = 'none';
                    errorMsg.classList.remove('show');
                    
                    // 滚动到内容区域
                    decryptedContent.scrollIntoView({ behavior: 'smooth' });
                } else {
                    errorMsg.classList.add('show');
                }
            } catch (e) {
                errorMsg.classList.add('show');
            }
        }
        
        // 回车键解锁
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                decryptContent();
            }
        });
    </script>
</body>
</html>`;
}

// 主函数
async function main() {
    console.log('🔐 开始批量加密...\n');
    
    // 创建输出目录
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    for (const item of filesToEncrypt) {
        const filePath = path.join('/root/.openclaw/workspace/mengzhiyuan/docs', item.file);
        
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  跳过: ${item.file} (文件不存在于 ${filePath})`);
            continue;
        }
        
        try {
            // 读取文件内容
            const content = fs.readFileSync(filePath, 'utf-8');
            
            // 加密
            const encrypted = encryptContent(content, PASSWORD);
            
            // 生成HTML文件名
            const baseName = path.basename(item.file, '.md');
            const outputFile = path.join(OUTPUT_DIR, `${baseName}.html`);
            
            // 创建加密页面
            const html = createSecurePage(item.title, item.desc, encrypted);
            fs.writeFileSync(outputFile, html);
            
            console.log(`✅ 已加密: ${item.title}`);
            console.log(`   源文件: ${item.file}`);
            console.log(`   输出: secure-pages/${baseName}.html`);
            console.log();
        } catch (err) {
            console.error(`❌ 错误: ${item.file} - ${err.message}`);
        }
    }
    
    console.log('\n📦 加密完成！');
    console.log(`📁 输出目录: ${OUTPUT_DIR}/`);
    console.log(`🔑 密码: ${PASSWORD}`);
    console.log('\n💡 使用方式:');
    console.log('   1. 将 secure-pages/ 目录下的文件复制到 docs/secure/');
    console.log('   2. 更新首页链接指向加密版本');
    console.log('   3. 提交到 GitHub');
}

main().catch(console.error);
