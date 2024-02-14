import { fastify } from "fastify";

const server = fastify();

server.get('/', () => {
    return 'Hello world';
});

server.get('/hello', () => {
    return 'Hello';
});

server.get('/node', () => {
    return 'Hello node.js';
});


server.listen({ port: 8080 });