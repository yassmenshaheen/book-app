import mongoose from 'mongoose';
export const connectDB = () => {mongoose.connect('mongodb://127.0.0.1/books').then(()=>{
    console.log('db connect successfly');
    
}).catch(err => {
    console.log('fail to connect to db');
    
})} 