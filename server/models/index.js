const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const allOrders = await prisma.request.findMany();
  console.log(allOrders);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
