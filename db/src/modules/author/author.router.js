import {Router} from 'express'
import { addAuthor, getAllAuthors, getAuthorAndDelete, getAuthorAndUpdate, getAuthorById } from './author.controller.js'
const authorRouter = Router()
authorRouter.post('/addAuthor',addAuthor),
authorRouter.get('/getAllAuthors',getAllAuthors),
authorRouter.get('/getAuthorById',getAuthorById),
authorRouter.patch('/getAuthorAndUpdate',getAuthorAndUpdate),
authorRouter.delete('/getAuthorAndDelete',getAuthorAndDelete)

export default authorRouter