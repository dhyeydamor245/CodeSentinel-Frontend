import {
  Activity,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  FileCode2,
  FolderGit2,
  GitBranch,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const repositories = [
  {
    name: "codesentinel-api",
    description: "FastAPI backend and analysis services",
    language: "Python",
    branch: "main",
    score: 92,
    security: 94,
    quality: 91,
    files: 184,
    lastAnalyzed: "12 min ago",
    status: "Healthy",
    initials: "CS",
  },
  {
    name: "frontend-dashboard",
    description: "CodeSentinel web application",
    language: "TypeScript",
    branch: "main",
    score: 84,
    security: 87,
    quality: 81,
    files: 243,
    lastAnalyzed: "2 hours ago",
    status: "Healthy",
    initials: "FD",
  },
  {
    name: "resume-analyzer",
    description: "AI-powered resume analysis platform",
    language: "React",
    branch: "develop",
    score: 78,
    security: 76,
    quality: 81,
    files: 156,
    lastAnalyzed: "Yesterday",
    status: "Attention",
    initials: "RA",
  },
];

export default function RepositoriesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    `${repo.name} ${repo.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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

        <div className="flex-1 px-4 py-6">
          <NavSection title="Overview">
            <SidebarItem
              icon={<LayoutDashboard />}
              label="Dashboard"
              href="/dashboard"
            />
          </NavSection>

          <NavSection title="Workspace">
            <SidebarItem
              icon={<FolderGit2 />}
              label="Repositories"
              active
              href="/repositories"
            />

            <SidebarItem
              icon={<Activity />}
              label="Analyses"
              href="/analysis"
            />

            <SidebarItem
              icon={<Code2 />}
              label="Findings"
              href="/findings"
            />

            <SidebarItem
              icon={<FileCode2 />}
              label="Reports"
              href="/reports"
            />
          </NavSection>

          <NavSection title="System">
            <SidebarItem
              icon={<Settings />}
              label="Settings"
              href="/settings"
            />
          </NavSection>
        </div>

        <div className="border-t border-white/[0.07] p-4">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              </div>

              <div>
                <p className="text-xs font-medium">AI Engine</p>
                <p className="text-[10px] text-emerald-400">
                  ● Operational
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/login"
            className="mt-3 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-xs text-gray-500 hover:bg-white/5 hover:text-white"
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

            <div className="hidden items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 md:flex">
              <Search className="h-4 w-4 text-gray-600" />

              <span className="text-xs text-gray-600">
                Search projects...
              </span>

              <kbd className="ml-8 rounded border border-white/10 px-1.5 py-0.5 text-[9px] text-gray-600">
                ⌘ K
              </kbd>
            </div>

            <span className="text-sm font-medium md:hidden">
              Repositories
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-white/[0.07] p-2.5 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </button>

            <div className="hidden h-6 w-px bg-white/[0.08] sm:block" />

            <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-white/[0.04]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-black">
                D
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-xs font-medium">Dhyey</p>
                <p className="text-[10px] text-gray-600">Developer</p>
              </div>

              <ChevronDown className="hidden h-3.5 w-3.5 text-gray-600 sm:block" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/[0.035] blur-[100px]" />

          <div className="relative mx-auto max-w-[1500px]">
            {/* Header */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-600">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-gray-400">Repositories</span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Repositories
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Manage and audit the projects connected to CodeSentinel.
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                <Plus className="h-4 w-4" />
                Add repository
              </button>
            </div>

            {/* Search + filters */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search repositories..."
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-4 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-cyan-400/30"
                />
              </div>

              <button className="flex h-11 items-center justify-between gap-8 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-xs text-gray-400">
                All repositories
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <button className="flex h-11 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-xs text-gray-400 hover:text-white">
                <GitBranch className="h-3.5 w-3.5" />
                All branches
              </button>
            </div>

            {/* Summary */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <MiniStat
                label="Connected repositories"
                value="3"
                icon={<FolderGit2 />}
              />

              <MiniStat
                label="Healthy projects"
                value="2"
                icon={<CheckCircle2 />}
              />

              <MiniStat
                label="Needs attention"
                value="1"
                icon={<Clock3 />}
              />
            </div>

            {/* Repository list */}
            <div className="mt-8 space-y-4">
              {filteredRepositories.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
              ))}

              {filteredRepositories.length === 0 && (
                <div className="cs-card rounded-2xl py-16 text-center">
                  <FolderGit2 className="mx-auto h-8 w-8 text-gray-700" />

                  <p className="mt-4 text-sm font-medium">
                    No repositories found
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Try a different search term.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom */}
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5 text-[10px] text-gray-600">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                GitHub integration connected
              </div>

              <span>{filteredRepositories.length} repositories</span>
            </div>
          </div>
        </main>
      </div>

      {/* Add repository modal */}
      {showModal && (
        <AddRepositoryModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

/* ================= SIDEBAR ================= */

function NavSection({ title, children }) {
  return (
    <div className="mb-7">
      <p className="mb-2 px-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-700">
        {title}
      </p>

      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
  href,
}) {
  return (
    <Link
      to={href}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${
        active
          ? "bg-cyan-400/10 text-cyan-300"
          : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
      }`}
    >
      <span className="[&_svg]:h-4 [&_svg]:w-4">{icon}</span>
      {label}
    </Link>
  );
}

/* ================= STATS ================= */

function MiniStat({ label, value, icon }) {
  return (
    <div className="cs-card flex items-center gap-4 rounded-xl p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 [&_svg]:h-4 [&_svg]:w-4">
        {icon}
      </div>

      <div>
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-[10px] text-gray-600">{label}</p>
      </div>
    </div>
  );
}

/* ================= REPOSITORY CARD ================= */

function RepositoryCard({ repo }) {
  const navigate = useNavigate();
  const healthy = repo.status === "Healthy";

  return (
    <div className="cs-card group rounded-2xl p-5 transition duration-300 hover:border-cyan-400/20 sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        {/* Repo identity */}
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] text-sm font-semibold text-cyan-300">
            {repo.initials}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="truncate text-base font-semibold">
                {repo.name}
              </h2>

              <span
                className={`rounded-md border px-2 py-1 text-[9px] ${
                  healthy
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                    : "border-yellow-400/20 bg-yellow-400/5 text-yellow-400"
                }`}
              >
                ● {repo.status}
              </span>
            </div>

            <p className="mt-1 truncate text-xs text-gray-500">
              {repo.description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-gray-600">
              <span className="flex items-center gap-1.5">
                <GitBranch className="h-3 w-3" />
                {repo.branch}
              </span>

              <span>•</span>

              <span>{repo.language}</span>

              <span>•</span>

              <span>{repo.files} files</span>

              <span>•</span>

              <span>Analyzed {repo.lastAnalyzed}</span>
            </div>
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-7 border-t border-white/[0.06] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-gray-700">
              Security
            </p>

            <p className="mt-1 text-lg font-semibold text-emerald-400">
              {repo.security}
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-widest text-gray-700">
              Quality
            </p>

            <p className="mt-1 text-lg font-semibold">
              {repo.quality}
            </p>
          </div>

          <div className="hidden sm:block">
            <p className="text-[9px] uppercase tracking-widest text-gray-700">
              Overall
            </p>

            <p className="mt-1 text-lg font-semibold text-cyan-400">
              {repo.score}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="flex items-center gap-2 lg:ml-2">
          <button
            onClick={() => navigate("/analysis")}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-gray-300 transition hover:bg-white/[0.06] hover:text-white sm:flex-none"
          >
            View
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => navigate("/analysis")}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-cyan-300 sm:flex-none"
          >
            <Zap className="h-3.5 w-3.5" />
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= MODAL ================= */

function AddRepositoryModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#0a0e13] shadow-2xl shadow-black/50">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="border-b border-white/[0.07] p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
            <FolderGit2 className="h-5 w-5 text-cyan-400" />
          </div>

          <h2 className="mt-5 text-xl font-semibold">
            Add repository
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            Connect a GitHub repository to start analyzing your project with
            CodeSentinel.
          </p>
        </div>

        <div className="space-y-5 p-6">
          {/* GitHub option */}
          <button className="flex w-full items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">
                Connect with GitHub
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Import repositories from your GitHub account.
              </p>
            </div>

            <ArrowUpRight className="h-4 w-4 text-gray-600" />
          </button>

          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 border-t border-white/[0.06]" />

            <span className="relative mx-auto block w-fit bg-[#0a0e13] px-3 text-[10px] text-gray-700">
              OR
            </span>
          </div>

          {/* URL */}
          <div>
            <label className="mb-2 block text-xs font-medium text-gray-400">
              Repository URL
            </label>

            <div className="flex items-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 focus-within:border-cyan-400/30">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-gray-600"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>

              <input
                placeholder="https://github.com/username/repository"
                className="h-11 w-full bg-transparent px-3 text-sm text-white placeholder:text-gray-700 outline-none"
              />
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            <Zap className="h-4 w-4" />
            Connect repository
          </button>
        </div>
      </div>
    </div>
  );
}