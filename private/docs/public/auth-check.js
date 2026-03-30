// 「默隐·蒙知苑」个人知识库 - 访问验证脚本
// 在页面头部加载，执行访问控制

(function() {
  'use strict';
  
  // 获取基础路径（适配GitHub Pages子目录部署）
  const basePath = window.location.pathname.includes('/mengzhiyuan/') 
    ? '/mengzhiyuan/private/' 
    : '/private/';
  
  // 排除登录页面本身
  const path = window.location.pathname;
  if (path.includes('login.html') || path.endsWith('/login')) {
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
    window.location.replace(basePath + 'login.html');
    return;
  }
  
  // 验证通过
  console.log('🔐 个人知识库 - 访问已授权');
})();

// 注销函数（全局可用）
function logout() {
  if (confirm('确定要退出登录吗？')) {
    localStorage.removeItem('mzy_private_token');
    localStorage.removeItem('mzy_private_expires');
    const basePath = window.location.pathname.includes('/mengzhiyuan/') 
      ? '/mengzhiyuan/private/' 
      : '/private/';
    window.location.href = basePath + 'login.html';
  }
}
