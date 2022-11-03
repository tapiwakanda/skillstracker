import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    title: String,
    totalHours: String,
    hoursDone: String,
    percentDone: String,
    registeredAt: {
        type: Date,
        default: new Date()
    }

})

const Course = mongoose.model('PostMeessage', courseSchema)

export default Course 