
import { Link } from "react-router-dom";
import { Crown, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080510]">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-yellow-400">
                <Crown size={22} />
              </div>
              <span className="text-lg font-extrabold">
                QUEST <span className="text-yellow-400">MASTER</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-gray-400">
              Make your Discord community more exciting with quests,
              rewards, economy, and progression.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link to="/features" className="hover:text-yellow-400">Features</Link>
              <Link to="/commands" className="hover:text-yellow-400">Commands</Link>
              <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
              <Link to="/stats" className="hover:text-yellow-400">Statistics</Link>
              <Link to="/support" className="hover:text-yellow-400">Support</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Community</h3>
            <p className="mb-4 text-sm leading-6 text-gray-400">
              Need help or have a suggestion? Visit our support community.
            </p>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-yellow-400"
            >
              Discord Community <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Quest Master. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={13} className="text-purple-400" /> for Discord communities
          </p>
        </div>
      </div>
    </footer>
  );
}

