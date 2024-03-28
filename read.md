git init, git status 查看到read.md => git add .
git commit -m 'first commit read.md'

// 从本地建项目后push到github要先在github上建仓选择公开或私有属性，然后才能push成功
git remote add origin https://github.com/NAME/issue-tracker.git


检查vscode有否装插件 ES7,Javasc and TypeScript Nightly,Taiwind,Prisma

npx create-next-app PJ-NAME // build项目 先用test.tsx试下插件
commit first init

Prisma ORM 
npm i typescript ts-node @types/node --save-dev
npx tsc --init // 初始化TS
npm install prisma --save-dev //安装 Prisma CLI 作为开发依赖
npx prisma init --datasource-provider sqlite | mysql | postgres | mongodb //配置数据库