import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')

// Execute SQL statements to create the table

db.exec(`
    CREATE TABLE user {
        id INTEGER,
        username TEXT UNIQUE,
        password TEXT
    }
    `)