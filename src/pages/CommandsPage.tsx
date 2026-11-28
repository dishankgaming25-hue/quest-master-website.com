
import { useState } from "react";
import { Search, Terminal, Copy, Check } from "lucide-react";
import { commands } from "../data/commands";
import { Card, SectionHeading } from "../components/UI";

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState("");

  const filteredCommands = commands.filter((command) =>
    `${command.name} ${command.description} ${command.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  async function copyCommand(name: string) {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(name);
      window.setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  }

  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Command directory"
          title="Explore Bot Commands"
          description="Find the available Quest Master commands and learn what each one does."
        />

        <div className="relative mx-auto mb-10 max-w-xl">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search commands..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400"
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            {filteredCommands.length} commands found
          </p>
          <span className="flex items-center gap-2 text-xs text-purple-300">
            <Terminal size={15} />
            Command list
          </span>
        </div>

        <div className="space-y-4">
          {filteredCommands.map((command) => (
            <Card
              key={command.name}
              className="transition hover:border-purple-400/30"
            >
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <code className="rounded-lg bg-purple-500/15 px-3 py-2 font-bold text-purple-300">
                      {command.name}
                    </code>
                    <span className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-1 text-xs text-yellow-300">
                      {command.category}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-gray-400">
                    {command.description}
                  </p>

                  <p className="mt-3 text-xs text-gray-500">
                    Usage: <code>{command.usage}</code>
                  </p>
                </div>

                <button
                  onClick={() => copyCommand(command.name)}
                  className="flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-purple-400/50 hover:bg-purple-500/10"
                >
                  {copied === command.name ? (
                    <>
                      <Check size={16} className="text-green-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </Card>
          ))}

          {filteredCommands.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              No matching commands found.
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          This list reflects the commands currently documented for the project.
          Confirm command availability against your running bot.
        </p>
      </div>
    </div>
  );
}

