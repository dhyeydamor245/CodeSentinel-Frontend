import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Bug,
  CheckCircle2,
  ChevronDown,
  Copy,
  FileCode2,
  Filter,
  FolderGit2,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const findings = [
  {
    title: "Hardcoded API Secret",
    description:
      "A sensitive API credential appears to be stored directly inside the source code.",
    file: "src/config/api.ts",
    line: 18,
    severity: "Critical",
    category: "Security",
    rule: "SECRET-001",
    status: "Open",
  },
  {
    title: "SQL Injection Risk",
    description:
      "User-controlled input is directly incorporated into a SQL query without sufficient parameterization.",
    file: "api/users.py",
    line: 42,
    severity: "High",
    category: "Security",
    rule: "SQL-004",
    status: "Open",
  },
  {
    title: "Missing Input Validation",
    description:
      "Request parameters are used before being validated against the expected input format.",
    file: "api/routes/auth.py",
    line: 76,
    severity: "High",
    category: "Reliability",
    rule: "INPUT-012",
    status: "Open",
  },
  {
    title: "Unused Dependency",
    description:
      "A dependency appears in the project manifest but was not detected in the analyzed source.",
    file: "package.json",
    line: 27,
    severity: "Medium",
    category: "Quality",
    rule: "DEP-003",
    status: "Open",
  },
  {
    title: "High Cyclomatic Complexity",
    description:
      "This function contains multiple branches and may be difficult to test and maintain.",
    file: "services/analyzer.py",
    line: 124,
    severity: "Medium",
    category: "Quality",
    rule: "COMPLEX-007",
    status: "Open",
  },
  {
    title: "Missing Error Handling",
    description:
      "An external operation can fail without being handled by the current execution path.",
    file: "services/github.py",
    line: 91,
    severity: "Low",
    category: "Reliability",
    rule: "ERROR-008",
    status: "Open",
  },
];

const severityStyles = {
  Critical: {
    text: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
    icon: ShieldAlert,
  },
  High: {
    text: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    icon: AlertTriangle,
  },
  Medium: {
    text: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    icon: AlertTriangle,
  },
  Low: {
    text: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    icon: Bug,
  },
};

export default function FindingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");
  const [selectedFinding, setSelectedFinding] = useState(null);

  const filteredFindings = findings.filter((finding) => {
    const matchesSearch =
      `${finding.title} ${finding.description} ${finding.file}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSeverity =
      severity === "All" || finding.severity === severity;

    return matchesSearch && matchesSeverity;
  });

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
              icon={<LayoutDashboard />}
              label="Dashboard"
              href="/dashboard"
            />
          </NavSection>

          <NavSection title="Workspace">
            <SidebarItem
              icon={<FolderGit2 />}
              label="Repositories"
              href="/repositories"
            />

            <SidebarItem
              icon={<Zap />}
              label="Analyses"
              href="/analysis"
            />

            <SidebarItem
              icon={<ShieldAlert />}
              label="Findings"
              active
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
                Search findings...
              </span>
            </div>

            <span className="text-sm font-medium md:hidden">
              Findings
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-white/[0.07] p-2.5 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </button>

            <div className="hidden h-6 w-px bg-white/[0.08] sm:block" />

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-black">
              D
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-red-500/[0.025] blur-[110px]" />

          <div className="relative mx-auto max-w-[1450px]">
            {/* Header */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-600">
                  <span>Workspace</span>
                  <span>/</span>
                  <span className="text-gray-400">
                    Findings
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Findings
                  </h1>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-gray-500">
                    {findings.length} open
                  </span>
                </div>

                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Review vulnerabilities, bugs, and code-quality issues
                  detected across your projects.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-gray-300 hover:bg-white/[0.05]">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Mark reviewed
              </button>
            </div>

            {/* Severity summary */}
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <SeverityCard
                label="Critical"
                count="1"
                color="red"
                icon={<ShieldAlert />}
              />

              <SeverityCard
                label="High"
                count="2"
                color="orange"
                icon={<AlertTriangle />}
              />

              <SeverityCard
                label="Medium"
                count="2"
                color="yellow"
                icon={<AlertTriangle />}
              />

              <SeverityCard
                label="Low"
                count="1"
                color="blue"
                icon={<Bug />}
              />
            </div>

            {/* Filters */}
            <div className="mt-6 flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search findings, files, or rules..."
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-4 text-sm text-white placeholder:text-gray-600 outline-none focus:border-cyan-400/30"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {["All", "Critical", "High", "Medium", "Low"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setSeverity(item)}
                      className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-xs transition ${
                        severity === item
                          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                          : "border-white/[0.08] bg-white/[0.025] text-gray-500 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}

                <button className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-gray-500 hover:text-white">
                  <Filter className="h-3.5 w-3.5" />
                  More filters
                </button>
              </div>
            </div>

            {/* Results header */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-xs text-gray-600">
                Showing{" "}
                <span className="text-gray-400">
                  {filteredFindings.length}
                </span>{" "}
                findings
              </p>

              <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-white">
                Sort: Severity
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Findings */}
            <div className="mt-4 space-y-3">
              {filteredFindings.map((finding) => (
                <FindingCard
                  key={finding.rule}
                  finding={finding}
                  onOpen={() => setSelectedFinding(finding)}
                />
              ))}

              {filteredFindings.length === 0 && (
                <div className="cs-card rounded-2xl py-16 text-center">
                  <Search className="mx-auto h-8 w-8 text-gray-700" />

                  <p className="mt-4 text-sm font-medium">
                    No findings found
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Try changing your search or filters.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5 text-[10px] text-gray-600">
              <span>Last analysis: 12 minutes ago</span>

              <span>Project: codesentinel-api</span>
            </div>
          </div>
        </main>
      </div>

      {/* Detail modal */}
      {selectedFinding && (
        <FindingDetail
          finding={selectedFinding}
          onClose={() => setSelectedFinding(null)}
        />
      )}
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

function SeverityCard({ label, count, color, icon }) {
  const styles = {
    red: "border-red-400/20 bg-red-400/5 text-red-400",
    orange: "border-orange-400/20 bg-orange-400/5 text-orange-400",
    yellow: "border-yellow-400/20 bg-yellow-400/5 text-yellow-400",
    blue: "border-blue-400/20 bg-blue-400/5 text-blue-400",
  };

  return (
    <div className="cs-card rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg border ${styles[color]} [&_svg]:h-4 [&_svg]:w-4`}
        >
          {icon}
        </div>

        <span className="text-2xl font-semibold">{count}</span>
      </div>

      <p className="mt-3 text-[10px] uppercase tracking-wider text-gray-600">
        {label}
      </p>
    </div>
  );
}

function FindingCard({ finding, onOpen }) {
  const style = severityStyles[finding.severity];
  const Icon = style.icon;

  return (
    <div
      className="cs-card group cursor-pointer rounded-2xl p-5 transition duration-300 hover:border-cyan-400/20 sm:p-6"
      onClick={onOpen}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        {/* Icon */}
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${style.bg} ${style.border} ${style.text}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Main */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-semibold">
              {finding.title}
            </h2>

            <span
              className={`rounded-md border px-2 py-1 text-[9px] ${style.bg} ${style.border} ${style.text}`}
            >
              {finding.severity}
            </span>

            <span className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[9px] text-gray-600">
              {finding.category}
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-xs leading-5 text-gray-500">
            {finding.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-gray-600">
            <span className="flex items-center gap-1.5">
              <FileCode2 className="h-3 w-3" />
              {finding.file}
            </span>

            <span>Line {finding.line}</span>

            <span>Rule {finding.rule}</span>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-5 lg:border-l lg:border-white/[0.06] lg:pl-6">
          <span className="rounded-md border border-red-400/10 bg-red-400/5 px-2 py-1 text-[9px] text-gray-500">
            {finding.status}
          </span>

          <ArrowUpRight className="h-4 w-4 text-gray-700 transition group-hover:text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

/* ================= DETAIL MODAL ================= */

function FindingDetail({ finding, onClose }) {
  const style = severityStyles[finding.severity];
  const Icon = style.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/[0.1] bg-[#090d12] shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-white/[0.07] bg-[#090d12]/95 p-6 backdrop-blur-xl">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${style.bg} ${style.border} ${style.text}`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md border px-2 py-1 text-[9px] ${style.bg} ${style.border} ${style.text}`}
                >
                  {finding.severity}
                </span>

                <span className="text-[10px] text-gray-600">
                  {finding.rule}
                </span>
              </div>

              <h2 className="mt-3 text-xl font-semibold">
                {finding.title}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {finding.file} • Line {finding.line}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Explanation */}
          <section>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-semibold">
                AI explanation
              </h3>
            </div>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {finding.description} CodeSentinel identified this
              pattern during static analysis and the AI security agent
              classified it based on its potential impact and context.
            </p>
          </section>

          {/* Code */}
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">
                Affected code
              </h3>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `const config = loadConfig();\nconst environment = process.env.NODE_ENV;\nconst apiKey = "SECRET_KEY_EXPOSED";\nexport default { apiKey, environment };`
                  );
                }}
                className="flex items-center gap-1.5 text-[10px] text-gray-600 hover:text-white"
              >
                <Copy className="h-3 w-3" />
                Copy
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#030507]">
              <div className="flex border-b border-white/[0.06] px-4 py-2.5 text-[9px] text-gray-700">
                {finding.file}
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-xs leading-6">
                <code>
                  <span className="text-gray-600">16</span>{" "}
                  <span className="text-gray-500">
                    const config = loadConfig();
                  </span>
                  {"\n"}
                  <span className="text-gray-600">17</span>{" "}
                  <span className="text-gray-500">
                    const environment = process.env.NODE_ENV;
                  </span>
                  {"\n"}
                  <span className="rounded bg-red-400/10 text-red-300">
                    <span className="text-gray-600">18</span>{" "}
                    const apiKey = &quot;SECRET_KEY_EXPOSED&quot;;
                  </span>
                  {"\n"}
                  <span className="text-gray-600">19</span>{" "}
                  <span className="text-gray-500">
                    export default {`{ apiKey, environment }`};
                  </span>
                </code>
              </pre>
            </div>
          </section>

          {/* Recommendation */}
          <section className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
            <div className="flex gap-3">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

              <div>
                <h3 className="text-sm font-semibold text-cyan-300">
                  Recommended fix
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Move sensitive credentials to environment variables
                  or a managed secrets store. Remove the exposed secret
                  from source control and rotate the credential if it has
                  been committed previously.
                </p>
              </div>
            </div>
          </section>

          {/* Metadata */}
          <div className="grid gap-3 sm:grid-cols-3">
            <Meta label="Category" value={finding.category} />
            <Meta label="Rule" value={finding.rule} />
            <Meta label="Status" value={finding.status} />
          </div>

          <button
            onClick={onClose}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            <CheckCircle2 className="h-4 w-4" />
            Mark as reviewed
          </button>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-[9px] uppercase tracking-widest text-gray-700">
        {label}
      </p>

      <p className="mt-2 text-xs text-gray-400">{value}</p>
    </div>
  );
}
