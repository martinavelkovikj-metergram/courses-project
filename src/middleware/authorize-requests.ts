import { Request, Response, NextFunction } from "express";
import { config } from "../config";

export const authorizeRequest = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const internalApiKey = req.headers["internal-api-key"];

  if (!internalApiKey || internalApiKey != config.internalApiKey) {
    return resp.status(401).json({ error: "Invalid API key" });
  }

  next();
};
