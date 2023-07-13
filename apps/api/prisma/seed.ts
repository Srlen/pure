import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
function range(start: number, end: number, step: number = 1) {
  const nums = []
  for (let i = start; i < end; i += step) {
    nums.push(i)
  }
  return nums
}
(async () => {
  const prisma = new PrismaClient();
  await prisma.$connect();
  for (const i in range(1, 10)) {
    const watch = await prisma.watch.create({
      data: {
        name: faker.person.firstName(),
        theme: Math.floor(Math.random() * 3)
      },
    });
    console.log(watch);
  }

})();
