//import { restart } from "nodemon"
import mongoose from "mongoose"
import Course from "../models/Course.js"
import User from "../models/User.js"

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        
        console.log(courses)
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    if (!courses){
        return res.status(400).json({message: "No courses found"})
    }
}

export const addCourse = async (req, res) => {
    const { title, totalHours, hoursDone, percentDone, user} = req.body
    let existingUser
    try {
        existingUser = await User.findById(user)
    } catch (err) {
        return console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to find User by this Id"})
    }
    const newCourse = new Course({
        title, 
        totalHours,
        hoursDone, 
        percentDone: hoursDone/totalHours * 100, 
        user
    })
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await newCourse.save({session})
        existingUser.Courses.push(newCourse)
        await existingUser.save({session})
        await session.commitTransaction()
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err})
    }
}

export const updateCourse = async (req, res) => {
    const {title, hoursDone, percentDone} = req.body
    const courseId = req.params.id
    let updateCourse
    try {
        updateCourse = await Course.findByIdAndUpdate(courseId, {
            title,
            hoursDone,
            percentDone
        })
    } catch (err) {
        return console.log(err)
    }
    if(!updateCourse){
        return res.status(500).json({message: "Unable to update the Course"})
    }
    return res.status(200).json({updateCourse})
}
 
export const getCourseById = async (req, res) => {
    const courseId = req.params.id
    let course
    try {
        course = await Course.findById(courseId)
    } catch (err) {
        console.log(err)
    }
    if(!course){
        return res.status(404).json({message: "No Course Found"})
    }
    return res.status(200).json({course})
}
 