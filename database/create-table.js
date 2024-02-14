import {sql} from './db.js';

sql`
    DROP TABLE IF EXISTS courses
`
    .then(() => {
        console.log('Tabela apagada')
    })
sql`
    CREATE TABLE courses
    (
        ID          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    )
`
    .then(() => {
        console.log('Tabela criada')
    })
