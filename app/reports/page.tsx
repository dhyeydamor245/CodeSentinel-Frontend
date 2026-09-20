"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  FileCode2,
  FileText,
  FolderGit2,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Search,
  Settings,
  Shield,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const reports = [
  {
    id: 1,
    repository: "codesentinel-api",
    branch: "main",
    score: 84,
    findings: 12,
    critical: 1,
    high: 2,
    medium: 2,
    low: 1,
    files: 243,
    duration: "2m 41s",
    date: "Sep 20, 2026",
    status: "Completed",
  },
  {
    id: 2,
    repository: "frontend-dashboard",
    branch: "main",
    score: 81,
    findings: 16,
    critical: 0,
    high: 4,
    medium: 7,
    low: 5,
    files: 187,
    duration: "1m 58s",
    date: "Sep 18, 2026",
    status: "Completed",
  },
  {
    id: 3,
    repository: "resume-analyzer",
    branch: "develop",
    score: 78,
    findings: 21,
    critical: 1,
    high: 5,
    medium: 9,
    low: 6,
    files: 156,
    duration: "1m 32s",
    date: "Sep 16, 2026",
    status: "Completed",
  },
  {
    id: 4,
    repository: "codesentinel-api",
    branch: "main",
    score: 76,
    findings: 18,
    critical: 2,
    high: 4,
    medium: 7,
    low: 5,
    files: 238,
    duration: "2m 36s",
    date: "Sep 12, 2026",
    status: "Completed",
  },
];

const severityData = [
  { label: "Critical", value: 1, width: "12%", color: "bg-red-500" },
  { label: "High", value: 2, width: "22%", color: "bg-orange-400" },
  { label: "Medium", value: 2, width: "22%", color: "bg-yellow-400" },
  { label: "Low", value: 1, width: "12%", color: "bg-blue-400" },
];

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

function ScoreRing({
  score,
  size = 150,
}: {
  score: number;
  size?: number;
}) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        className="-rotate-90"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="8"
        />

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className="absolute text-center">
        <div className="text-3xl font-semibold text-white">{score}</div>
        <div className="text-[10px] uppercase tracking-widest text-gray-500">
          Score
        </div>
      </div>
    </div>
  );
}

export default function ReportsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(reports[0]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Close menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[274px] flex-col border-r border-white/[0.07] bg-[#070a0e] transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[86px] items-center border-b border-white/[0.06] px-6">
          <a href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <Shield className="h-5 w-5 text-cyan-400" />
            </div>

            <span className="text-[17px] font-semibold tracking-tight">
              Code<span className="text-cyan-400">Sentinel</span>
            </span>
          </a>

          <button
            onClick={() => setMobileOpen(false)}
            className="ml-auto text-gray-500 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-7">
          <p className="mb-4 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
            Overview
          </p>

          <div className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard />}
              label="Dashboard"
            />
          </div>

          <p className="mb-4 mt-8 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
            Workspace
          </p>

          <div className="space-y-1">
            <SidebarItem
              icon={<FolderGit2 />}
              label="Repositories"
            />
            <SidebarItem
              icon={<Zap />}
              label="Analyses"
            />
            <SidebarItem
              icon={<ShieldAlert />}
              label="Findings"
            />
            <SidebarItem
              icon={<FileText />}
              label="Reports"
              active
            />
          </div>

          <p className="mb-4 mt-8 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
            System
          </p>

          <SidebarItem
            icon={<Settings />}
            label="Settings"
          />
        </div>

        {/* AI Engine */}
        <div className="border-t border-white/[0.06] p-4">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black">
                <Sparkles className="h-4 w-4 text-cyan-400" />
              </div>

              <div>
                <div className="text-xs font-medium text-white">
                  AI Engine
                </div>

                <div className="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Operational
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="min-h-screen lg:pl-[274px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-[86px] items-center border-b border-white/[0.06] bg-[#05070a]/90 px-5 backdrop-blur-xl sm:px-8">
          <button
            onClick={() => setMobileOpen(true)}
            className="mr-4 rounded-lg border border-white/[0.08] p-2 text-gray-400 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative w-full max-w-[420px]">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
            <input
              placeholder="Search reports..."
              className="h-10 w-full rounded-lg border border-white/[0.08] bg-white/[0.025] pl-10 pr-4 text-xs text-white placeholder:text-gray-600 focus:border-cyan-400/30"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="relative rounded-lg border border-white/[0.08] p-2.5 text-gray-500 transition hover:border-white/15 hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-xs font-semibold text-black">
              D
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-10">
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-600">
              <span>Workspace</span>
              <span>/</span>
              <span className="text-gray-400">Reports</span>
            </div>

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-white">
                  Reports
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Review security audits, engineering insights, and historical
                  analysis reports across your repositories.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-xs font-medium text-cyan-300 transition hover:bg-cyan-400/15">
                <Download className="h-4 w-4" />
                Export report
              </button>
            </div>
          </div>

          {/* Main report */}
          <section className="mb-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.015]">
            <div className="border-b border-white/[0.06] px-6 py-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                      <Shield className="h-4 w-4 text-cyan-400" />
                    </div>

                    <div>
                      <h2 className="text-sm font-semibold text-white">
                        Latest Security Audit
                      </h2>

                      <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-500">
                        <span>{selectedReport.repository}</span>
                        <span>•</span>
                        <span>{selectedReport.branch}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </span>

                  <button className="rounded-lg border border-white/[0.08] p-2 text-gray-500 hover:text-white">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
              {/* Score */}
              <div className="flex items-center gap-8 border-b border-white/[0.06] p-7 lg:border-b-0 lg:border-r">
                <ScoreRing score={selectedReport.score} />

                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-600">
                    Security posture
                  </div>

                  <div className="mt-2 text-lg font-medium text-white">
                    Good standing
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    +8 points from previous audit
                  </div>

                  <p className="mt-4 max-w-sm text-xs leading-5 text-gray-500">
                    The repository has a healthy security posture with a small
                    number of issues requiring attention.
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2">
                <div className="border-b border-r border-white/[0.06] p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <ShieldAlert className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest">
                      Findings
                    </span>
                  </div>

                  <div className="mt-3 text-2xl font-semibold text-white">
                    {selectedReport.findings}
                  </div>

                  <div className="mt-1 text-[11px] text-gray-600">
                    Issues detected
                  </div>
                </div>

                <div className="border-b border-white/[0.06] p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FileCode2 className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest">
                      Files
                    </span>
                  </div>

                  <div className="mt-3 text-2xl font-semibold text-white">
                    {selectedReport.files}
                  </div>

                  <div className="mt-1 text-[11px] text-gray-600">
                    Files analyzed
                  </div>
                </div>

                <div className="border-r border-white/[0.06] p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock3 className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest">
                      Duration
                    </span>
                  </div>

                  <div className="mt-3 text-2xl font-semibold text-white">
                    {selectedReport.duration}
                  </div>

                  <div className="mt-1 text-[11px] text-gray-600">
                    Analysis runtime
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BarChart3 className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-widest">
                      Coverage
                    </span>
                  </div>

                  <div className="mt-3 text-2xl font-semibold text-white">
                    94%
                  </div>

                  <div className="mt-1 text-[11px] text-gray-600">
                    Code analyzed
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two-column section */}
          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            {/* AI Summary */}
            <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <h2 className="text-sm font-semibold text-white">
                      AI Executive Summary
                    </h2>
                  </div>

                  <p className="mt-1 text-[11px] text-gray-600">
                    Generated from the latest repository audit
                  </p>
                </div>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] text-cyan-300">
                  AI Analysis
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-black/20 p-5">
                <p className="text-sm leading-7 text-gray-400">
                  The latest analysis indicates that{" "}
                  <span className="text-white">codesentinel-api</span> is in a
                  generally healthy state. The audit identified{" "}
                  <span className="text-orange-300">3 security concerns</span>{" "}
                  and several code-quality improvements.
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  The most important issue is a potential exposed API
                  credential. Addressing the critical security finding and
                  improving input validation should be prioritized before the
                  next production release.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-red-400/10 bg-red-400/[0.04] p-4">
                    <div className="text-[10px] uppercase tracking-wider text-red-400">
                      Priority
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">
                      Security
                    </div>
                  </div>

                  <div className="rounded-lg border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                    <div className="text-[10px] uppercase tracking-wider text-cyan-400">
                      Recommendation
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">
                      Fix credentials
                    </div>
                  </div>

                  <div className="rounded-lg border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                    <div className="text-[10px] uppercase tracking-wider text-emerald-400">
                      Confidence
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">
                      96%
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Severity */}
            <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-white">
                  Risk distribution
                </h2>

                <p className="mt-1 text-[11px] text-gray-600">
                  Findings grouped by severity
                </p>
              </div>

              <div className="space-y-5">
                {severityData.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-gray-500">{item.value}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500">
                      Overall risk level
                    </div>
                    <div className="mt-1 text-sm font-medium text-yellow-300">
                      Moderate
                    </div>
                  </div>

                  <div className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 p-2.5">
                    <ShieldAlert className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Report history */}
          <section className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] px-6 py-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Report history
                </h2>
                <p className="mt-1 text-[11px] text-gray-600">
                  Previous security audits and analysis snapshots
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-xs text-gray-400 hover:text-white">
                Filter
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="divide-y divide-white/[0.05]">
              {reports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report)}
                  className={`group flex w-full flex-col gap-4 px-6 py-5 text-left transition hover:bg-white/[0.025] md:flex-row md:items-center ${
                    selectedReport.id === report.id
                      ? "bg-cyan-400/[0.025]"
                      : ""
                  }`}
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025]">
                      <FileText className="h-4 w-4 text-gray-500" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-white">
                          {report.repository}
                        </span>

                        <span className="rounded border border-white/[0.07] px-1.5 py-0.5 text-[9px] text-gray-500">
                          {report.branch}
                        </span>
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-3 text-[10px] text-gray-600">
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.files} files</span>
                        <span>•</span>
                        <span>{report.findings} findings</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-7">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-gray-600">
                        Score
                      </div>

                      <div
                        className={`mt-1 text-lg font-semibold ${
                          report.score >= 85
                            ? "text-emerald-400"
                            : report.score >= 75
                              ? "text-yellow-300"
                              : "text-red-400"
                        }`}
                      >
                        {report.score}
                      </div>
                    </div>

                    <div className="hidden sm:block">
                      <div className="text-[9px] uppercase tracking-widest text-gray-600">
                        Findings
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-xs">
                        <span className="text-red-400">
                          {report.critical}
                        </span>
                        <span className="text-orange-400">
                          {report.high}
                        </span>
                        <span className="text-yellow-400">
                          {report.medium}
                        </span>
                        <span className="text-blue-400">
                          {report.low}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-gray-700 transition group-hover:text-cyan-400" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Bottom info */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-400/10 p-2.5">
                  <TrendingUp className="h-4 w-4 text-cyan-400" />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-600">
                    Score trend
                  </div>
                  <div className="mt-1 text-sm font-medium text-emerald-400">
                    Improving
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-400/10 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-600">
                    Last audit
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    12 minutes ago
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-400/10 p-2.5">
                  <FileCode2 className="h-4 w-4 text-purple-400" />
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-600">
                    Total audits
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    18 analyses
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/[0.06] py-6 text-[10px] text-gray-700 sm:flex-row">
            <span>CodeSentinel Security Platform</span>
            <span>AI-powered software project auditing</span>
          </div>
        </div>
      </main>
    </div>
  );
}