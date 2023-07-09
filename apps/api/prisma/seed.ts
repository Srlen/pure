import { PrismaClient } from '@prisma/client'


(async () => {
    const prisma = new PrismaClient()
    await prisma.$connect()
    const watch = await prisma.watch.create({
            data: {
               name: 'SAS'
            },
        })
    console.log(watch)
})()