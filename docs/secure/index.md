---
layout: doc
---

# 🔒 加密内容专区

> 以下内容需要密码才能访问。请输入密码解锁完整内容。

---

## 请输入密码

<div style="max-width: 400px; margin: 30px auto; padding: 30px; background: #f8f9fa; border-radius: 12px; text-align: center;">
  <div style="font-size: 3em; margin-bottom: 15px;">🔐</div>
  <p style="color: #666; margin-bottom: 20px;">此页面包含加密内容，需要密码才能访问</p>
  
  <input type="password" id="pagePassword" placeholder="请输入密码..." 
    style="width: 100%; padding: 12px 16px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; margin-bottom: 15px;">
  
  <button onclick="checkPassword()" 
    style="width: 100%; padding: 12px; background: #667eea; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
    解锁内容
  </button>
  
  <p id="errorMsg" style="color: #e74c3c; margin-top: 15px; display: none;">密码错误，请重试</p>
</div>

<script>
function checkPassword() {
  const pwd = document.getElementById('pagePassword').value;
  if (pwd === 'MoYin123') {
    document.getElementById('secureContent').style.display = 'block';
    document.querySelector('.password-box').style.display = 'none';
  } else {
    document.getElementById('errorMsg').style.display = 'block';
  }
}

document.getElementById('pagePassword').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') checkPassword();
});
</script>

<div class="password-box">
  <!-- 密码输入框在上面的div中 -->
</div>

<div id="secureContent" style="display: none;">

---

## 📚 加密内容目录

### 🎓 GESP考级体系

| 内容 | 说明 | 链接 |
|:---|:---|:---:|
| GESP考级导航 | L1-L8完整教学体系入口 | [> 访问](/secure/gesp/) |
| GESP考级大纲全集 | L1-L8完整大纲，37KB知识点 | [> 访问](/secure/gesp/GESP-考级大纲全集.html) |
| GESP教学操作手册 | 144小时详细教案 | [> 访问](/secure/gesp/GESP教学操作手册-三阶段完整版.html) |
| L4-L8教学手册 | 进阶教学体系，300小时规划 | [> 访问](/secure/gesp/L4-L8-teaching-manual.html) |
| GESP+AI整合方案 | AI工具与GESP教学深度融合 | [> 访问](/secure/gesp/gesp-ai-integration-plan.html) |
| GESP辅导实战方案 | 基于刷题经验的实战指南 | [> 访问](/secure/gesp/gesp-tutoring-practical-plan.html) |
| 教案示例 | Day13 while循环详细教案 | [> 访问](/secure/gesp/GESP教案-Day13-while循环.html) |

### 🤖 AI教学助手

| 内容 | 说明 | 链接 |
|:---|:---|:---:|
| 智谱清言教学提示词 | 7大场景教学提示词 | [> 访问](/secure/ai/zhipu-qingyan-teaching-prompts.html) |

### 🧠 学习科学

| 内容 | 说明 | 链接 |
|:---|:---|:---:|
| 心理学+学习科学融合方案 | 认知心理学、心流培养 | [> 访问](/secure/psychology/psychology-learning-science-plan.html) |
| 屏幕使用与心流策略 | 屏幕管理与专注培养 | [> 访问](/secure/psychology/screen-time-flow-teaching-strategies.html) |
| 心理驿站 | 儿童学习心理、亲子沟通 | [> 访问](/secure/psychology/) |
| 亲子沟通技巧 | 如何与孩子有效沟通 | [> 访问](/secure/psychology/communication.html) |

---

</div>

---

## 💡 提示

- 如果您不知道密码，请联系**默隐**获取
- 所有加密内容仅供授权用户访问
- 请勿将密码分享给未经授权的人员

[← 返回首页](/)

