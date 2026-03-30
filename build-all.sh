#!/bin/bash
echo "🏗️  构建所有站点..."
cd "$(dirname "$0")"

for site in portal private student parent; do
    echo "📦 构建 $site..."
    cd "$site"
    npm install --silent 2>/dev/null || true
    npm run docs:build
    cd ..
done

echo "✅ 全部构建完成！"
