import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const userRoles: UserRole[] = [UserRole.ADMIN];

async function main() {
  console.log("Start seeding ...");
  for (const u of userRoles) {
    // const role = await prisma.role.create({
    //   data: u,
    // });
    console.log(`Created user with id: ${u}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
