import { PrismaClient } from '@prisma/client';


/**
 * Mostly just used for quickly testing
 */
const prisma = new PrismaClient({log: ["query"]})

async function main() {
	const  user = await prisma.user.create({
		data: {
			name: "Dude",
			email: "someshit"
		},
	})
	const user2 = await prisma.user.findMany();
	console.log(user2);
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