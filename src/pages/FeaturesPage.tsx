
import { features } from "../data/features";
import { Card, SectionHeading } from "../components/UI";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Powerful features"
          title="Everything to level up your server"
          description="Discover the tools that make Quest Master a useful companion for your Discord community."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                glow={index === 0}
                className="group transition hover:-translate-y-1 hover:border-purple-400/40"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-xl bg-purple-500/15 p-4 text-purple-300 transition group-hover:bg-purple-500/25">
                    <Icon size={28} />
                  </div>
                  <Sparkles size={18} className="text-yellow-400/60" />
                </div>

                <h2 className="text-xl font-bold">{feature.title}</h2>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-green-400">
                  <CheckCircle2 size={15} />
                  Quest Master feature
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-purple-400/20 bg-purple-500/5 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Built for community engagement
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Bring rewards, goals, and progression together to create
            a more interactive Discord experience.
          </p>
        </div>
      </div>
    </div>
  );
}

