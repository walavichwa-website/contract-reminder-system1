import { PrismaClient } from '@prisma/client';

const globalThisAny = globalThis as any;

const prisma = globalThisAny.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThisAny.prisma = prisma;
}

export default prisma;