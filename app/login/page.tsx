"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">
      {/* Background */}
      <div className="cs-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

      {/* Top navigation */}
      <header className="relative z-20 flex h-20 items-center justify-between border-b border-white/[0.06] px-6 sm:px-10">
        <a
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
            <Shield className="h-5 w-5 text-cyan-400" />
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Code<span className="text-cyan-400">Sentinel</span>
          </span>
        </a>

        <a
          href="/"
          className="text-xs text-gray-500 transition hover:text-gray-200"
        >
          Back to home
        </a>
      </header>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        {/* =========================================================
            LEFT SIDE
        ========================================================= */}
        <section className="hidden lg:block">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            AI-powered security
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight xl:text-6xl">
            Secure your code.
            <br />
            <span className="cs-gradient-text">
              Ship with confidence.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500">
            CodeSentinel intelligently audits your software projects for
            security vulnerabilities, bugs, reliability issues, and code
            quality problems.
          </p>

          {/* Features */}
          <div className="mt-9 space-y-4">
            {[
              "AI-powered code analysis",
              "Security vulnerability detection",
              "Engineering quality insights",
              "Automated audit reports",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                </div>

                {item}
              </div>
            ))}
          </div>

          {/* Security dashboard preview */}
          <div className="relative mt-12 max-w-xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-2xl shadow-black/20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.045] via-transparent to-transparent" />

            <div className="relative">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                    <Shield className="h-3.5 w-3.5 text-cyan-400" />
                  </div>

                  <div>
                    <div className="text-xs font-medium text-white">
                      Security Engine
                    </div>

                    <div className="mt-0.5 text-[9px] text-gray-600">
                      codesentinel-api
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Operational
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <div className="text-[9px] uppercase tracking-wider text-gray-600">
                    Security
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-white">
                    84
                  </div>

                  <div className="mt-1 text-[9px] text-emerald-400">
                    +8.2%
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <div className="text-[9px] uppercase tracking-wider text-gray-600">
                    Findings
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-white">
                    12
                  </div>

                  <div className="mt-1 text-[9px] text-orange-400">
                    3 security
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
                  <div className="text-[9px] uppercase tracking-wider text-gray-600">
                    Coverage
                  </div>

                  <div className="mt-2 text-2xl font-semibold text-white">
                    94%
                  </div>

                  <div className="mt-1 text-[9px] text-cyan-400">
                    Excellent
                  </div>
                </div>
              </div>

              {/* Fake scan line */}
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/[0.05] bg-black/20 px-3 py-2.5">
                <Zap className="h-3.5 w-3.5 text-cyan-400" />

                <div className="flex-1">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[82%] rounded-full bg-cyan-400/70" />
                  </div>
                </div>

                <span className="text-[9px] text-gray-600">
                  82% analyzed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RIGHT SIDE — LOGIN
        ========================================================= */}
        <section className="mx-auto w-full max-w-[440px]">
          {/* Mobile branding */}
          <div className="mb-8 flex flex-col items-center lg:hidden">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-lg shadow-cyan-400/5">
              <Shield className="h-7 w-7 text-cyan-400" />
            </div>

            <div className="mt-4 text-lg font-semibold">
              Code<span className="text-cyan-400">Sentinel</span>
            </div>
          </div>

          {/* Login card */}
          <div className="rounded-2xl border border-white/[0.09] bg-[#090d12]/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
            {/* Heading */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] uppercase tracking-widest text-gray-500">
                <LockKeyhole className="h-3 w-3 text-cyan-400" />
                Secure access
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Sign in to your CodeSentinel workspace.
              </p>
            </div>

            {/* GitHub-style button */}
            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2.5 rounded-lg border border-white/[0.09] bg-white/[0.025] text-sm font-medium text-gray-300 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
            >
              <Code2 className="h-4 w-4" />
              Continue with GitHub
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.07]" />

              <span className="text-[10px] uppercase tracking-widest text-gray-700">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-11 w-full rounded-lg border border-white/[0.08] bg-black/20 pl-10 pr-4 text-sm text-white placeholder:text-gray-700 transition focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-gray-400"
                >
                  Password
                </label>

                <a
                  href="#"
                  className="text-[11px] text-cyan-400 transition hover:text-cyan-300"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-lg border border-white/[0.08] bg-black/20 pl-10 pr-11 text-sm text-white placeholder:text-gray-700 transition focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:ring-1 focus:ring-cyan-400/10"
                />

                <button
                  type="button"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="mt-5 flex items-center gap-2.5">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-3.5 w-3.5 cursor-pointer rounded border-white/10 bg-black accent-cyan-400"
              />

              <label
                htmlFor="remember"
                className="cursor-pointer text-xs text-gray-500"
              >
                Remember me for 30 days
              </label>
            </div>

            {/* Sign in */}
            <a
              href="/dashboard"
              className="group mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 text-sm font-semibold text-[#031014] shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-300 hover:shadow-cyan-400/20"
            >
              Sign in
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Security message */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-gray-600">
              <LockKeyhole className="h-3 w-3 text-emerald-500/70" />
              Secure encrypted connection
            </div>

            {/* Register */}
            <div className="mt-7 border-t border-white/[0.06] pt-6 text-center">
              <span className="text-xs text-gray-600">
                Don't have a workspace?
              </span>

              <a
                href="/"
                className="ml-2 text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Get started
              </a>
            </div>
          </div>

          {/* Legal */}
          <p className="mt-6 text-center text-[10px] leading-5 text-gray-700">
            By continuing, you agree to CodeSentinel&apos;s{" "}
            <a href="#" className="transition hover:text-gray-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="transition hover:text-gray-500">
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </div>

      {/* Bottom status */}
      <div className="pointer-events-none absolute bottom-5 left-6 hidden items-center gap-2 text-[9px] uppercase tracking-widest text-gray-700 lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        All systems operational
      </div>
    </main>
  );
}