import express from 'express'
import {getUsers, signup} from '../controllers/users.js'


const router =express.Router()

router.get('/', getUsers)
router.post('/signup', signup)

export default router