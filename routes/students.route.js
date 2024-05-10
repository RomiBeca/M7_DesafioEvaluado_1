import { Router } from "express";
import { getStudents, getOneStudent, createNewStudent, updateStudent, removeStudent } from "../controller/student.controller.js";
const router = Router()

//url
router.get('/', getStudents)
router.get('/:rut', getOneStudent)
router.post('/', createNewStudent)
router.put('/:rut', updateStudent)
router.delete('/:rut', removeStudent)

export default router