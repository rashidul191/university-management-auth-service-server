import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

// import of router
import userRouter from './app/modules/users/users.router'
import errorHandler from './middleware/errorHandle'

// middleware cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// root router
app.get('/', (req: Request, res: Response) => {
  res.send('university-management project working yea.....')
})

// router
app.use('/api/v1/users', userRouter)

// global errorHandler
app.use(errorHandler)

export default app
