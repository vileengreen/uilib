#!/usr/bin/env sh

# 当发生错误时中止脚本
#set -e

# 构建
npm run lib

#发布到npm
#npm config set registry https://registry.npmjs.org/ 
#第一次发布，需要执行 npm adduser 添加保存账号信息到，创建或验证<username>在指定注册表中命名的用户，并将凭据保存到该.npmrc文件
#npm adduser
#username : liuyeqing
#pwd : 1039056604
#email:1594755125@qq.com

#npm publish@版本号
npm publish

# cd 到构建输出的目录下 
#cd lib
echo "npm publish"

# 部署到自定义域域名
# echo 'www.example.com' > CNAME


git init
git checkout dev
git add -A
git commit -m 'deploy'


# 部署到 github
#gitlab https://gitlab.foresee.com.cn/liuyeqing/uilib.git
#git@gitlab.foresee.com.cn:liuyeqing/uilib.git
#git push -f  https://vileengreen:lyq.1039056604@github.com/vileengreen/uilib

git push -f  https://liuyeqing:123456@gitlab.foresee.com.cn/liuyeqing/uilib


#$npm_package_version

cd -