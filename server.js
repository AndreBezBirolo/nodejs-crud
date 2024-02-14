import {fastify} from "fastify";
import {DatabaseMemory} from "./database-memory.js";

const server = fastify();
const db = new DatabaseMemory();

server.get('/courses', (req, res) => {
    const queryTitle = req.query.title;

    return db.list(queryTitle);
})

server.post('/courses', (req, res) => {
    const { title, description, duration } = req.body

    const course = {
        title,
        description,
        duration
    }

    db.create(course)

    return res.status(201).send(course);
})

server.get('/courses/:id', (req, res) => {
    return db.getById(req.params.id);
})

server.put('/courses/:id', (req, res) => {
    const id = req.params.id;
    const { title, description, duration } = req.body
    const course = {
        title,
        description,
        duration
    }

    db.update(id, course);

    return res.status(204).send(course)
})

server.delete('/courses/:id', (req, res) => {
    const id = req.params.id;
    db.delete(id);

    return res.status(204).send();
})

server.listen({ port: 8080 });