import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    staffCode: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    Courses:[{type: mongoose.Types.ObjectId,ref:"Course", required: true}]

})

const User = mongoose.model('User', userSchema)

export default User 