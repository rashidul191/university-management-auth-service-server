import { NextFunction, Request, Response } from 'express'
import { createUserService, getUserService } from './users.service'

// create user data controller
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const createUser = await createUserService(user)
    res.status(200).json({
      status: 'success',
      message: 'Successfully create user data',
      data: createUser,
    })
  } catch (error) {
    next(error)
  }
}

// get user controller
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getUser = await getUserService()
    res.status(200).json({
      status: 'success',
      message: 'Successfully get user data',
      data: getUser,
    })
  } catch (error) {
    next(error)
  }
}
