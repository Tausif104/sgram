// importing packages
import asyncHandler from 'express-async-handler'

// importing files
import Post from '../models/postModel.js'

// @desc    Get all the posts
// @route   GET /api/posts/
// @access  Private
const getPost = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Private
const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post) {
        res.json(post)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export { getPost, getPostById }
