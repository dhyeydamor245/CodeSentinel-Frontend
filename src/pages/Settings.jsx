import {
  Bell,
  FolderGit2,
  Key,
  LayoutDashboard,
  LogOut,
  Menu,
  Save,
  Search,
  Settings as SettingsIcon,
  Shield,
  ShieldCheck,
  Sparkles,
  User,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [apiKey, setApiKey] = useState("cs_live_99a8b1c4e7f230d9");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/[0.07] bg-[#070a0e] transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/[0.07] px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
            </div>

            <span className="font-semibold tracking-tight">
              Code<span className="text-cyan-400">Sentinel</span>
            </span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6">
          <div className="mb-7">
            <p className="mb-2 px-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-700">
              Overview
            </p>
            <div className="space-y-1">
              <Link
                to="/dashboard"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-gray-500 hover:bg-white/[0.04] hover:text-gray-200 transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </div>
          </div>

          <div className="mb-7">
            <p className="mb-2 px-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-700">
              Workspace
            </p>
            <div className="space-y-1">
              <Link
                to="/repositories"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-gray-500 hover:bg-white/[0.04] hover:text-gray-200 transition"
              >
                <FolderGit2 className="h-4 w-4" />
                Repositories
              </Link>
              <Link
                to="/analysis"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-gray-500 hover:bg-white/[0.04] hover:text-gray-200 transition"
              >
                <Zap className="h-4 w-4" />
                Analyses
              </Link>
              <Link
                to="/findings"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-gray-500 hover:bg-white/[0.04] hover:text-gray-200 transition"
              >
                <Shield className="h-4 w-4" />
                Findings
              </Link>
              <Link
                to="/reports"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-gray-500 hover:bg-white/[0.04] hover:text-gray-200 transition"
              >
                <ShieldCheck className="h-4 w-4" />
                Reports
              </Link>
            </div>
          </div>

          <div className="mb-7">
            <p className="mb-2 px-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-700">
              System
            </p>
            <div className="space-y-1">
              <Link
                to="/settings"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs bg-cyan-400/10 text-cyan-300 transition"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </div>
          </div>
        </nav>

        <div className="border-t border-white/[0.07] p-4">
          <Link
            to="/login"
            className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-xs text-gray-500 hover:bg-white/5 hover:text-white transition"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/[0.07] bg-[#05070a]/80 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-white/[0.07] p-2 text-gray-400 hover:text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <span className="text-sm font-medium">Settings</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-white/[0.07] p-2.5 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-black">
              D
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
          <div className="relative mx-auto max-w-4xl space-y-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs text-gray-600">
                <span>Workspace</span>
                <span>/</span>
                <span className="text-gray-400">Settings</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Workspace Settings
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Configure your CodeSentinel audit engine and account preferences.
              </p>
            </div>

            {/* Profile Section */}
            <div className="cs-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <User className="h-4 w-4" />
                </div>
                <h2 className="text-base font-semibold">User Profile</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    defaultValue="Dhyey"
                    className="h-10 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 text-sm text-white focus:border-cyan-400/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    defaultValue="dhyey@codesentinel.dev"
                    className="h-10 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 text-sm text-white focus:border-cyan-400/30"
                  />
                </div>
              </div>
            </div>

            {/* API Keys Section */}
            <div className="cs-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Key className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-base font-semibold">API Credentials</h2>
                  <p className="text-xs text-gray-500">Use this token for CLI and CI/CD pipelines.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">Audit API Token</label>
                <div className="flex gap-2">
                  <input
                    value={apiKey}
                    readOnly
                    className="h-10 flex-1 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 font-mono text-xs text-gray-300 focus:border-cyan-400/30"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(apiKey);
                      alert("API key copied to clipboard!");
                    }}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-xs font-medium text-gray-300 hover:bg-white/[0.08]"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="cs-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold">Security Alerts</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Receive instant notifications when critical vulnerabilities are found.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                  className="h-4 w-4 rounded border-white/10 bg-black accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={() => alert("Settings saved successfully!")}
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-black hover:bg-cyan-300 transition"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
