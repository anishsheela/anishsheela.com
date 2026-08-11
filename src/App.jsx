import { Github, Linkedin, Mail } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const nav = [
    { id: 'about', label: 'about' },
    { id: 'work', label: 'work' },
    { id: 'stack', label: 'stack' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
];

const experience = [
    {
        role: 'Senior Consultant',
        org: 'BizIntelligence Technologies',
        note: 'part-time, alongside M.Tech',
        period: '03/2024 – present',
        location: 'Remote',
        current: true,
        bullets: [
            'Built a client-side SSL-certificate authentication system (FastAPI, React Native) that replaced password and OTP flows with cryptographic identity verification for a privacy-focused platform.',
            'Migrated a legacy Drupal 7 application with 200+ modules to Drupal 10, writing custom scripts for complex data structures, business rules, and integrations.',
            'Built an encrypted personal data vault with client-side encryption and granular, revocable permission-based sharing.',
        ],
    },
    {
        role: 'Full-Stack Engineer',
        org: 'Meta',
        note: 'contract via Alpha Net Solutions',
        period: '03/2023 – 10/2023',
        location: 'Singapore',
        bullets: [
            'Maintained and modernized privacy-compliance tooling used across Meta’s global privacy infrastructure (React, TypeScript, Hack), supporting GDPR and CCPA adherence.',
            'Merged 90+ pull requests into Meta’s codebase: bug fixes, performance work, and migrations of legacy tools to current engineering standards.',
            'Reworked report-generation systems for faster, more reliable compliance workflows.',
        ],
    },
    {
        role: 'Software Engineer',
        org: 'Crédit Agricole CIB',
        note: 'contract via Adecco',
        period: '05/2022 – 03/2023',
        location: 'Singapore',
        bullets: [
            'Rebuilt the corporate site (ca-cib.com) as headless Drupal 9 with a Next.js frontend, cutting page loads from 6 to 8 seconds down to 1 to 2 seconds.',
            'Automated the deployment pipeline with Jenkins, taking deploys from 3 to 4 hours down to 30 to 45 minutes and downtime from an hour to 5 minutes.',
            'Maintained the organization-wide intranet portal serving personalized content and data.',
        ],
    },
    {
        role: 'Lead Engineer',
        org: 'QBurst Technologies',
        note: '',
        period: '08/2020 – 05/2022',
        location: 'India',
        bullets: [
            'Led a multi-site Drupal 9 platform for the US National Institutes of Health on Acquia Cloud, meeting HIPAA requirements, with automated deployments via Acquia Pipelines.',
            'Built a counter-terrorism portal for the Inter-Parliamentary Union: headless Drupal, a React progressive web app, and custom geopolitical maps in QGIS.',
            'Set up CI/CD from scratch (Jenkins) across 10+ projects deploying to AWS and dedicated servers, and managed a team of 6.',
        ],
    },
    {
        role: 'Senior Analyst',
        org: 'Accenture',
        note: '',
        period: '01/2018 – 08/2020',
        location: 'Singapore',
        bullets: [
            'Led Drupal development for the Singapore Pools rebuild (Drupal 7 to 8), integrating Java backend services on a high-traffic betting platform.',
            'Improved site performance 1.8x with Redis caching.',
            'Consulted on-site for Telekom Malaysia, expanded into React and mobile app work after corporate training, and mentored junior developers.',
        ],
    },
    {
        role: 'Drupal Developer & Technical Lead',
        org: 'Axelerant · Zyxware · Hello Infinity',
        note: 'co-founder of Hello Infinity',
        period: '06/2012 – 09/2017',
        location: 'India',
        bullets: [
            'Delivered 15+ Drupal projects (e-commerce, multilingual) leading teams of up to 5. Co-founded Hello Infinity, owning technology decisions, infrastructure, and client relationships.',
        ],
    },
];

const stack = [
    { group: 'Languages', items: ['PHP', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { group: 'Backend', items: ['Drupal 8/9/10', 'Symfony', 'FastAPI', 'REST', 'GraphQL'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind CSS'] },
    { group: 'ML & AI', items: ['PyTorch', 'Computer Vision', 'LLM APIs', 'Model Context Protocol'] },
    { group: 'DevOps & Cloud', items: ['Docker', 'Jenkins', 'GitHub Actions', 'AWS', 'Acquia Cloud', 'NixOS'] },
    { group: 'Data & Testing', items: ['PostgreSQL', 'MySQL', 'Apache Solr', 'PHPUnit', 'Playwright'] },
];

const projects = [
    {
        title: 'Road Quality Map',
        meta: 'M.Tech dissertation · open source · 2025 to 2026',
        href: 'https://roads.anishsheela.com/',
        hrefLabel: 'roads.anishsheela.com',
        body: 'A dashcam records the road on an ordinary drive. This turns that footage into a map of how good or bad the surface actually is, stretch by stretch, and can then route you along the smoothest way rather than the shortest. It works out where the camera was from the timestamp burned into the video, and learns to recognize a rough surface or a pothole from the picture itself.',
        why: 'Road condition surveys are expensive, so they happen rarely and cover very little. Anyone with a dashcam is already carrying the sensor, which matters most on the roads official surveys never reach. A smoother route is also an accessibility question for anyone on two wheels, in a wheelchair, or carrying a patient.',
    },
    {
        title: 'ApplyQuest',
        meta: 'Full-stack platform · live · 2026',
        href: 'https://applyquest.anishsheela.com',
        hrefLabel: 'applyquest.anishsheela.com',
        body: 'A job hunt is hundreds of applications spread over months, with long silences and very little feedback. ApplyQuest keeps all of it in one place: where each application stands, who you have spoken to, what needs a follow up this week. It borrows from games, awarding points and streaks for the effort you control, because the outcome mostly is not. A browser add-on saves a posting in one click, and a weekly email tells you where things stand.',
        why: 'Job hunting is demoralizing precisely because effort and results come apart. Rewarding the applications you sent, rather than the replies you did not get, is what keeps people going through the part that actually decides whether they get hired.',
    },
    {
        title: 'Grocy MCP',
        meta: 'Open source · AI assistant tooling · 2026',
        href: 'https://github.com/anishanilkumar/grocy-mcp',
        hrefLabel: 'github.com/anishanilkumar/grocy-mcp',
        body: 'Grocy is open source software for tracking what is in your kitchen. This connects it to an AI assistant, so instead of tapping through an inventory app you just ask: what is going off this week, what can I cook with it, add coconut milk to the list. The assistant reads and updates the real inventory as you talk. The careful part is what it refuses to do: if a product name could mean two things, it stops and asks instead of guessing and quietly moving the wrong item.',
        why: 'Food gets thrown out because nobody remembers what is already in the cupboard, and an inventory only helps if keeping it current is effortless. It is also a small, honest test of a much bigger question: how do you let an AI assistant change real data without letting it get things wrong in ways nobody notices?',
    },
    {
        title: 'Jarvis, a home server that rebuilds itself',
        meta: 'Home infrastructure · NixOS · 2025 to 2026',
        body: 'A Raspberry Pi in the living room runs the household: media for everyone in the house, automatic Mac backups, monitoring, remote access. The whole machine is described in one set of text files, so if the memory card dies I write a fresh one and get the identical server back, with no trying to remember which settings I clicked two years ago. Storage works like a good kitchen: everything lands on the fast drive first and drains to the big slow one in the background, and if the external disk is unplugged the server keeps going with what it has rather than refusing to start.',
        why: 'Most home servers are built by hand and understood only by the person who built them, so they die with the hardware or with that person’s memory of it. Writing the machine down as code makes it repeatable and reviewable, which is the same discipline that keeps systems at work recoverable. The parts I am happiest with are the ones that fail safely: a service with no route to the internet at all unless its private tunnel is up, and storage that degrades instead of collapsing when a drive goes missing.',
    },
    {
        title: 'Content Authenticity Toolkit',
        meta: 'Media provenance · proof of concept · 2026',
        href: 'https://github.com/anishanilkumar',
        hrefLabel: 'github.com/anishanilkumar',
        body: 'A way to prove that a photo or document is the one you published and has not been altered since. You sign your images and PDFs, and a browser add-on checks the signature as you browse, flagging anything that has been changed. It still recognizes a picture that was resized or re-saved along the way, which is what normally breaks this kind of check.',
        why: 'Convincing fake images are now trivial to make, so proving a real one is real has become the harder problem. This puts the proof with the person who made the file, instead of asking viewers to spot a fake by eye.',
    },
];

const education = [
    { degree: 'M.Tech, Software Engineering', school: 'BITS Pilani (work-integrated)', period: '2024 – 2026', note: 'CGPA 8.22 / 10. Dissertation on computer-vision road-quality mapping.' },
    { degree: 'MicroMasters, Statistics & Data Science', school: 'MITx, via edX', period: '2020 – 2022', note: 'Graduate-level probability, statistics, and machine-learning fundamentals.' },
    { degree: 'B.Tech, Computer Science & Engineering', school: 'University of Kerala', period: '2008 – 2012', note: '' },
];

const certifications = ['Acquia Certified Developer', 'AWS Certified Cloud Practitioner', 'DataCamp Data Engineer Associate'];

const languages = [
    { name: 'German', level: 'B1, Goethe-Institut certified, studying toward B2' },
    { name: 'English', level: 'C1, full professional proficiency' },
    { name: 'Malayalam', level: 'Native' },
    { name: 'Tamil & Hindi', level: 'Conversational' },
];

const community = [
    'Co-founder of Drupal Kerala. I organize meetups and mentor new contributors.',
    'Speaker at DrupalCon Vienna 2025, FOSSMeet 2025, and WordCamp Kerala 2024. Panelist at DrupalCamp Pune 2024.',
    'Contributor to Drupal core and contributed modules, and to Malayalam language computing with Swathantra Malayalam Computing (localization for Mozilla and GNOME).',
    'Maintainer of phpresellerclub, an open-source PHP API library in continuous use since 2012.',
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }) {
    return (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-route">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-route" />
            {children}
        </div>
    );
}

function SectionHead({ label, title }) {
    return (
        <div className="mb-10">
            <Eyebrow>{label}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
            <div className="mt-5 h-px w-full bg-hair" />
        </div>
    );
}

function Chip({ children }) {
    return (
        <span className="rounded-md border border-hair bg-panel px-2.5 py-1 font-mono text-[13px] text-ink">
            {children}
        </span>
    );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
    const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="fixed inset-x-0 top-0 z-50 border-b border-hair bg-paper/85 backdrop-blur">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <button onClick={() => go('about')} className="font-display text-[15px] font-semibold tracking-tight text-ink">
                        Anish Anilkumar
                    </button>
                    <nav className="hidden gap-7 sm:flex">
                        {nav.map((n) => (
                            <button
                                key={n.id}
                                onClick={() => go(n.id)}
                                className="font-mono text-[13px] text-muted transition-colors hover:text-route"
                            >
                                {n.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-6">
                {/* Hero */}
                <section id="about" className="pt-36 pb-24 sm:pt-44">
                    <div className="rise" style={{ animationDelay: '0.05s' }}>
                        <Eyebrow>Senior Full-Stack Engineer</Eyebrow>
                    </div>
                    <h1
                        className="rise mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl"
                        style={{ animationDelay: '0.12s' }}
                    >
                        I build web platforms that hold up at scale.
                    </h1>
                    <p
                        className="rise mt-7 max-w-2xl text-lg leading-relaxed text-muted"
                        style={{ animationDelay: '0.2s' }}
                    >
                        Thirteen years shipping software for Meta, Crédit Agricole CIB, Accenture, and the US
                        National Institutes of Health. I work across the stack: deep PHP and Drupal, React and
                        TypeScript on the frontend, and, lately, applied machine learning. Based in Berlin with a
                        Goethe-certified B1 in German.
                    </p>

                    <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '0.28s' }}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-route/40 bg-route/10 px-4 py-1.5 font-mono text-[13px] text-route">
                            <span className="inline-block h-2 w-2 rounded-full bg-route" />
                            Available in Berlin, work authorization ready
                        </span>
                    </div>

                    <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '0.34s' }}>
                        <a
                            href="/Anish_Anilkumar_CV.pdf"
                            download
                            className="rounded-lg bg-ink px-5 py-2.5 font-display text-[15px] font-medium text-paper transition-colors hover:bg-navy"
                        >
                            Download CV
                        </a>
                        <a
                            href="mailto:aneesh.nl@gmail.com"
                            className="rounded-lg border border-hair px-5 py-2.5 font-display text-[15px] font-medium text-ink transition-colors hover:border-ink"
                        >
                            Get in touch
                        </a>
                        <div className="ml-1 flex items-center gap-1">
                            {[
                                { icon: Github, href: 'https://github.com/anishanilkumar', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/anishanil/', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:aneesh.nl@gmail.com', label: 'Email' },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="rounded-lg p-2.5 text-muted transition-colors hover:bg-panel hover:text-ink"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Work: the route line */}
                <section id="work" className="border-t border-hair py-20">
                    <SectionHead label="Work history" title="Where I have shipped" />
                    <div className="relative">
                        {/* the mapped route */}
                        <div
                            className="absolute left-[5px] top-2 bottom-2 w-px sm:left-[7px]"
                            style={{ background: 'linear-gradient(to bottom, #2E7D5B, #1F3A5F 30%, #E0E2DD)' }}
                            aria-hidden="true"
                        />
                        <ol className="space-y-12">
                            {experience.map((job) => (
                                <li key={job.role + job.org} className="relative pl-8 sm:pl-10">
                                    <span
                                        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
                                            job.current ? 'border-route bg-route' : 'border-navy bg-paper'
                                        } sm:h-[15px] sm:w-[15px]`}
                                        aria-hidden="true"
                                    />
                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                                        <h3 className="font-display text-xl font-semibold text-ink">
                                            {job.role}
                                            <span className="text-navy"> · {job.org}</span>
                                        </h3>
                                        <div className="shrink-0 font-mono text-[13px] text-muted">
                                            {job.period} · {job.location}
                                        </div>
                                    </div>
                                    {job.note && (
                                        <div className="mt-0.5 font-mono text-xs text-muted">{job.note}</div>
                                    )}
                                    <ul className="mt-3 space-y-2">
                                        {job.bullets.map((b, i) => (
                                            <li key={i} className="flex gap-3 leading-relaxed text-muted">
                                                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-route" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Stack */}
                <section id="stack" className="border-t border-hair py-20">
                    <SectionHead label="Toolkit" title="What I work with" />
                    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                        {stack.map((s) => (
                            <div key={s.group}>
                                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-navy">{s.group}</h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {s.items.map((it) => (
                                        <Chip key={it}>{it}</Chip>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="border-t border-hair py-20">
                    <SectionHead label="Selected work" title="Things I have built" />
                    <div className="space-y-5">
                        {projects.map((p) => {
                            const Card = p.href ? 'a' : 'div';
                            const linkProps = p.href
                                ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
                                : {};
                            return (
                                <Card
                                    key={p.title}
                                    {...linkProps}
                                    className={`group block rounded-xl border border-hair bg-panel p-6 sm:p-7 ${
                                        p.href ? 'transition-colors hover:border-navy' : ''
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                                            <div className="mt-1 font-mono text-xs text-muted">{p.meta}</div>
                                        </div>
                                        {p.href && (
                                            <span className="mt-1 font-mono text-lg text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-route">
                                                ↗
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-4 max-w-3xl leading-relaxed text-muted">{p.body}</p>
                                    {p.why && (
                                        <div className="mt-5 border-t border-hair pt-4">
                                            <div className="font-mono text-xs uppercase tracking-[0.16em] text-navy">
                                                Why it matters
                                            </div>
                                            <p className="mt-2 max-w-3xl leading-relaxed text-muted">{p.why}</p>
                                        </div>
                                    )}
                                    {p.hrefLabel && (
                                        <div className="mt-4 font-mono text-[13px] text-navy group-hover:text-route">
                                            {p.hrefLabel}
                                        </div>
                                    )}
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Education + Certs + Languages */}
                <section className="border-t border-hair py-20">
                    <SectionHead label="Background" title="Education & languages" />
                    <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-navy">Education</h3>
                            <div className="mt-4 space-y-6">
                                {education.map((e) => (
                                    <div key={e.degree}>
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                            <h4 className="font-display text-lg font-semibold text-ink">{e.degree}</h4>
                                            <span className="shrink-0 font-mono text-[13px] text-muted">{e.period}</span>
                                        </div>
                                        <div className="text-navy">{e.school}</div>
                                        {e.note && <p className="mt-1 text-[15px] leading-relaxed text-muted">{e.note}</p>}
                                    </div>
                                ))}
                            </div>

                            <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-navy">
                                Certifications
                            </h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {certifications.map((c) => (
                                    <Chip key={c}>{c}</Chip>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-navy">Languages</h3>
                            <dl className="mt-4 space-y-4">
                                {languages.map((l) => (
                                    <div key={l.name}>
                                        <dt className="font-display font-semibold text-ink">{l.name}</dt>
                                        <dd className="text-[15px] leading-relaxed text-muted">{l.level}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* Community */}
                <section className="border-t border-hair py-20">
                    <SectionHead label="Off the clock" title="Community & open source" />
                    <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                        {community.map((c, i) => (
                            <li key={i} className="flex gap-3 leading-relaxed text-muted">
                                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-route" />
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Contact */}
                <section id="contact" className="border-t border-hair py-20">
                    <SectionHead label="Get in touch" title="Let us talk" />
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                        <div>
                            <p className="max-w-xl text-lg leading-relaxed text-muted">
                                I am looking for senior full-stack roles in Berlin and across the EU. Full German work
                                authorization, no sponsorship needed, available to start immediately, and open to
                                relocation.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="mailto:aneesh.nl@gmail.com"
                                    className="rounded-lg bg-ink px-5 py-2.5 font-display text-[15px] font-medium text-paper transition-colors hover:bg-navy"
                                >
                                    Email me
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/anishanil/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-hair px-5 py-2.5 font-display text-[15px] font-medium text-ink transition-colors hover:border-ink"
                                >
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        <dl className="space-y-4 font-mono text-[13px]">
                            {[
                                ['Email', 'aneesh.nl@gmail.com', 'mailto:aneesh.nl@gmail.com'],
                                ['Phone', '+49 151 51484460', 'tel:+4915151484460'],
                                ['Address', 'Seestraße 83, 13347 Berlin, Germany', null],
                                ['GitHub', 'github.com/anishanilkumar', 'https://github.com/anishanilkumar'],
                                ['Drupal', 'drupal.org/u/anish.a', 'https://www.drupal.org/u/anish.a'],
                            ].map(([k, v, href]) => (
                                <div key={k} className="flex flex-col gap-0.5 border-b border-hair pb-3 sm:flex-row sm:justify-between sm:gap-6">
                                    <dt className="uppercase tracking-[0.14em] text-muted">{k}</dt>
                                    {href ? (
                                        <a
                                            href={href}
                                            target={href.startsWith('http') ? '_blank' : undefined}
                                            rel="noopener noreferrer"
                                            className="text-navy transition-colors hover:text-route sm:text-right"
                                        >
                                            {v}
                                        </a>
                                    ) : (
                                        <dd className="text-ink sm:text-right">{v}</dd>
                                    )}
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>
            </main>

            <footer className="border-t border-hair">
                <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
                    <span>Anish Anilkumar, Berlin</span>
                    <span>Built with React and Tailwind. No template.</span>
                </div>
            </footer>
        </div>
    );
}
