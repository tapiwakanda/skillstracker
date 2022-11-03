import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const signup = async (req, res) => {
        const { fullName, staffCode, email, password } = req.body
        let existingUser
        try {
            existingUser = await User.findOne({staffCode})
        } catch (err) {
            return console.log(err);
        }
        if(existingUser){
            return res.status(400).json({message: "User Already Exists, Login Instead"})
        }

        const hashedPassword = bcrypt.hashSync(password)

        const user = new User({
            fullName,
            email,
            staffCode,
            password: hashedPassword
        })
        
        try {
            await user.save()
        } catch (err) {
            return console.log(err)
        }
        return res.status(201).json({user})
}
