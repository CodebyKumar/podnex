import { Router } from "express";
import { requireAuth, type AuthRequest } from "../middleware/auth.middleware.js";
import { SubscriptionService } from "../services/subscription.service.js";
import { prisma } from "@repo/database";
import { AppError } from "../middleware/error.middleware.js";

const router = Router();

// Get user profile
router.get("/profile", requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
});

// Update profile
router.patch("/profile", requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const { name, image } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user!.id },
      data: { name, image },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
});

// Get subscription
router.get("/subscription", requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const subscription = await SubscriptionService.getSubscription(req.user!.id);
    res.json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
});

// Get usage
router.get("/usage", requireAuth, async (req: AuthRequest, res, next) => {
  try {
    const usage = await SubscriptionService.getUsage(req.user!.id);
    res.json({ success: true, data: usage });
  } catch (error) {
    next(error);
  }
});

export default router;
