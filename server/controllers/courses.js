import Course from "../models/Course.js"

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        
        console.log(courses)
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const addCourse = async (req, res) => {
    const course = req.body
    const newCourse = new Course(course)
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
 
 