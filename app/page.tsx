import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#05070a]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              Code<span className="text-cyan-400">Sentinel</span>
            </span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>

            <a href="#workflow" className="transition hover:text-white">
              How it works
            </a>

            <a href="#security" className="transition hover:text-white">
              Security
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden px-4 py-2 text-sm text-gray-300 transition hover:text-white sm:block"
            >
              Sign in
            </a>

            <a
              href="/dashboard"
              className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Get started
            </a>
          </div>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative pt-20">
        {/* Grid background */}
        <div className="cs-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        {/* Main glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl pb-20 pt-32 text-center lg:pt-40">
            {/* Badge */}
            <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />

              AI-POWERED SOFTWARE PROJECT AUDITOR

              <span className="ml-1 h-1 w-1 rounded-full bg-cyan-400" />

              Intelligent code analysis
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[80px]">
              Your code deserves
              <br />

              <span className="cs-gradient-text">
                a second pair of eyes.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              CodeSentinel analyzes your entire software project to discover
              security vulnerabilities, bugs, code-quality issues, and
              architectural risks — then explains exactly what to fix.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/dashboard"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300 sm:w-auto"
              >
                Analyze your project

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#workflow"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-gray-200 transition hover:bg-white/[0.07] sm:w-auto"
              >
                See how it works
              </a>
            </div>

            {/* Trust */}
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />

              Built for modern engineering teams
            </div>
          </div>

          {/* ================= PRODUCT PREVIEW ================= */}
          <div className="relative mx-auto max-w-6xl pb-28">
            {/* Glow */}
            <div className="absolute left-1/2 top-20 h-80 w-4/5 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

            <div className="cs-card cs-glow relative overflow-hidden rounded-2xl">
              {/* Window header */}
              <div className="flex h-12 items-center border-b border-white/[0.07] bg-white/[0.015] px-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>

                <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.025] px-4 py-1 text-[10px] text-gray-500">
                  <ShieldCheck className="h-3 w-3 text-cyan-400" />

                  codesentinel / project-audit
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="grid min-h-[430px] grid-cols-12">
                {/* Sidebar */}
                <aside className="col-span-3 hidden border-r border-white/[0.06] bg-white/[0.01] p-5 md:block">
                  <div className="mb-8 flex items-center gap-2 text-sm font-semibold">
                    <Shield className="h-4 w-4 text-cyan-400" />

                    CodeSentinel
                  </div>

                  <div className="space-y-1 text-xs">
                    <PreviewNav active text="Overview" />
                    <PreviewNav text="Repositories" />
                    <PreviewNav text="Analyses" />
                    <PreviewNav text="Findings" />
                    <PreviewNav text="Reports" />
                  </div>

                  <div className="mt-12 border-t border-white/[0.06] pt-5">
                    <p className="mb-3 text-[9px] uppercase tracking-widest text-gray-600">
                      Project
                    </p>

                    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-3.5 w-3.5 text-gray-400" />

                        <span className="text-[10px] text-gray-300">
                          my-project
                        </span>
                      </div>

                      <p className="mt-2 text-[9px] text-gray-600">
                        main • analyzed 2m ago
                      </p>
                    </div>
                  </div>
                </aside>

                {/* Main preview */}
                <div className="col-span-12 p-6 md:col-span-9 md:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-600">
                        Security overview
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        Project health
                      </h3>
                    </div>

                    <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] text-emerald-400">
                      ● Analysis complete
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    <PreviewStat
                      label="Security score"
                      value="84"
                      suffix="/100"
                      icon={<ShieldCheck />}
                    />

                    <PreviewStat
                      label="Findings"
                      value="12"
                      icon={<Zap />}
                    />

                    <PreviewStat
                      label="Files analyzed"
                      value="243"
                      icon={<Terminal />}
                    />
                  </div>

                  {/* Chart */}
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-medium">
                        Security trend
                      </span>

                      <span className="text-[10px] text-gray-600">
                        Last 30 days
                      </span>
                    </div>

                    <div className="relative h-32 overflow-hidden">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        <span className="border-t border-white/[0.04]" />
                        <span className="border-t border-white/[0.04]" />
                        <span className="border-t border-white/[0.04]" />
                        <span className="border-t border-white/[0.04]" />
                      </div>

                      <svg
                        viewBox="0 0 800 150"
                        preserveAspectRatio="none"
                        className="relative h-full w-full"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#22d3ee"
                              stopOpacity="0.22"
                            />

                            <stop
                              offset="100%"
                              stopColor="#22d3ee"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 120 C70 110, 80 90, 140 100 S210 65, 270 78 S350 40, 410 55 S500 72, 560 40 S650 55, 720 25 S770 40, 800 15 L800 150 L0 150 Z"
                          fill="url(#chartGradient)"
                        />

                        <path
                          d="M0 120 C70 110, 80 90, 140 100 S210 65, 270 78 S350 40, 410 55 S500 72, 560 40 S650 55, 720 25 S770 40, 800 15"
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="border-t border-white/[0.06] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              One platform
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Understand your software
              <br />

              <span className="text-gray-500">
                before it becomes a problem.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<ShieldCheck />}
              number="01"
              title="Security"
              text="Detect vulnerabilities, exposed secrets, insecure patterns and risky dependencies."
            />

            <Feature
              icon={<Terminal />}
              number="02"
              title="Bug detection"
              text="Find potential bugs and problematic code paths before they reach production."
            />

            <Feature
              icon={<Zap />}
              number="03"
              title="Code quality"
              text="Measure complexity, maintainability and engineering quality across your project."
            />

            <Feature
              icon={<Sparkles />}
              number="04"
              title="AI insights"
              text="Turn raw findings into explanations, priorities and actionable engineering fixes."
            />
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      <section
        id="workflow"
        className="border-t border-white/[0.06] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From repository to
              <span className="text-gray-500">
                {" "}
                engineering insight.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
            <WorkflowStep
              number="01"
              title="Connect your project"
              text="Connect a GitHub repository or provide your project for analysis."
            />

            <WorkflowStep
              number="02"
              title="Run the audit"
              text="Static analyzers and AI agents inspect your project from multiple angles."
            />

            <WorkflowStep
              number="03"
              title="Fix with confidence"
              text="Review prioritized findings and follow clear recommendations."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden border-t border-white/[0.06] py-28">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <ShieldCheck className="h-6 w-6 text-cyan-400" />
          </div>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
            Ship better code.
            <br />

            <span className="text-gray-500">
              Know what&apos;s inside.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Give your engineering team an AI-powered second pair of eyes.
          </p>

          <a
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Start your first audit

            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />

            <span>
              Code<span className="text-gray-300">Sentinel</span>
            </span>
          </div>

          <p>AI-powered software project auditing.</p>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   PREVIEW COMPONENTS
   ========================================================= */

function PreviewNav({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-md px-3 py-2 ${
        active
          ? "bg-cyan-400/10 text-cyan-300"
          : "text-gray-600"
      }`}
    >
      {text}
    </div>
  );
}

function PreviewStat({
  label,
  value,
  suffix,
  icon,
}: {
  label: string;
  value: string;
  suffix?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-600">
          {label}
        </span>

        <span className="text-cyan-400 [&_svg]:h-3.5 [&_svg]:w-3.5">
          {icon}
        </span>
      </div>

      <div className="mt-3 text-2xl font-semibold">
        {value}

        {suffix && (
          <span className="text-xs font-normal text-gray-600">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function Feature({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="cs-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 [&_svg]:h-5 [&_svg]:w-5">
          {icon}
        </div>

        <span className="font-mono text-xs text-gray-700">
          {number}
        </span>
      </div>

      <h3 className="mt-8 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {text}
      </p>
    </div>
  );
}

function WorkflowStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="cs-card rounded-2xl p-7">
      <span className="font-mono text-sm text-cyan-400">
        {number}
      </span>

      <h3 className="mt-6 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {text}
      </p>
    </div>
  );
}