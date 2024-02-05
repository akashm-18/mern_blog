const mongoose = require('mongoose')
const { model , Schema } = mongoose

const BlogSchema = new mongoose.Schema({
    title : String ,
    summary : String ,
    content : String ,
    image : String ,
    author : { 
        type : Schema.Types.ObjectId, 
        ref:'User' ,
        required : true
    }, 
} , {
    timestamps : true ,
}
)

const BlogModel = model('Blog',BlogSchema)

module.exports = BlogModel