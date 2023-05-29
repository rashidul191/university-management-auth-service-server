import express, { Application, Request, Response } from 'express'

import cors from 'cors'

const app: Application = express()

// middleware cors
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// root router
app.get('/', (req: Request, res: Response) => {
  res.send('university-management project working yea.....')
})

export default app
