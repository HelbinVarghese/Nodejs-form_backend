import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },

        Email: {

            type: String,
            required: true,
            unique: true,

        },

        Password: {

            type: String,
            required: true,
            min:8,
            max:20,

        }
    }
)

const User=mongoose.model('User',userSchema)

export default User