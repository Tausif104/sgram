// importing packages
import express from 'express'
const router = express.Router()

// importing files
import {
    getPost,
    getPostById,
    createPost,
    deletePost,
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

// get post route
router.route('/').get(getPost)

// get & delete posts by id
router.route('/:id').get(protect, getPostById).delete(protect, deletePost)

// create posts route
router.route('/').post(protect, createPost)

export default router
