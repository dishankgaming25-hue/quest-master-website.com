
import { useState } from "react";
import {
  Settings,
  Coins,
  Target,
  Zap,
  Gift,
  Save,
  LockKeyhole
} from "lucide-react";
import { Card, Button, SectionHeading } from "../components/UI";

export default function DashboardPage() {
  const [settings, setSettings] = useState({
    economyEnabled: true,
    questsEnabled: true,
    xpEnabled: true,
    dailyRewardsEnabled: true
  });

  const [saved, setSaved] = useState(false);

  function toggleSetting(key: keyof typeof settings) {
    setSettings((current) => ({
      ...current,
      [key]: !current[key]
    }));
    setSaved(false);
  }

  function saveSettings() {
    localStorage.setItem("quest-master-settings", JSON.stringify(settings));
    setSaved(true);
  }

  const options = [
    {
      key: "economyEnabled" as const,
      title: "Economy System",
      description: "Enable the virtual currency feature.",
      icon: Coins
    },
    {
      key: "questsEnabled" as const,
      title: "Quest System",
      description: "Allow members to access quests.",
      icon: Target
    },
    {
      key: "xpEnabled" as const,
      title: "XP and Levels",
      description: "Enable member experience progression.",
      icon: Zap
    },
    {
      key: "dailyRewardsEnabled" as const,
      title: "Daily Rewards",
      description: "Enable daily reward settings.",
      icon: Gift
    }
  ];

  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Control center"
          title="Quest Master Dashboard"
          description="Explore the dashboard settings interface for your community."
        />

        <Card className="mb-8 border-yellow-400/20 bg-yellow-400/5">
          <div className="flex items-start gap-3">
            <LockKeyhole className="mt-1 shrink-0 text-yellow-400" />
            <div>
              <h3 className="font-bold text-yellow-300">
                Preview mode
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                These settings are currently saved only in this browser.
                Discord login, server selection, permissions, and live bot
                configuration will be connected through the backend later.
              </p>
            </div>
          </div>
        </Card>

        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-purple-500/15 p-3 text-purple-300">
            <Settings size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Server Settings</h2>
            <p className="text-sm text-gray-400">
              Configure the dashboard preview
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {options.map((option) => {
            const Icon = option.icon;
            const enabled = settings[option.key];

            return (
              <Card
                key={option.key}
                className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-purple-500/15 p-3 text-purple-300">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3 className="font-bold">{option.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {option.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleSetting(option.key)}
                  aria-pressed={enabled}
                  className={`relative h-7 w-14 shrink-0 rounded-full transition ${
                    enabled ? "bg-purple-600" : "bg-gray-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                      enabled ? "left-8" : "left-1"
                    }`}
                  />
                </button>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button onClick={saveSettings}>
            <Save size={17} />
            Save Preview Settings
          </Button>

          {saved && (
            <span className="text-sm text-green-400">
              Preview settings saved in this browser.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

