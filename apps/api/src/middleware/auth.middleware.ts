import type { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth.js";
import { AppError } from "./error.middleware.js";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export async function requireAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    
    if (!session?.user) {
      throw new AppError(401, "Unauthorized - Please sign in");
    }

    req.user = {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
    };

    next();
  } catch (error) {
    next(new AppError(401, "Invalid or expired session"));
  }
}

export async function optionalAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    
    if (session?.user) {
      req.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      };
    }
  } catch (error) {
    // Ignore errors, auth is optional
  }
  
  next();
}
