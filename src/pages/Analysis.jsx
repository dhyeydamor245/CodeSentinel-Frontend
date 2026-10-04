import {
  Activity,
  ArrowLeft,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  FileCode2,
  FolderSearch,
  GitBranch,
  Loader2,
  Menu,
  Pause,
  Play,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const stages = [
  {
    id: 1,
    title: "Repository scan",
    description: "Indexing project structure and source files",
    status: "complete",
    icon: FolderSearch,
    progress: 100,
  },
  {
    id: 2,
    title: "Static analysis",
    description: "Running security and code-quality analyzers",
    status: "complete",
    icon: Code2,
    progress: 100,
  },
  {
    id: 3,
    title: "AI engineering review",
    description: "AI agents are reviewing detected findings",
    status: "running",
    icon: BrainCircuit,
    progress: 68,
  },
  {
    id: 4,
    title: "Architecture analysis",
    description: "Evaluating project structure and dependencies",
    status: "pending",
    icon: Activity,
    progress: 0,
  },
  {
    id: 5,
    title: "Report generation",
    description: "Creating actionable engineering recommendations",
    status: "pending",
    icon: FileCode2,
    progress: 0,
  },
];

const agents = [
  {
    name: "Security Agent",
    description: "Vulnerability & secret detection",
    status: "complete",
    score: "94",
    icon: ShieldCheck,
  },
  {
    name: "Quality Agent",
    description: "Maintainability & code quality",
    status: "complete",
    score: "91",
    icon: Code2,
  },
  {
    name: "Architecture Agent",
    description: "Structure & dependency analysis",
    status: "running",
    score: "—",
    icon: Activity,
  },
  {
    name: "Testing Agent",
    description: "Test coverage & reliability",
    status: "pending",
    score: "—",
    icon: Terminal,
  },
];

export default function AnalysisPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paused, setPaused] = useState(false);

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
          <NavSection title="Overview">
            <SidebarItem
              icon={<Activity />}
              label="Dashboard"
              href="/dashboard"
            />
          </NavSection>

          <NavSection title="Workspace">
            <SidebarItem
              icon={<FolderSearch />}
              label="Repositories"
              href="/repositories"
            />

            <SidebarItem
              icon={<Activity />}
              label="Analyses"
              active
              href="/analysis"
            />

            <SidebarItem
              icon={<ShieldCheck />}
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
        </nav>

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
            </div>

            <span className="text-sm font-medium md:hidden">
              Analysis
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-[10px] text-cyan-300">
                Analysis running
              </span>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-black">
              D
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[120px]" />

          <div className="relative mx-auto max-w-[1450px]">
            {/* Back */}
            <Link
              to="/repositories"
              className="mb-7 flex w-fit items-center gap-2 text-xs text-gray-600 transition hover:text-gray-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to repositories
            </Link>

            {/* Header */}
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                    <BrainCircuit className="h-4 w-4 text-cyan-400" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-cyan-400">
                    AI engineering audit
                  </span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Analyzing{" "}
                  <span className="text-cyan-400">
                    codesentinel-api
                  </span>
                </h1>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <GitBranch className="h-3.5 w-3.5" />
                    main
                  </span>

                  <span>•</span>

                  <span>Python</span>

                  <span>•</span>

                  <span>243 files</span>

                  <span>•</span>

                  <span>Started 2 min ago</span>
                </div>
              </div>

              <button
                onClick={() => setPaused(!paused)}
                className="flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-gray-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                {paused ? (
                  <>
                    <Play className="h-3.5 w-3.5" />
                    Resume analysis
                  </>
                ) : (
                  <>
                    <Pause className="h-3.5 w-3.5" />
                    Pause analysis
                  </>
                )}
              </button>
            </div>

            {/* Overall progress */}
            <div className="cs-card mt-8 rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs text-gray-600">
                    Overall progress
                  </p>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-4xl font-semibold">
                      68%
                    </span>

                    <span className="mb-1 text-xs text-cyan-400">
                      AI review in progress
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-xs text-gray-500">
                    Estimated time remaining
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm font-medium sm:justify-end">
                    <Clock3 className="h-3.5 w-3.5 text-gray-600" />
                    ~ 1 minute
                  </p>
                </div>
              </div>

              <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300 ${
                    paused ? "" : "animate-pulse"
                  }`}
                  style={{ width: "68%" }}
                />
              </div>

              <div className="mt-3 flex justify-between text-[10px] text-gray-700">
                <span>Started</span>
                <span>Static analysis complete</span>
                <span>AI review</span>
                <span>Report</span>
              </div>
            </div>

            {/* Main columns */}
            <div className="mt-4 grid gap-4 xl:grid-cols-5">
              {/* Pipeline */}
              <div className="cs-card rounded-2xl p-6 xl:col-span-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">
                      Audit pipeline
                    </p>

                    <h2 className="mt-1 text-lg font-semibold">
                      Analysis stages
                    </h2>
                  </div>

                  <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2 py-1 text-[9px] text-cyan-400">
                    LIVE
                  </span>
                </div>

                <div className="mt-7 space-y-1">
                  {stages.map((stage, index) => {
                    const Icon = stage.icon;

                    return (
                      <div key={stage.id}>
                        <div className="flex items-start gap-4 rounded-xl p-4 transition hover:bg-white/[0.025]">
                          <div
                            className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                              stage.status === "complete"
                                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                                : stage.status === "running"
                                ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                                : "border-white/[0.08] bg-white/[0.025] text-gray-600"
                            }`}
                          >
                            {stage.status === "complete" ? (
                              <Check className="h-4 w-4" />
                            ) : stage.status === "running" ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Icon className="h-4 w-4" />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p
                                className={`text-sm font-medium ${
                                  stage.status === "pending"
                                    ? "text-gray-600"
                                    : "text-white"
                                }`}
                              >
                                {stage.title}
                              </p>

                              {stage.status === "complete" && (
                                <span className="text-[9px] text-emerald-400">
                                  Complete
                                </span>
                              )}

                              {stage.status === "running" && (
                                <span className="text-[9px] text-cyan-400">
                                  {stage.progress}%
                                </span>
                              )}

                              {stage.status === "pending" && (
                                <span className="text-[9px] text-gray-700">
                                  Pending
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs text-gray-600">
                              {stage.description}
                            </p>

                            {stage.status === "running" && (
                              <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                                <div
                                  className="h-full rounded-full bg-cyan-400"
                                  style={{
                                    width: `${stage.progress}%`,
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        {index !== stages.length - 1 && (
                          <div className="ml-9 h-3 w-px bg-white/[0.06]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Agents */}
              <div className="cs-card rounded-2xl p-6 xl:col-span-2">
                <div>
                  <p className="text-xs text-gray-600">
                    Intelligence layer
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    AI engineering team
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Specialized agents inspect your project from
                    different engineering perspectives.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {agents.map((agent) => {
                    const Icon = agent.icon;

                    return (
                      <div
                        key={agent.name}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.018] p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                              agent.status === "complete"
                                ? "bg-emerald-400/10 text-emerald-400"
                                : agent.status === "running"
                                ? "bg-cyan-400/10 text-cyan-400"
                                : "bg-white/[0.04] text-gray-600"
                            }`}
                          >
                            {agent.status === "running" ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Icon className="h-4 w-4" />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium">
                              {agent.name}
                            </p>

                            <p className="mt-1 truncate text-[10px] text-gray-600">
                              {agent.description}
                            </p>
                          </div>

                          {agent.status === "complete" && (
                            <div className="text-right">
                              <p className="text-sm font-semibold text-emerald-400">
                                {agent.score}
                              </p>

                              <p className="text-[8px] text-gray-700">
                                SCORE
                              </p>
                            </div>
                          )}

                          {agent.status === "running" && (
                            <span className="text-[9px] text-cyan-400">
                              Running
                            </span>
                          )}

                          {agent.status === "pending" && (
                            <span className="text-[9px] text-gray-700">
                              Queued
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-4">
                  <div className="flex gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                    <div>
                      <p className="text-xs font-medium text-cyan-300">
                        AI agents are collaborating
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-gray-600">
                        Findings from static analysis are being enriched
                        with context, severity and remediation guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live activity */}
            <div className="cs-card mt-4 rounded-2xl p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs text-gray-600">
                    Live activity
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    Analysis console
                  </h2>
                </div>

                <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-white">
                  <ChevronDown className="h-3.5 w-3.5" />
                  Auto-scroll
                </button>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.06] bg-[#030507]">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />

                  <span className="ml-3 text-[9px] text-gray-700">
                    codesentinel-analysis
                  </span>
                </div>

                <div className="space-y-2 p-5 font-mono text-[10px] leading-5">
                  <LogLine
                    time="15:19:02"
                    type="info"
                    text="Repository indexed successfully — 243 files"
                  />

                  <LogLine
                    time="15:19:08"
                    type="success"
                    text="Semgrep completed — 7 findings detected"
                  />

                  <LogLine
                    time="15:19:14"
                    type="success"
                    text="Bandit completed — 3 security findings"
                  />

                  <LogLine
                    time="15:19:21"
                    type="info"
                    text="Security Agent started contextual review"
                  />

                  <LogLine
                    time="15:19:28"
                    type="info"
                    text="Architecture Agent analyzing dependency graph..."
                  />

                  <div className="flex items-center gap-2 text-cyan-400">
                    <span>›</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-5 text-[10px] text-gray-600 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                CodeSentinel AI engine is processing
              </div>

              <span>Analysis ID: CS-2026-0920-018</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

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

function SidebarItem({ icon, label, active = false, href }) {
  return (
    <Link
      to={href}
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${
        active
          ? "bg-cyan-400/10 text-cyan-300"
          : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
      }`}
    >
      <span className="[&_svg]:h-4 [&_svg]:w-4">
        {icon}
      </span>

      {label}
    </Link>
  );
}

function LogLine({ time, type, text }) {
  return (
    <div className="flex gap-3">
      <span className="text-gray-700">{time}</span>

      <span
        className={
          type === "success"
            ? "text-emerald-400"
            : "text-cyan-400"
        }
      >
        {type === "success" ? "✓" : "→"}
      </span>

      <span className="text-gray-500">{text}</span>
    </div>
  );
}
