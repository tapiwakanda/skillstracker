import express from 'express'
import { getCourses, addCourse } from '../controllers/courses.js'
import {getUsers} from '../controllers/users.js'

const router =express.Router()

router.get('/', getCourses)
router.get('/', addCourse)

export default router