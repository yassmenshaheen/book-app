import {Router} from 'express'
import { getAllBooks,getBookById ,updatedBook ,deletedBook, addBook} from './book.controller.js'
const bookRouter = Router()
bookRouter.post('/addBook',addBook),
bookRouter.get('/getAllBooks',getAllBooks),
bookRouter.get('/getBookById',getBookById),
bookRouter.patch('/updatedBook',updatedBook),
bookRouter.delete('/deletedBook',deletedBook)

export default bookRouter