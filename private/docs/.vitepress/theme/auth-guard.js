// 「默隐·蒙知苑」个人知识库 - 访问验证脚本
// 在每个受保护页面加载时执行验证

(function() {
  'use strict';
  
  // 排除登录页面本身
  if (window.location.pathname.endsWith('login.html') || 
      window.location.pathname.endsWith('/login')) {
    return;
  }
  
  // 检查验证状态
  const token = localStorage.getItem('mzy_private_token');
  const expires = localStorage.getItem('mzy_private_expires');
  
  // 验证是否过期
  if (!token || !expires || Date.now() >= parseInt(expires)) {
    // 清除过期数据
    localStorage.removeItem('mzy_private_token');
    localStorage.removeItem('mzy_private_expires');
    
    // 保存当前URL以便登录后返回
    sessionStorage.setItem('mzy_redirect_url', window.location.href);
    
    // 重定向到登录页面
    window.location.href = '/private/login.html';
    return;
  }
  
  // 验证通过，页面正常显示
  console.log('🔐 个人知识库 - 访问已授权');
})();
