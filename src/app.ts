import fastify from "fastify";
import { PrismaClient } from '@prisma/client'

export const app = fastify()

app.post('/users', (request, reply) => {
    
})