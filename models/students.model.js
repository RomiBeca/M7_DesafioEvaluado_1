import 'dotenv/config'
import { pool } from '../database/connection.js'


const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM STUDENTS')
    return rows
}

const findByRut = async (rut) => {
    const query = {
        text: `
            SELECT * FROM STUDENTS WHERE RUT = $1
        `,
        values: [rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const create = async ({ nombre, rut, clase, nivel }) => {
    const query = {
        text: `
                INSERT INTO STUDENTS (nombre, rut, clase, nivel)
                VALUES ($1, $2, $3, $4)
                RETURNING *
            `,
        values: [nombre, rut, clase, nivel]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const update = async ({ rut, nombre, clase, nivel }) => {
    const query = {
        text: `
                UPDATE STUDENTS
                SET 
                NOMBRE = $2,
                CLASE = $3,
                NIVEL = $4
                WHERE RUT = $1
                RETURNING * 
            `,
        values: [rut, nombre, clase, nivel]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (rut) => {
    const query = {
        text: `
            DELETE FROM STUDENTS WHERE RUT = $1
            RETURNING *
        `,
        values: [rut]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

export const student = {
    findAll,
    findByRut,
    create,
    update,
    remove

}