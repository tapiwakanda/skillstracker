import mongoose from 'mongoose'

const courseSchem = mongoose.Schema({
    title: String,
    totalHours: String,
    hoursDone: String,
    percentDone: String,
    registeredAt: {
        type: Date,
        default: new Date()
    }

})

const Course = mongoose.model('PostMeessage', courseSchem)

export default Course 