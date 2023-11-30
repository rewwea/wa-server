import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { getUserProfile } from './user.controller.js'
import { authUser } from '../auth/auth.controller.js'

const router = express.Router()

router.route('/profile').get(protect, getUserProfile)

export default router
