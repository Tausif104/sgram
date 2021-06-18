// importing packages
import express from 'express'
const router = express.Router()

// importing files
import { getPost, getPostById } from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

// get post route
router.route('/').get(getPost)

// get posts by id
router.route('/:id').get(getPostById)

export default router
