import { IUser } from './users.interface'
import config from '../../../config'
import { generateUserId } from './user.utils'
import User from './users.model'

export const createUserService = async (user: IUser): Promise<IUser | null> => {
  // auto generated increment id
  const id = await generateUserId()
  user.id = id

  // default student password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user!!')
  }
  return createUser
}

// get user service
export const getUserService = async () => {
  // console.log('getUser router working')
}
