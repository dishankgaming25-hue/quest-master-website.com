
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Coins,
  Crown,
  Gift,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap
} from "lucide-react";
import { features } from "../data/features";
import { Button, Card, SectionHeading } from "../components/UI";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative px-5 pb-24 pt-24 sm:pt-32">
        <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <Sparkles size={15} />
              Level up your Discord community
            </div>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Your community.
              <br />
              Your adventure.
              <br />
              <span className="gradient-text">Your Quest.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Make every conversation count with quests, rewards,
              virtual economy, XP, and progression powered by Quest Master.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <Bot size={18} />
                  Add to Discord
                  <ArrowRight size={18} />
                </Button>
              </a>

              <Link to="/features">
                <Button variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-5 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-400" />
                Community focused
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-purple-400" />
                Easy to manage
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[90px]" />

            <Card glow className="relative mx-auto max-w-lg border-purple-400/20 bg-[#130d20]/90">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-purple-500/20 p-3 text-yellow-400">
                    <Crown size={26} />
                  </div>
                  <div>
                    <h2 className="font-bold">Quest Master</h2>
                    <p className="text-xs text-gray-400">Adventure Dashboard</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Bot concept
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Economy", icon: Coins, color: "text-yellow-400" },
                  { label: "Daily Rewards", icon: Gift, color: "text-pink-400" },
                  { label: "Quests", icon: Target, color: "text-purple-400" },
                  { label: "XP & Levels", icon: Zap, color: "text-blue-400" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <item.icon size={25} className={item.color} />
                    <p className="mt-4 font-semibold">{item.label}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      Community feature
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-400" size={24} />
                  <div>
                    <p className="font-bold">Every quest matters</p>
                    <p className="text-xs text-gray-400">
                      Give your members goals to achieve.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What makes us different"
            title="Everything your community needs"
            description="Bring engagement, rewards, and progression together in one place."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title} className="transition hover:-translate-y-1 hover:border-purple-400/40">
                  <div className="mb-5 inline-flex rounded-xl bg-purple-500/15 p-3 text-purple-300">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/features">
              <Button variant="outline">
                View All Features <ArrowRight size={17} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-900/40 to-[#100b1c] px-6 py-16 text-center sm:px-12">
          <Crown size={42} className="mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to start your adventure?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Explore Quest Master and discover new ways to make your
            Discord community more engaging.
          </p>
          <Link to="/features" className="mt-8 inline-block">
            <Button>
              Get Started <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

