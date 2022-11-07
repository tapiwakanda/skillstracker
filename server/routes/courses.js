import express from 'express'
import { getCourses, addCourse, updateCourse, getCourseById } from '../controllers/courses.js'

const router =express.Router()

router.get('/getCourses', getCourses)
router.post('/addCourse', addCourse)
router.put('/updateCourse/:id', updateCourse)
router.get('/:id', getCourseById)

export default router