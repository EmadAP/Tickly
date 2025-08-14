import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../util/config";

export interface JwtPayload {
  id: string;
  username: string;
  email: string;
}

export const verifyUserToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  jwt.verify(token, SECRET, {}, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: "Token is invalid" });
      return;
    }

    (req as any).user = decoded as JwtPayload;
    next();
  });
};
