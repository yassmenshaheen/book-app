import express from 'express'
import {connectDB} from './db/connection.js'
import bookRouter from './db/src/modules/book/book.router.js'
import authorRouter from './db/src/modules/author/author.router.js'
const app = express()
const port = 3000
connectDB()
app.use(express.json())
app.use('/Book',bookRouter),
app.use('/Author',authorRouter)
app.listen(port,()=>{
    console.log('server is running ' , port);
    
})