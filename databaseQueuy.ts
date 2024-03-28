import { PrismaClient } from '@prisma/client' //导入prisma包

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await getListDatabasesName();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// 返回所连接数据源中的所有数据库列表名称
async function getListDatabasesName(){
    const Dbs :any = await prisma.db.admin().listDabases();
    return Dbs.Database.map(dbName => console.log(dbName))
}