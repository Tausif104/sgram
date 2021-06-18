// importing packages
import asyncHandler from 'express-async-handler'

// importing files
import User from '../models/userModel.js'
import Post from '../models/postModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Get all users
// @route   GET /api/users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    if (users) {
        res.json(users)
    } else {
        res.status(404)
        throw new Error('No users found')
    }
})

// @desc    Login user
// @route   GET /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Register User
// @route   GET /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email: email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Get posts by User
// @route   GET /api/users/profile/posted/:user
// @access  Private
const getPostsByUser = asyncHandler(async (req, res) => {
    const user = req.params.user
    const postsById = await Post.find({ user })

    if (postsById) {
        res.json(postsById)
    } else {
        res.status(404)
        throw new Error('User doesnt have any posts')
    }
})

export { getUsers, authUser, registerUser, getUserProfile, getPostsByUser }
