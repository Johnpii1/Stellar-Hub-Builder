type IconName =
  | 'arrow'
  | 'book'
  | 'boxes'
  | 'code'
  | 'compass'
  | 'git'
  | 'globe'
  | 'handshake'
  | 'network'
  | 'rocket'
  | 'shield'
  | 'sparkles'
  | 'star'
  | 'trophy'
  | 'users'
  | 'zap';

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, string> = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z M8 6h8 M8 10h6',
  boxes: 'M3 7.5 12 3l9 4.5-9 4.5L3 7.5z M3 12.5l9 4.5 9-4.5 M3 17.5l9 4.5 9-4.5',
  code: 'M8 9 4 12l4 3 M16 9l4 3-4 3 M14 5l-4 14',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2.2 5.8-5.8 2.2 2.2-5.8 5.8-2.2z',
  git: 'M8 6h8 M8 12h6 M8 18h8 M5 6h.01 M5 12h.01 M5 18h.01 M17 12l3 3-3 3',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.6 9h16.8 M3.6 15h16.8 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18',
  handshake: 'M8 12l2 2a3 3 0 0 0 4 0l2-2 M3 12l4-4 4 4 M21 12l-4-4-4 4 M7 8h10 M9 16l-2 2 M15 16l2 2',
  network: 'M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.5 7l7 3.5 M15.5 13l-5.5 3',
  rocket: 'M5 14c-1.5 1.5-2 4-2 4s2.5-.5 4-2 M14 5l5-2-2 5-6 6-5 1 1-5 7-5z M14 5l3 3 M9 16l-1 3 3-1',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M8.5 12l2.5 2.5L16 9',
  sparkles: 'M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3z M5 3v4 M3 5h4 M19 17v4 M17 19h4',
  star: 'M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z',
  trophy: 'M8 4h8v5a4 4 0 0 1-8 0V4z M6 6H4v2a4 4 0 0 0 4 4 M18 6h2v2a4 4 0 0 1-4 4 M12 13v4 M9 21h6 M8 17h8',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  zap: 'M13 2 4 14h7l-2 8 9-12h-7l2-8z',
};

function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}


const navItems = ['Discover', 'Opportunities', 'Learn', 'Community'];

const stats = [
  { value: '120+', label: 'Ecosystem projects' },
  { value: '8k+', label: 'Builders connected' },
  { value: '$250k', label: 'Bounties planned' },
];

const features = [
  {
    icon: 'compass' as const,
    title: 'Project discovery',
    description: 'Explore curated Stellar and Soroban initiatives with clear signals for maturity, activity, and contribution needs.',
  },
  {
    icon: 'git' as const,
    title: 'Contribution marketplace',
    description: 'Find open issues, bounties, and maintainers looking for help across wallets, tools, smart contracts, and infrastructure.',
  },
  {
    icon: 'book' as const,
    title: 'Guided learning paths',
    description: 'Follow practical onboarding tracks that move builders from first setup to meaningful ecosystem contributions.',
  },
  {
    icon: 'users' as const,
    title: 'Builder community',
    description: 'Connect with mentors, peers, and project teams through a collaboration-first hub built for open-source momentum.',
  },
];

const opportunities = [
  { title: 'Soroban smart contract audits', tag: 'Security', level: 'Advanced' },
  { title: 'Developer tooling improvements', tag: 'Tooling', level: 'Intermediate' },
  { title: 'Starter tutorials and templates', tag: 'Education', level: 'Beginner' },
];

const roadmap = [
  { phase: '01', title: 'Launch landing experience', description: 'Introduce the hub, showcase core value, and invite early builders.' },
  { phase: '02', title: 'Open project directory', description: 'Publish searchable project profiles and contributor-ready opportunities.' },
  { phase: '03', title: 'Activate builder programs', description: 'Add bounties, learning tracks, mentorship, and reputation signals.' },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-cosmic-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-radial-glow" />
      <div className="pointer-events-none fixed inset-0 bg-mesh-grid bg-[length:48px_48px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Stellar Builders Hub home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-glow">
            <Icon name="sparkles" className="h-5 w-5 text-cyan-200" />
          </div>
          <span className="text-base font-semibold tracking-wide sm:text-lg">Stellar Builders Hub</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#community"
          className="hidden rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10 sm:inline-flex"
        >
          Join waitlist
        </a>
      </header>

      <section id="top" className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pb-32 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur">
                <Icon name="zap" className="h-4 w-4" />
                A launchpad for the Stellar builder ecosystem
              </div>
              <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:mx-0 lg:text-7xl">
                Build, Collaborate, and Grow on Stellar
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg lg:mx-0">
                Stellar Builders Hub connects Stellar projects with contributors and developers, making it easier to discover meaningful work, collaborate with teams, and grow the ecosystem together.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#discover"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  Explore Projects <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href="#opportunities"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/15"
                >
                  Become a Contributor
                </a>
              </div>
              <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5 lg:mx-0">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                    <div className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-300" />
                    <div className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>
                  <span className="text-xs text-slate-400">hub.stellar.builders</span>
                </div>

                <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-fuchsia-400/10 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Live ecosystem</p>
                      <h2 className="mt-3 text-2xl font-semibold">Builder graph</h2>
                    </div>
                    <Icon name="network" className="h-10 w-10 text-cyan-200" />
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {['Wallets', 'Soroban', 'Infra', 'Docs', 'Bounties', 'Mentors'].map((node, index) => (
                      <div
                        key={node}
                        className={`rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-sm text-slate-100 ${
                          index === 1 || index === 4 ? 'shadow-glow' : ''
                        }`}
                      >
                        {node}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center gap-2 text-cyan-200">
                      <Icon name="shield" className="h-5 w-5" />
                      <span className="text-sm font-medium">Trust signals</span>
                    </div>
                    <p className="mt-4 text-3xl font-semibold">98%</p>
                    <p className="mt-1 text-sm text-slate-400">Verified project readiness</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center gap-2 text-fuchsia-200">
                      <Icon name="trophy" className="h-5 w-5" />
                      <span className="text-sm font-medium">Recognition</span>
                    </div>
                    <p className="mt-4 text-3xl font-semibold">4.8k</p>
                    <p className="mt-1 text-sm text-slate-400">Contributor badges tracked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="relative z-10 border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Discover</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Everything builders need to enter the Stellar ecosystem.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="group rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/80">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 group-hover:shadow-glow">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Opportunities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Match your skills with high-impact work.</h2>
          <p className="mt-5 text-slate-300">
            The future platform will surface contributor-ready tasks with difficulty, domain, and project context so builders can move quickly from interest to impact.
          </p>
        </div>
        <div className="space-y-4">
          {opportunities.map((item) => (
            <article key={item.title} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                  <Icon name="boxes" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.tag} · {item.level}</p>
                </div>
              </div>
              <Icon name="arrow" className="hidden h-5 w-5 text-slate-500 sm:block" />
            </article>
          ))}
        </div>
      </section>

      <section id="learn" className="relative z-10 bg-gradient-to-b from-white/[0.03] to-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Roadmap</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A focused path from landing page to full community hub.</h2>
            </div>
            <p className="text-slate-300">
              This first UI-only milestone establishes the visual language and landing-page structure without backend dependencies, forms, or data integrations.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {roadmap.map((step) => (
              <article key={step.phase} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold text-white/10">{step.phase}</span>
                  <Icon name="star" className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-violet-500/15 p-8 text-center shadow-glow sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
            <Icon name="rocket" className="h-7 w-7" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Ready to shape the future of Stellar collaboration?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Join the early community of developers, maintainers, designers, and educators preparing the next wave of open-source Stellar projects.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:hello@stellarbuildershub.dev" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5">
              Start the conversation <Icon name="handshake" className="h-4 w-4" />
            </a>
            <a href="#top" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              Back to top <Icon name="globe" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row lg:px-8">
          <p>© 2026 Stellar Builders Hub. UI concept for ecosystem collaboration.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Icon name="code" className="h-4 w-4" />
            React + Tailwind CSS landing page
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
