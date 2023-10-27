import { PrismaClient } from "@prisma/client";

//Adiciona o prisma aos tipos globais do NodeJS
declare global {
    var prisma: PrismaClient
}

//Evita multiplas instamncias do cliente Prisma     
const prisma = global.prisma || new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

//Em desenvolvimento é criado por hot-reolading (recarga automatica)
if (process.env.NODE_ENV === 'decelopment') {
    global.prisma = prisma
}

export { prisma }