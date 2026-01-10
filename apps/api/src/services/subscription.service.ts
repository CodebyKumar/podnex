import { prisma } from "@repo/database";
import { AppError } from "../middleware/error.middleware.js";

// Manually define SubscriptionPlan to match Prisma schema
type SubscriptionPlan = "FREE" | "STARTER" | "PRO" | "BUSINESS";

interface SubscriptionLimits {
  podcasts: number;
  minutes: number;
}

interface LimitCheckResult {
  allowed: boolean;
  reason?: string;
  current: {
    podcasts: number;
    minutes: number;
  };
  limits: SubscriptionLimits;
}

export class SubscriptionService {
  private static PLAN_LIMITS: Record<SubscriptionPlan, SubscriptionLimits> = {
    FREE: { podcasts: 5, minutes: 25 },
    STARTER: { podcasts: 50, minutes: 250 },
    PRO: { podcasts: 200, minutes: 1000 },
    BUSINESS: { podcasts: 999999, minutes: 999999 },
  };

  static async getSubscription(userId: string) {
    const subscription = await prisma.subscription.findUnique({
      where: { userId },
    });

    if (!subscription) {
      throw new AppError(404, "Subscription not found");
    }

    return subscription;
  }

  static async checkLimits(userId: string): Promise<LimitCheckResult> {
    const subscription = await this.getSubscription(userId);
    const limits = this.PLAN_LIMITS[subscription.plan as SubscriptionPlan];

    // Check podcast count limit
    if (subscription.currentPodcastCount >= subscription.monthlyPodcastLimit) {
      return {
        allowed: false,
        reason: `Monthly podcast limit reached (${subscription.monthlyPodcastLimit})`,
        current: {
          podcasts: subscription.currentPodcastCount,
          minutes: subscription.currentMinutesUsed,
        },
        limits: limits!,
      };
    }

    // Check minutes limit
    if (subscription.currentMinutesUsed >= subscription.monthlyMinutesLimit) {
      return {
        allowed: false,
        reason: `Monthly minutes limit reached (${subscription.monthlyMinutesLimit})`,
        current: {
          podcasts: subscription.currentPodcastCount,
          minutes: subscription.currentMinutesUsed,
        },
        limits: limits!,
      };
    }

    return {
      allowed: true,
      current: {
        podcasts: subscription.currentPodcastCount,
        minutes: subscription.currentMinutesUsed,
      },
      limits: limits!,
    };
  }

  static async incrementPodcastCount(userId: string) {
    await prisma.subscription.update({
      where: { userId },
      data: {
        currentPodcastCount: { increment: 1 },
      },
    });
  }

  static async trackUsage(userId: string, minutes: number, podcastId: string) {
    const subscription = await this.getSubscription(userId);

    // Update subscription usage
    await prisma.subscription.update({
      where: { userId },
      data: {
        currentMinutesUsed: { increment: minutes },
      },
    });

    // Create usage record
    await prisma.usageRecord.create({
      data: {
        subscriptionId: subscription.id,
        podcastId,
        amount: minutes,
        type: "generation_minutes",
      },
    });
  }

  static async getUsage(userId: string, month?: string) {
    const subscription = await this.getSubscription(userId);

    return {
      currentPeriod: {
        podcastsUsed: subscription.currentPodcastCount,
        podcastsLimit: subscription.monthlyPodcastLimit,
        minutesUsed: subscription.currentMinutesUsed,
        minutesLimit: subscription.monthlyMinutesLimit,
        resetDate: subscription.usageResetDate,
      },
      subscription: {
        plan: subscription.plan,
        status: subscription.status,
        currentPeriodStart: subscription.currentPeriodStart,
        currentPeriodEnd: subscription.currentPeriodEnd,
      },
    };
  }
}
