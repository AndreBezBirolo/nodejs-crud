import {sql} from './db.js'
import {randomUUID} from "node:crypto";


export class DatabasePostgres {
    async getById(id) {
        await sql`select *
                  from courses
                  WHERE id = ${id}`;
    }

    async list(queryTitle) {
        let courses;

        if (queryTitle) {
            courses = await sql`select *
                                from courses
                                where title ilike ${'%' + queryTitle + '%'}`
        } else {
            courses = await sql`select *
                                from courses`
        }

        return courses;
    }

    async create(course) {
        const id = randomUUID();
        const {title, description, duration} = course;

        await sql`insert into courses (id, title, description, duration)
                  VALUES (${id}, ${title}, ${description}, ${duration})`
    }

    async update(id, course) {
        const {title, description, duration} = course;

        await sql`update courses
                  set title       = ${title},
                      description = ${description},
                      duration    = ${duration}
                  WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete
                  from courses
                  where id = ${id}`
    }
}