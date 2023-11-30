import asyncHandler from 'express-async-handler'
//@desc Auth user
//@route POST /api/auth/login
//@access Public
export const authUser = asyncHandler(async (req, res) => {
	res.json({ message: 'You are authenticated' })
})
