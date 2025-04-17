const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 1. 提供静态文件（JS/CSS/图片等）
app.use(express.static('dist'));

// 2. 处理 SPA 路由（所有未匹配的请求返回 index.html）
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 3. 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});