// importing packages
import asyncHandler from 'express-async-handler'

// importing files
import Post from '../models/postModel.js'

// @desc    Get all the posts
// @route   GET /api/posts
// @access  Private
const getPost = asyncHandler(async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 }).populate('user')
    res.json(posts)
})

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Private
const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id).populate('user')
    if (post) {
        res.json(post)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc    Create Post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
    const post = new Post({
        user: req.user._id,
        title: req.body.title,
        image: req.body.image,
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
})

// @desc    Delete Post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (req.user._id.toString() === post.user._id.toString()) {
        await post.remove()
        res.json({ msg: 'Post Removed' })
    } else {
        res.status(401)
        throw new Error('User Unauthorized')
    }
})

export { getPost, getPostById, createPost, deletePost }
