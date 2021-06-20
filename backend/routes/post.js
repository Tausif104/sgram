// importing packages
import express from 'express'
const router = express.Router()

// importing files
import {
    getPost,
    getPostById,
    createPost,
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

// get post route
router.route('/').get(getPost)

// get posts by id
router.route('/:id').get(getPostById)

// create posts route
router.route('/').post(protect, createPost)

export default router
