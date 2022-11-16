import { PrismaClient } from '@prisma/client'

/**
 * TODO: Set up to run on the prisma command "prisma migrate dev"
 * This will check and populate (if its not found) the database tables
 */
const prisma = new PrismaClient()

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'danielchittenden@yahoo.com' },
    update: {},
    create: {
      email: 'danielchittenden@yahoo.com',
      name: 'EndGameItemsAdmin',
    },
  })
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