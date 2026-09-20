"use client";

import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Bug,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCode2,
  FolderGit2,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const findings = [
  {
    title: "Hardcoded API Secret",
    file: "src/config/api.ts",
    line: "Line 18",
    severity: "Critical",
    icon: ShieldCheck,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
  },
  {
    title: "SQL Injection Risk",
    file: "api/users.py",
    line: "Line 42",
    severity: "High",
    icon: Bug,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    title: "Unused Dependency",
    file: "package.json",
    line: "Line 27",
    severity: "Medium",
    icon: TriangleAlert,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/[0.07] px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
            </div>

            <span className="font-semibold tracking-tight">
              Code<span className="text-cyan-400">Sentinel</span>
            </span>
          </a>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <NavSection title="Overview">
            <SidebarItem
              icon={<LayoutDashboard />}
              label="Dashboard"
              active
            />
          </NavSection>

          <NavSection title="Workspace">
            <SidebarItem icon={<FolderGit2 />} label="Repositories" />
            <SidebarItem icon={<Activity />} label="Analyses" />
            <SidebarItem icon={<Bug />} label="Findings" />
            <SidebarItem icon={<FileCode2 />} label="Reports" />
          </NavSection>

          <NavSection title="System">
            <SidebarItem icon={<Settings />} label="Settings" />
          </NavSection>
        </div>

        {/* Bottom project card */}
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

          <button className="mt-3 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-xs text-gray-500 transition hover:bg-white/5 hover:text-white">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
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

            <span className="text-sm font-medium md:hidden">Dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-white/[0.07] p-2.5 text-gray-400 transition hover:bg-white/5 hover:text-white">
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

        {/* Dashboard content */}
        <main className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
          {/* Background glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/[0.035] blur-[100px]" />

          <div className="relative mx-auto max-w-[1500px]">
            {/* Header */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-600">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-gray-400">Overview</span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Good afternoon, Dhyey.
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                  Here's the latest security and code-quality overview.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300">
                <Zap className="h-4 w-4" />
                New analysis
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                label="Security score"
                value="84"
                suffix="/100"
                trend="+6.4%"
                trendPositive
                icon={<ShieldCheck />}
              />

              <StatCard
                label="Open findings"
                value="12"
                trend="-18.2%"
                trendPositive
                icon={<Bug />}
              />

              <StatCard
                label="Files analyzed"
                value="243"
                trend="+31"
                trendPositive
                icon={<FileCode2 />}
              />

              <StatCard
                label="Analyses"
                value="18"
                trend="+4"
                trendPositive
                icon={<Activity />}
              />
            </div>

            {/* Main grid */}
            <div className="mt-4 grid gap-4 xl:grid-cols-3">
              {/* Chart */}
              <div className="cs-card rounded-2xl p-6 xl:col-span-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Security health</p>

                    <h2 className="mt-1 text-lg font-semibold">
                      Project score
                    </h2>
                  </div>

                  <button className="rounded-lg border border-white/[0.07] px-3 py-2 text-[10px] text-gray-500 hover:bg-white/5">
                    Last 30 days
                    <ChevronDown className="ml-2 inline h-3 w-3" />
                  </button>
                </div>

                <div className="mt-8 flex items-end gap-3">
                  <span className="text-4xl font-semibold">84</span>
                  <span className="mb-1 text-xs text-emerald-400">
                    +6.4% this month
                  </span>
                </div>

                {/* Chart */}
                <div className="mt-6 h-56">
                  <svg
                    viewBox="0 0 900 220"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    <defs>
                      <linearGradient
                        id="dashboardGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#22d3ee"
                          stopOpacity="0.18"
                        />

                        <stop
                          offset="100%"
                          stopColor="#22d3ee"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <g opacity="0.35">
                      <line
                        x1="0"
                        y1="20"
                        x2="900"
                        y2="20"
                        stroke="white"
                        strokeOpacity="0.08"
                      />
                      <line
                        x1="0"
                        y1="75"
                        x2="900"
                        y2="75"
                        stroke="white"
                        strokeOpacity="0.08"
                      />
                      <line
                        x1="0"
                        y1="130"
                        x2="900"
                        y2="130"
                        stroke="white"
                        strokeOpacity="0.08"
                      />
                      <line
                        x1="0"
                        y1="185"
                        x2="900"
                        y2="185"
                        stroke="white"
                        strokeOpacity="0.08"
                      />
                    </g>

                    <path
                      d="M0 170 C60 165 70 145 130 150 S200 120 260 135 S330 100 390 112 S470 80 530 95 S610 105 670 70 S740 85 800 50 S850 60 900 32 L900 220 L0 220 Z"
                      fill="url(#dashboardGradient)"
                    />

                    <path
                      d="M0 170 C60 165 70 145 130 150 S200 120 260 135 S330 100 390 112 S470 80 530 95 S610 105 670 70 S740 85 800 50 S850 60 900 32"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="3"
                    />

                    <circle cx="900" cy="32" r="5" fill="#22d3ee" />
                  </svg>
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-gray-700">
                  <span>Aug 20</span>
                  <span>Aug 27</span>
                  <span>Sep 03</span>
                  <span>Sep 10</span>
                  <span>Sep 20</span>
                </div>
              </div>

              {/* Score */}
              <div className="cs-card rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Current status</p>
                    <h2 className="mt-1 text-lg font-semibold">
                      Security posture
                    </h2>
                  </div>

                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-white/[0.05]">
                    <div className="absolute inset-[-10px] rounded-full border-[10px] border-transparent border-t-cyan-400 border-r-cyan-400" />

                    <div className="text-center">
                      <p className="text-4xl font-semibold">84</p>
                      <p className="mt-1 text-xs text-gray-600">out of 100</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <ScoreRow
                    label="Security"
                    value="91"
                    width="91%"
                  />

                  <ScoreRow
                    label="Code quality"
                    value="86"
                    width="86%"
                  />

                  <ScoreRow
                    label="Architecture"
                    value="78"
                    width="78%"
                  />
                </div>
              </div>
            </div>

            {/* Bottom grid */}
            <div className="mt-4 grid gap-4 xl:grid-cols-3">
              {/* Findings */}
              <div className="cs-card rounded-2xl p-6 xl:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Attention required</p>

                    <h2 className="mt-1 text-lg font-semibold">
                      Recent findings
                    </h2>
                  </div>

                  <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300">
                    View all
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-5 divide-y divide-white/[0.06]">
                  {findings.map((finding) => {
                    const Icon = finding.icon;

                    return (
                      <div
                        key={finding.title}
                        className="flex items-center gap-4 py-4"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${finding.bg} ${finding.color}`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {finding.title}
                          </p>

                          <p className="mt-1 truncate text-xs text-gray-600">
                            {finding.file} • {finding.line}
                          </p>
                        </div>

                        <span
                          className={`hidden rounded-md border px-2 py-1 text-[9px] font-medium sm:block ${finding.bg} ${finding.border} ${finding.color}`}
                        >
                          {finding.severity}
                        </span>

                        <ArrowUpRight className="h-4 w-4 text-gray-700" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent analysis */}
              <div className="cs-card rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-600">Activity</p>

                    <h2 className="mt-1 text-lg font-semibold">
                      Recent analyses
                    </h2>
                  </div>

                  <Clock3 className="h-4 w-4 text-gray-600" />
                </div>

                <div className="mt-6 space-y-5">
                  <AnalysisItem
                    project="codesentinel-api"
                    branch="main"
                    score="92"
                    time="12 min ago"
                  />

                  <AnalysisItem
                    project="frontend-dashboard"
                    branch="develop"
                    score="84"
                    time="2 hours ago"
                  />

                  <AnalysisItem
                    project="resume-analyzer"
                    branch="main"
                    score="78"
                    time="Yesterday"
                  />
                </div>

                <button className="mt-6 w-full rounded-lg border border-white/[0.07] py-2.5 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white">
                  View analysis history
                </button>
              </div>
            </div>

            {/* Footer status */}
            <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-5 text-[10px] text-gray-600 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                All systems operational
              </div>

              <span>Last updated just now</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function NavSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  const routes: Record<string, string> = {
    Dashboard: "/dashboard",
    Repositories: "/repositories",
    Analyses: "/analysis",
    Findings: "/findings",
    Reports: "/reports",
    Settings: "/settings",
  };

  return (
    <a
      href={routes[label] || "#"}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${
        active
          ? "bg-cyan-400/10 text-cyan-300"
          : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
      }`}
    >
      <span className="[&_svg]:h-4 [&_svg]:w-4">{icon}</span>
      {label}
    </a>
  );
}

function StatCard({
  label,
  value,
  suffix,
  trend,
  trendPositive,
  icon,
}: {
  label: string;
  value: string;
  suffix?: string;
  trend: string;
  trendPositive: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="cs-card group rounded-2xl p-5 transition hover:border-cyan-400/20">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">{label}</span>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 [&_svg]:h-4 [&_svg]:w-4">
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div className="text-3xl font-semibold tracking-tight">
          {value}

          {suffix && (
            <span className="ml-1 text-xs font-normal text-gray-600">
              {suffix}
            </span>
          )}
        </div>

        <span
          className={`text-[10px] ${
            trendPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

function ScoreRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-[10px]">
        <span className="text-gray-500">{label}</span>
        <span className="text-gray-400">{value}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
        <div
          className="h-full rounded-full bg-cyan-400"
          style={{ width }}
        />
      </div>
    </div>
  );
}

function AnalysisItem({
  project,
  branch,
  score,
  time,
}: {
  project: string;
  branch: string;
  score: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
        <FolderGit2 className="h-3.5 w-3.5 text-gray-500" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium">{project}</p>

        <p className="mt-1 text-[9px] text-gray-600">
          {branch} • {time}
        </p>
      </div>

      <span className="text-xs font-semibold text-emerald-400">
        {score}
      </span>
    </div>
  );
}