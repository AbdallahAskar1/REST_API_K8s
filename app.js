import express from 'express';
import userRouters from './routes/user/user.router.js';
const app = express()

app.use(express.json())
app.use('/users',userRouters)
app.get('/',(req,res)=>{
    console.log('/')
    res.end('welcome')
})




export default app;

