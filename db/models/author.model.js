import {Schema , model} from 'mongoose'
//schema
const authorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    bio:String,
    birthDay:Date,
    books:{
        type:Schema.Types.ObjectId,
        ref:'book'
        
    }
},{timestamps:true})

//model
export const Author = model('Author',authorSchema)