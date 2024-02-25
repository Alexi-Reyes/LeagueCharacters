import champions from './champions.json' assert { type: 'json' };
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

champions.forEach(champion => {
  prisma.champion.create({
    data: {
      name: champion.name,
      type: champion.type
    }
  })
  .then((error) => {
      console.log(error)
  })
})
