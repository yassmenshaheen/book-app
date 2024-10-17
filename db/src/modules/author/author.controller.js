import { Author } from "../../../models/author.model.js"

// create new author
export const addAuthor = (req,res,next) => {
    const {name , bio , birthDay , Book} = req.body
    const createdAuthor = Author.create({name , bio , birthDay , Book})
    if (!createdAuthor){
        throw Error('fail to create author ',{cause: 500})
    }
    return res.status(201).json({message:'author created successfully',
        success:true,
        data:createdAuthor
    })
}
// get all authors
export const getAllAuthors = (req,res,next) => {
   const getAllAuthors = Author.find()
   return res.status(201).json({message:'get authors successfully',data:getAllAuthors})

}
// get author by id
export const getAuthorById = (req,res,next) => {
    const {id}= req.pramas
    const getAuthorById = Author.findById(id)
    return res.status(201).json({message:'get author successfully',data:getAuthorById})
}
//update author by id 
export const getAuthorAndUpdate= (req,res,next) => {
     const {id} = req.pramas
     const getAuthorAndUpdate = Author.findByIdAndUpdate(id,req.body,({new:true}))
     return res.status(201).json({message:'update author successfully',data:getAuthorAndUpdate})
}
// delete author by id
export const getAuthorAndDelete = (req,res,next) => {
    const {id} = req.pramas
    const getAuthorAndDelete = Author.findByIdAndDelete(id)
    return res.status(201).json({message:'delete author successfully',data:getAuthorAndDelete})

}