import Course from "../models/Course.js"

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
    const newCourse = new Course({
        title, 
        totalHours,
        hoursDone, 
        percentDone: hoursDone/totalHours * 100, 
        user
    })
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateCourse = async (req, res) => {
    const {title, hoursDone, percentDone} = req.body
    const courseId = req.params.id
    try {
        const updatedCourse = await Course.findByIdAndUpdate(courseId, {
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
 
 