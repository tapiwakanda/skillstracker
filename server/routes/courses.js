import express from 'express'
import { getCourses, addCourse, updateCourse } from '../controllers/courses.js'

const router =express.Router()

router.get('/getCourses', getCourses)
router.post('/addCourse', addCourse)
router.post('/updateCourse/:id', updateCourse)

export default router