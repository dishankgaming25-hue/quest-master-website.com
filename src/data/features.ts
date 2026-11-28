
import {
  Coins,
  Target,
  Trophy,
  Zap,
  Gift,
  Users,
  type LucideIcon
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Economy System",
    description:
      "Give members a virtual currency system to earn, save, and spend coins.",
    icon: Coins
  },
  {
    title: "Daily Rewards",
    description:
      "Reward members for checking in regularly and building daily streaks.",
    icon: Gift
  },
  {
    title: "Quest System",
    description:
      "Create engaging quests and let members earn rewards by completing them.",
    icon: Target
  },
  {
    title: "XP and Levels",
    description:
      "Keep your community active with experience points and progression.",
    icon: Zap
  },
  {
    title: "Leaderboards",
    description:
      "Showcase your most active members and celebrate their achievements.",
    icon: Trophy
  },
  {
    title: "Community Progress",
    description:
      "Give members more reasons to participate and grow together.",
    icon: Users
  }
];

