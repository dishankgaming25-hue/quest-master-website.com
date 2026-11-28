
import {
  Activity,
  Coins,
  Target,
  Trophy,
  Users,
  Zap
} from "lucide-react";
import { Card, SectionHeading } from "../components/UI";

const stats = [
  {
    title: "Total Members",
    value: "Coming Soon",
    description: "Live member count",
    icon: Users
  },
  {
    title: "Coins Earned",
    value: "Coming Soon",
    description: "Community economy",
    icon: Coins
  },
  {
    title: "Quests Completed",
    value: "Coming Soon",
    description: "Total quest completions",
    icon: Target
  },
  {
    title: "Active Members",
    value: "Coming Soon",
    description: "Community activity",
    icon: Activity
  },
  {
    title: "XP Earned",
    value: "Coming Soon",
    description: "Total experience points",
    icon: Zap
  },
  {
    title: "Rewards Claimed",
    value: "Coming Soon",
    description: "Member achievements",
    icon: Trophy
  }
];

export default function StatsPage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bot analytics"
          title="Quest Master Statistics"
          description="Explore community activity and bot performance in one place."
        />

        <Card className="mb-8 border-purple-400/20 bg-purple-500/5">
          <div className="flex items-center gap-3">
            <Activity className="text-purple-300" size={24} />
            <div>
              <h3 className="font-bold">Live analytics coming soon</h3>
              <p className="mt-1 text-sm text-gray-400">
                Statistics will appear here once the website is connected
                to your bot's backend and database.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card key={stat.title}>
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-purple-500/15 p-3 text-purple-300">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs text-yellow-300">
                    Pending
                  </span>
                </div>

                <p className="text-sm text-gray-400">{stat.title}</p>
                <h3 className="mt-2 text-2xl font-extrabold">
                  {stat.value}
                </h3>
                <p className="mt-2 text-xs text-gray-500">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

