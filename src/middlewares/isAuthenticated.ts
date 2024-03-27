import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function isAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //receber o token
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).end();

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
    req.user_id = sub;
    next();
  } catch (error) {
    return res.status(401).end();
  }
}
