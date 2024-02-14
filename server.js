import {fastify} from "fastify";
import {DatabasePostgres} from "./database/database-postgres.js";

const server = fastify();
// const db = new DatabaseMemory();
const db = new DatabasePostgres();

server.get('/courses', async (req, res) => {
    const queryTitle = req.query.title;

    return await db.list(queryTitle);
})

server.post('/courses', async (req, res) => {
    const {title, description, duration} = req.body

    const course = {
        title,
        description,
        duration
    }

    await db.create(course)

    return res.status(201).send(course);
})

server.get('/courses/:id', async (req, res) => {
    return await db.getById(req.params.id);
})

server.put('/courses/:id', async (req, res) => {
    const id = req.params.id;
    const {title, description, duration} = req.body
    const course = {
        title,
        description,
        duration
    }

    await db.update(id, course);

    return res.status(204).send(course)
})

server.delete('/courses/:id', async (req, res) => {
    const id = req.params.id;
    await db.delete(id);

    return res.status(204).send();
})

server.listen({port: 8080});