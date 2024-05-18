import { student } from '../models/students.model.js'
//get ✔ 
export const getStudents = async (req, res) => {
    try {
        const students = await student.findAll()
        return res.json(students)

    } catch (error) {
        console.log(error)
        return res.status(500)
    }

}
//get+rut ✔
export const getOneStudent = async (req, res) => {
    try {
        const { rut } = req.params
        const students = await student.findByRut(rut)
        return res.json(students)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }

}
//post ✔
export const createNewStudent = async (req, res) => {
    try {
        const { nombre, rut, clase, nivel } = req.body
        const newStudent = { nombre, rut, clase, nivel }
        const createdStudent = await student.create(newStudent)
        return res.json(createdStudent)
    } catch (error) {
        console.log(error)
        return res.status(500)

    }
};
//put ✔
export const updateStudent = async (req, res) => {
    try {
        const { rut } = req.params;
        const { nombre, clase, nivel } = req.body
        const studentUpdate = { rut, nombre, clase, nivel }
        const updatedStudent = await student.update(studentUpdate)
        return res.json(updatedStudent)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

//delete
export const removeStudent = async (req, res) => {
    try {
        const { rut } = req.params;
        await student.remove(rut);
        return res.json(student)
    } catch (error) {
        console.log(error)
        return res.status(500)

    }
};




