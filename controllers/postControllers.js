
const Post = require('../models/postModel');

const createPost = async(req,res)=>{

    try{

        const post = new Post({
            category:req.body.category,
            heading:req.body.heading,
            description:req.body.description,
            priority:req.body.priority,
            images:req.file.filename
        })

        const postData =  await post.save();

        res.status(200).send({success:true,msg:'Post Data Successfully',data:postData});

    } catch(error){
        res.status(400).send({success:false,msg:error.message});
    }

}

const getPosts = async(req,res)=>{
    try{

         const posts = await Post.find({});
         res.status(200).send({success:true,msg:"Get Data Successfully",data:posts});

    } catch(error){
        res.status(400).send({success:false,msg:error.message});
    }

}

const getPostsById = async(req,res) => {

    try{

        const postId = req.params.id;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).send({ success: false, msg: "Post not found" });
        }
        
        res.status(200).send({success:true,msg:"Get Data Successfully",data:post});

   } catch(error){
       res.status(400).send({success:false,msg:error.message});
   }

}




const deletePost = async(req,res)=>{
    try{

        const id = req.params.id;

        await Post.deleteOne({_id:id});
        res.status(200).send({success:true,msg:'Post deleted Successfully'});        
    } catch(error){
        res.status(400).send({success:false,msg:error.message});
    }

}

const updatePost = async(req,res) => {
    try{
        if(req.file !== undefined){
            //var id = req.body.id;
            var id = req.params.id;
            var category = req.body.category;
            var heading = req.body.heading;
            var description = req.body.description;
            var priority = req.body.priority;
            var filename = req.file.filename;

            await Post.findByIdAndUpdate({_id:id },{ $set:{category:category,heading:heading,description:description,
            priority:priority,images:filename}})
            res.status(200).send({success:true,msg:"Post Update Successfully"});
        }else{

            var id = req.body.id;
            var category = req.body.category;
            var heading = req.body.heading;
            var description = req.body.description;
            var priority = req.body.priority;

            await Post.findByIdAndUpdate({_id:id},{ $set:{category:category,heading:heading,description:description,
            priority:priority}})
            res.status(200).send({success:true,msg:"Post Update Successfully"});
            
        }

    }  catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports = {
    createPost,
    getPosts,
    getPostsById,
    deletePost,
    updatePost
}