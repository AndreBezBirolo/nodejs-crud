import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #courses = new Map()

    list() {
        return this.#courses.values();
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