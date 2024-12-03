

const getPersonalBlog = (req,res)=>{
    res.status(200).json({
        message:"These are the blog which is to be send to the end user"
    })
}

module.exports = {
    getPersonalBlog
}