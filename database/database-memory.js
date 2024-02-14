import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #courses = new Map()

    getById(id) {
        return this.#courses.get(id);
    }

    list(queryTitle) {
        return Array.from(
            this.#courses.entries()
        )
            .map((courseArray) => {
            const id = courseArray[0];
            const data = courseArray[1];

            return {
                id,
                ...data
            }
        })
            .filter(course => {
                if (queryTitle) {
                    return course.title.includes(queryTitle)
                }
                return true
            })
    }

    create(course) {
        const id = randomUUID();
        this.#courses.set(id, course);
    }

    update(id, course) {
        this.#courses.set(id, course);
    }

    delete(id) {
        this.#courses.delete(id)
    }
}