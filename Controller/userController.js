import User from '../Models/userModel.js' 
import argon2 from 'argon2'

const registerUser=async (request,response)=>{
    
    console.log(request.body)
    const user=await User.create(
        {
            fullName:request.body.Name,
            Email:request.body.email,
            Password: await argon2.hash(request.body.pass) 

        }

    )
    if(user){
        response.json(user)
    }
}

export {registerUser}