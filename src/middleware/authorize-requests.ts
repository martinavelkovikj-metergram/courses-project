import { type Request, type Response, type NextFunction } from 'express'
import { config } from '../config'

export const authorizeRequest = (
  req: Request,
  resp: Response,
  next: NextFunction
): void => {
  const internalApiKey = req.headers['internal-api-key']

  if (typeof internalApiKey !== 'string' || internalApiKey !== config.internalApiKey) {
    resp.status(401).json({ error: 'Invalid API key' })
  } else {
    next()
  }
}
