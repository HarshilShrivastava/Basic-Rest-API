const express=require("express")
const router=express.Router();
const Post=require('../models/posts');


//get back all the post
router.get('/',async (req,res)=>{
    try {
        const posts=await Post.find();
        res.json(posts);
        console.log("all ");

    } catch (error) {
        res.json({message:error});       
    }
})

//create the post 
router.post('/',async (req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    try {
        const savedPost= await  post.save();
        res.json(savedPost)
        
    } catch (error) {
        res.json({message:error})
    }
})

//specific posts post with postid
router.get('/:postId',async (req,res)=>{
    try {
        console.log(req.params.postId);
    const post = await Post.findById(req.params.postId);
    res.json(post)
    } catch (error) {
        console.log(req.params.postId);
        res.json({message:error})    
    }
})

//delete the post with postid
router.delete('/:postId',async (req,res)=>{
    try {
       const removePost=await Post.remove({_id:req.params.postId})
       res.json(removePost)
    } catch (error) {
        res.json({message:error})
    }
});

// update with post with postid
router.patch('/:postId',async (req,res)=>{
    try {
        const UpdatePost = await Post.updateOne(
            {_id:req.params.postId},
            { $set: {title:req.body.title}}
            );
            res.json(UpdatePost)
    } catch (error) {
        res.json({message:error})
    }
});
module.exports=router;