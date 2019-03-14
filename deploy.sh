#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
#npm run lib

# cd 到构建输出的目录下 
#cd lib

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

#发布到npm
#liuyeqing / 1039056604



git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git@github.com:vileengreen/uilib.git
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:vileengreen/uilib.git master:gh-pages
git push -f git@github.com:vileengreen/vileengreen.github.io.git master -uilib

#npm publish
cd -