import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    title: String,
    totalHours: String,
    hoursDone: String,
    percentDone: String,
    registeredAt: {
        type: Date,
        default: new Date()
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true
    }


})

const Course = mongoose.model('Course', courseSchema)

export default Course 