 import { Book} from "../../../models/book.model.js"

// create new book 
export const addBook = (req,res,next) =>{
    const {title , content , author ,publishedDate} = req.body
const createdBook =Book.create({title , content , author ,publishedDate})
if (!createdBook){
    throw Error('fail to create book ',{cause: 500})
}
return res.status(201).json({message:'book created successfully',
    success:true,
    data:createdBook
})

}
//get all books
export const getAllBooks= async(req,res,next)=>{
    const getAllBooks = await Book.find() 
    return res.status(201).json({message:'get book successfully',data:getAllBooks})
    
}
// get book by id
export const getBookById = async (req,res,next) =>{
    const {id}= req.params
    const getBookById = await Book.findById(id)
    return res.status(201).json({message:'get book successfully',data:getBookById})
}
//update book by id
export const updatedBook = async(req,res,next) =>{
    const {id} = req.params
    const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new:true})
    return res.status(201).json({message:'book is updated',data:updatedBook})
}
// delete book by id 
export const deletedBook = async(req,res,next)=>{
    const {id}= req.params
    const deletedBook = await Book.findByIdAndDelete(id)
    return res.status(201).json({message:'book is deleted',data:deletedBook})
}