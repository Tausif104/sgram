// importing packages
import express from 'express'
const router = express.Router()

// importing files
import { protect } from '../middleware/authMiddleware.js'
import {
    getUsers,
    authUser,
    registerUser,
    getUserProfile,
    getPostsByUser,
} from '../controllers/userController.js'

// get all users route
router.route('/').get(getUsers)

// register users route
router.route('/').post(registerUser)

// login route
router.route('/login').post(authUser)

// profile route
router.route('/profile').get(protect, getUserProfile)

// get profile by users
router.route('/profile/posted/:user').get(getPostsByUser)

export default router
