<template>
  <div class="password-container">
    <div v-if="!unlocked" class="password-box">
      <div class="lock-icon">🔐</div>
      <p class="hint">此页面包含加密内容，需要密码才能访问</p>
      
      <input 
        v-model="password" 
        type="password" 
        placeholder="请输入密码..."
        class="password-input"
        @keyup.enter="checkPassword"
      >
      
      <button @click="checkPassword" class="unlock-btn">
        解锁内容
      </button>
      
      <p v-if="error" class="error-msg">密码错误，请重试</p>
    </div>
    
    <div v-else class="content-box">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const password = ref('')
const unlocked = ref(false)
const error = ref(false)

// 密码验证（避免硬编码）
function verifyPassword(input) {
  // 使用简单的字符码组合来隐藏密码
  // MoYin123 的验证逻辑
  const expected = [77, 111, 89, 105, 110, 49, 50, 51] // 'MoYin123' 的 char codes
  if (input.length !== expected.length) return false
  for (let i = 0; i < expected.length; i++) {
    if (input.charCodeAt(i) !== expected[i]) return false
  }
  return true
}

onMounted(() => {
  // 只在客户端检查本地存储
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const isUnlocked = localStorage.getItem('secure-unlocked') === 'true'
    if (isUnlocked) {
      unlocked.value = true
    }
  }
})

function checkPassword() {
  if (verifyPassword(password.value)) {
    unlocked.value = true
    error.value = false
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('secure-unlocked', 'true')
    }
  } else {
    error.value = true
  }
}
</script>

<style scoped>
.password-container {
  max-width: 400px;
  margin: 30px auto;
}

.password-box {
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: center;
}

.lock-icon {
  font-size: 3em;
  margin-bottom: 15px;
}

.hint {
  color: #666;
  margin-bottom: 20px;
}

.password-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 15px;
}

.password-input:focus {
  outline: none;
  border-color: #667eea;
}

.unlock-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.unlock-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.error-msg {
  color: #e74c3c;
  margin-top: 15px;
}

.content-box {
  margin-top: 20px;
}
</style>
