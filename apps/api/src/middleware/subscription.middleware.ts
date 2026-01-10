import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.middleware.js";
import { SubscriptionService } from "../services/subscription.service.js";
import { AppError } from "./error.middleware.js";

export async function checkSubscriptionLimits(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) {
      throw new AppError(401, "Authentication required");
    }

    const limitCheck = await SubscriptionService.checkLimits(req.user.id);

    if (!limitCheck.allowed) {
      return res.status(403).json({
        success: false,
        error: "Subscription limit reached",
        details: {
          reason: limitCheck.reason,
          current: limitCheck.current,
          limits: limitCheck.limits,
        },
      });
    }

    next();
  } catch (error) {
    next(error);
  }
}
