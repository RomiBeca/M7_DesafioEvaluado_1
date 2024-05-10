import 'dotenv/config'
import express from 'express'
import studentsRouter from './routes/students.route.js'

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/students', studentsRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
