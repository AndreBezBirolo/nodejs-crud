import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

server.post('/courses', () => {

})

server.get('/courses/:id', (req, res) => {

})

server.put('/courses/:id', (req, res) => {

})

server.delete('/courses/:id', (req, res) => {

})

server.listen({ port: 8080 });