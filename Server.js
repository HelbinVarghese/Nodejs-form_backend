
import express from 'express'
import ConnectDb from './Config/Db.js'
import UserRoutes from './Routes/UserRoutes.js'

const app=express()
ConnectDb()
app.use(express.json())
app.use('/api/user',UserRoutes)

app.listen(3000,()=>{
    console.log("Server Started")

})