import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// static method
type UserModel = Model<IUser, object>

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // create at time and update at time
  { timestamps: true }
)

// 3. Create a Model.
const User = model<IUser, UserModel>('User', userSchema)

export default User
