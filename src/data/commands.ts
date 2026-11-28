
export interface BotCommand {
  name: string;
  description: string;
  category: string;
  usage: string;
}

export const commands: BotCommand[] = [
  {
    name: "/daily",
    description: "Claim your daily coins and maintain your reward streak.",
    category: "Economy",
    usage: "/daily"
  },
  {
    name: "/quests",
    description: "View the quests available to complete.",
    category: "Quests",
    usage: "/quests"
  },
  {
    name: "/claim",
    description: "Claim a reward for an eligible completed quest.",
    category: "Quests",
    usage: "/claim"
  },
  {
    name: "/balance",
    description: "Check your current coin balance.",
    category: "Economy",
    usage: "/balance"
  },
  {
    name: "/profile",
    description: "View your profile and progression.",
    category: "Progression",
    usage: "/profile"
  },
  {
    name: "/leaderboard",
    description: "View the community leaderboard.",
    category: "Progression",
    usage: "/leaderboard"
  }
];

