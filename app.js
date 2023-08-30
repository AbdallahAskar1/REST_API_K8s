import express from 'express';
import userRouters from './routes/users/users.router.js';
const app = express()

app.use(express.json())
app.use(userRouters)
app.get('/',(req,res)=>{
    console.log('/')
    res.end('welcome')
})




export default app;

