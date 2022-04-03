import mongoose from 'mongoose'



async function ConnectDb(){
    try {
        const conn=await mongoose.connect("mongodb+srv://Helbin:12345@cluster0.l2uye.mongodb.net/DATABASE?retryWrites=true&w=majority")
        console.log(conn.connection.host)
    } catch (error) {
        console.log(error.message)
    }
}

export default ConnectDb