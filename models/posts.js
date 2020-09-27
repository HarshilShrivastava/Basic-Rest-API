const moongoose=require('mongoose')
const PostSchema=moongoose.Schema({
    title:String,
    description:String,
    date:{ type: Date, default: Date.now },

});
module.exports=moongoose.model('Posts',PostSchema)