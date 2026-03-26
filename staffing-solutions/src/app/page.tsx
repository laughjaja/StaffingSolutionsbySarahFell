'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Target, Search, ArrowRight } from 'lucide-react';

const InlineWidget = dynamic(() => import('react-calendly').then(mod => mod.InlineWidget), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-50 h-[600px] w-full flex items-center justify-center font-mono text-sm text-gray-400">Loading Calendar...</div>
});

const CAROUSEL_IMAGES = [
  "/images/download.jpg",
  "/images/download-1.jpg",
  "/images/download-2.jpg",
  "/images/download-3.jpg",
  "/images/download-4.jpg"
];

function HeroImageStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <div className="w-full h-48 bg-white/5 rounded mb-8" />;

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: '0%', opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="w-full mb-8 relative overflow-hidden rounded" style={{ height: '200px' }}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={CAROUSEL_IMAGES[currentIndex]}
            className="w-full h-full object-cover"
            alt="Industrial Manufacturing"
          />
        </motion.div>
      </AnimatePresence>
      {/* Dot indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[var(--color-primary)] w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-w-[260px] py-4">
        <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-3">
          <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm font-medium text-[var(--color-dark)]">You're subscribed!</p>
        <p className="text-xs text-gray-400 mt-1">We'll be in touch soon.</p>
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
        className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-gray-50"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-xs font-semibold uppercase tracking-widest transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col bg-white text-[var(--color-dark)] selection:bg-[var(--color-primary)] selection:text-[var(--color-dark)]">

      {/* 1. Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 px-4 w-full border-b border-gray-800 bg-[#1A1A1A]"
      >
        <div className="max-w-[1200px] mx-auto w-full text-white">
          {/* Desktop: 2 col | Mobile: stacked (headline → images → text → CTA) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT: Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.95] text-white">
                Hire Reliable <br />
                <span className="text-[var(--color-primary)] italic font-serif">Operations &amp;</span> <br />
                Production Talent.
              </h1>
            </div>

            {/* RIGHT: Images → Paragraph → CTA */}
            <div className="flex flex-col items-start">
              <HeroImageStack />

              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-6">
                Helping Canadian manufacturers build dependable production, trades, and supply chain teams for over a decade.
              </p>

              <a href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors group text-sm uppercase tracking-widest">
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 2. Services / Expertise */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-12 bg-[#F7F7F7] text-[var(--color-dark)] px-6"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">Our Expertise</h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mt-4 md:mt-0">Specialized Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8 pt-6 border-t border-[var(--color-primary)]">
            {[
              {
                title: 'Direct Hire',
                desc: 'We secure top-tier permanent talent that aligns flawlessly with your company culture and long-term production goals.',
              },
              {
                title: 'Executive Search',
                desc: 'Specialized, discreet recruitment for operations managers and executive-level leadership critical to scaling your capabilities.',
              },
              {
                title: 'Contract Staffing',
                desc: 'Access specialized expertise for project-based demands or critical system implementations without long-term commitments.',
              },
              {
                title: 'Temporary Staffing',
                desc: 'Agile, rapid-response hiring for short-term coverage with pre-vetted, qualified professionals ready to hit the floor.',
              },
              {
                title: 'Contract-to-Hire',
                desc: 'Evaluate top talent on the job before making a permanent hiring decision, ensuring a frictionless operational fit.',
              },
              {
                title: 'Recruitment Process Outsourcing',
                desc: 'Comprehensive management of your entire recruiting function to improve hiring speed, quality, and cost-efficiency.',
              },
              {
                title: 'High-Volume Hiring',
                desc: 'Streamlined sourcing and deploying of large teams for peak seasons, facility expansions, or new line launches.',
              },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col pt-4 border-t border-gray-200/50">
                <h3 className="text-xl font-medium mb-3 text-[var(--color-dark)]">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* 4. Our 6-Step Process */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-12 bg-[#1A1A1A] text-white px-6"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-4xl md:text-5xl italic font-serif text-[var(--color-primary)]">6-Step Process</h2>
            <p className="text-gray-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest mt-6 md:mt-0 max-w-xs leading-loose">
              A verified methodology to secure high-retention talent faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-10">
            {[
              { num: '1', desc: 'Deep dive into your needs and culture' },
              { num: '2', desc: 'Active search across multiple channels' },
              { num: '3', desc: '3-4 qualified candidates presented' },
              { num: '4', desc: 'Structured sessions with scorecards' },
              { num: '5', desc: 'Negotiation and onboarding assistance' },
              { num: '6', desc: '2, 4, and 8-week follow-ups' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="flex flex-col group cursor-default pt-2"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-light text-[var(--color-primary)] mr-4 leading-none transition-colors duration-300">{step.num}</span>
                  <div className="h-[1px] w-full bg-white/10 relative">
                    <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full bg-[var(--color-primary)] transition-all duration-500 ease-out"></div>
                  </div>
                </div>
                <p className="text-gray-400 font-light text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-14 px-6 bg-[#F7F7F7]"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="border border-gray-200 bg-white p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] mb-2">Newsletter</p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight mb-3">
                Hiring insights, <span className="italic font-serif text-gray-400">delivered.</span>
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Get practical tips on skilled trades hiring, market trends, and retention strategies — straight to your inbox.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </motion.section>

      {/* 4. Contact Section */}
      <motion.section
        id="book"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 px-6 bg-[#F7F7F7]"
      >
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Title + blurb */}
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-4">
              Let's craft your <br />
              <span className="italic font-serif text-gray-400">hiring strategy.</span>
            </h2>
            <div className="w-10 h-[2px] bg-[var(--color-primary)] mb-4"></div>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm">
              Send us a message and we'll discuss your current bottlenecks, high-volume needs, and how we can deliver the talent you've been missing.
            </p>
          </div>

          {/* Right: Form card */}
          <div className="bg-white border border-gray-200 p-8 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1 uppercase tracking-widest text-gray-500">Full Name <span className="text-red-400">*</span></label>
                <input type="text" placeholder="Jane Smith" className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-gray-50" required />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 uppercase tracking-widest text-gray-500">Email <span className="text-red-400">*</span></label>
                <input type="email" placeholder="jane@company.com" className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-gray-50" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1 uppercase tracking-widest text-gray-500">Phone <span className="text-red-400">*</span></label>
                  <input type="tel" placeholder="(555) 123.4567" className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-gray-50" required />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 uppercase tracking-widest text-gray-500">Subject <span className="text-red-400">*</span></label>
                  <input type="text" placeholder="Regarding..." className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-gray-50" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 uppercase tracking-widest text-gray-500">Message</label>
                <textarea placeholder="Tell us how we can help..." rows={3} className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] bg-gray-50 resize-none"></textarea>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold tracking-widest uppercase py-3 text-xs transition-colors">
                  Send Message
                </button>
                <p className="text-xs text-gray-400 italic mt-3 text-center">Your information is secure and will only be used to contact you.</p>
              </div>
            </form>
          </div>

        </div>
      </motion.section>
    </div >
  );
}
