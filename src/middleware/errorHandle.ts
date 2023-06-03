
import { ErrorRequestHandler, Request, Response } from 'express'

const errorHandler = (
  error: ErrorRequestHandler,
  req: Request,
  res: Response
) => {
  res.status(400).json({
    status: 'failed!!!, Global error handle',
    message: error,
  })
}

export default errorHandler
