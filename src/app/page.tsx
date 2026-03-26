'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building2, CheckCircle2, Cog, Truck, Wrench, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const services = [
  {
    title: 'Permanent Recruitment',
    body: 'Targeted hiring for full-time roles where retention, reliability, and team fit are critical.',
  },
  {
    title: 'Temporary & Contract Staffing',
    body: 'Fast staffing support for urgent backfills, project peaks, and fluctuating workforce demand.',
  },
  {
    title: 'Supervisor & Leadership Search',
    body: 'Focused search for hard-to-fill supervisors, managers, and specialist leadership roles.',
  },
];

const industries = [
  { label: 'Manufacturing & Industrial', icon: Cog },
  { label: 'Skilled Trades', icon: Wrench },
  { label: 'Construction & Field Ops', icon: Building2 },
  { label: 'Logistics & Distribution', icon: Truck },
  { label: 'Operations & Admin', icon: Briefcase },
  { label: 'Safety-Critical Teams', icon: ShieldCheck },
];

const steps = [
  'Deep dive into your role requirements, team culture, and hiring timeline',
  'Active search across targeted channels and vetted recruiter networks',
  'Present 3-4 qualified candidates with clear fit rationale',
  'Structured interview support with scorecards and feedback loops',
  'Offer negotiation and onboarding assistance through acceptance',
  '2, 4, and 8-week follow-ups to protect retention',
];

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-w-[240px] py-4">
        <div className="w-10 h-10 rounded-full bg-[#C6A64A]/15 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-5 h-5 text-[#9A7E2F]" />
        </div>
        <p className="text-sm font-medium text-black/80">You&apos;re subscribed!</p>
        <p className="text-xs text-black/45 mt-1">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 rounded-lg border border-black/15 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:border-[#C6A64A] placeholder:text-black/35"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 border border-[#2C3434] bg-[#2C3434] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C6A64A] hover:border-[#C6A64A] rounded-lg whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#F4F2ED] text-[var(--color-dark)]">
      <div className="pointer-events-none absolute -top-24 right-[-80px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(198,166,74,0.3)_0%,_rgba(198,166,74,0)_70%)]" />
      <div className="pointer-events-none absolute top-[28%] left-[-90px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,_rgba(120,148,146,0.2)_0%,_rgba(120,148,146,0)_72%)]" />
      <div className="pointer-events-none absolute -bottom-28 right-[20%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(44,52,52,0.13)_0%,_rgba(44,52,52,0)_70%)]" />

      <section className="relative border-b border-black/10 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/55">
              Staffing Solutions by Sarah Fell
            </p>
            <h1 className="max-w-[16ch] text-5xl font-medium leading-[0.95] tracking-[-0.03em] md:text-7xl">
              Recruitment support for hiring managers under pressure to deliver.
            </h1>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-black/70 md:text-lg">
              I help employers fill critical roles across manufacturing, industrial, construction, logistics, and
              operations. You get direct recruiter support, clear communication, and candidates who match the role.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 border border-[#2C3434] bg-[#2C3434] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C6A64A] hover:border-[#C6A64A]"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-black/20 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/75 transition hover:border-[#C6A64A] hover:text-black"
              >
                Partnership Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[32px] border border-black/10 bg-[linear-gradient(155deg,#fdfaf2_0%,#ece5d5_47%,#dde7e2_100%)] p-6 shadow-[0_28px_65px_rgba(0,0,0,0.14)]"
            >
              <div className="rounded-2xl border border-black/10 bg-white/75 p-5 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/55">Core Sectors</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <div
                      key={industry.label}
                      className="rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-[11px] font-medium text-black/70"
                    >
                      {industry.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: '24h', v: 'response on new requests' },
                  { k: '2-3', v: 'qualified candidates presented' },
                  { k: 'direct', v: 'recruiter-led communication' },
                ].map((item) => (
                  <div key={item.v} className="rounded-xl border border-black/10 bg-[#232A2C] px-3 py-4 text-center">
                    <p className="text-lg font-medium text-[#E7D08A]">{item.k}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/70">{item.v}</p>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full bg-[#C6A64A]/35 blur-xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-[#658C86]/35 blur-xl" />
            </motion.div>

            <div className="absolute -bottom-8 -left-5 rounded-xl border border-black/10 bg-[#F7F5F0] px-4 py-3 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">Positioning</p>
              <p className="mt-1 text-sm font-medium text-black/80">Industrial expertise • Broader hiring coverage</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <motion.div
          className="mx-auto max-w-[1200px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-medium tracking-[-0.025em] md:text-5xl">Recruitment services built for real hiring pressure</h2>
            <p className="text-[11px] uppercase tracking-[0.25em] text-black/50">Clear. Practical. Accountable.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{service.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-black/10 bg-[linear-gradient(180deg,#f3eee2_0%,#ede4cf_100%)] px-6 py-16 md:py-18">
        <motion.div
          className="mx-auto max-w-[1200px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">Industries we support</h2>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-black/65 md:text-base">
            My core strength is manufacturing and skilled trades recruitment, and I also support construction, logistics,
            and operations teams that need dependable hiring support.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <motion.div
                key={industry.label}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/75 px-4 py-3"
              >
                <industry.icon className="h-4 w-4 text-[#9A7E2F]" />
                <p className="text-sm font-medium text-black/75">{industry.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-y border-black/10 bg-[#202628] px-6 py-16 text-white md:py-20">
        <motion.div
          className="mx-auto max-w-[1200px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-medium tracking-tight md:text-5xl">How each search is managed</h2>
            <p className="text-sm text-white/70">A practical process designed for speed, quality, and retention.</p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-white/15 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C6A64A]">0{index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{step}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="border-y border-black/10 px-6 py-14 md:py-16">
        <motion.div
          className="mx-auto max-w-[1200px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="rounded-3xl border border-black/10 bg-[linear-gradient(155deg,#fdfaf2_0%,#ece5d5_47%,#dde7e2_100%)] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/50 mb-2">Newsletter</p>
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl leading-tight">
                Hiring insights, delivered.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/65">
                Practical tips on skilled trades hiring, market trends, and retention strategies — straight to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </motion.div>
      </section>

      <section id="book" className="px-6 py-16 md:py-20">
        <motion.div
          className="mx-auto grid max-w-[1200px] gap-8 rounded-3xl border border-black/10 bg-white/80 p-8 md:grid-cols-[1.1fr_1fr] md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/50">Ready to Hire</p>
            <h2 className="mt-3 text-4xl font-medium tracking-tight md:text-5xl">Need to fill a critical role?</h2>
            <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-black/65">
              Share your role requirements and timeline. We&apos;ll map the search approach, expected timeline, and the
              candidate profile you should target.
            </p>
          </div>
          <div className="space-y-3">
            {[
              'Fast shortlist turnaround with role-fit rationale',
              'Direct access to Sarah and her team',
              'Support for permanent, contract, temporary, and leadership hiring',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-black/10 bg-[#F9F8F5] p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A64A]" />
                <p className="text-sm text-black/75">{item}</p>
              </div>
            ))}
            <a
              href="/#book"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 border border-[#2C3434] bg-[#2C3434] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C6A64A] hover:border-[#C6A64A]"
            >
              Book Your Intake Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
