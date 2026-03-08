'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white text-[var(--color-dark)] selection:bg-[var(--color-primary)] selection:text-[var(--color-dark)] min-h-screen">
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full flex-grow flex items-center"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center w-full">
                    <div className="order-2 lg:order-1 relative h-[500px] md:h-[700px] w-full bg-gray-100 overflow-hidden">
                        <Image
                            src="/sarah-fell.png"
                            alt="Sarah Fell - Staffing Solutions by Sarah"
                            fill
                            className="object-cover"
                            sizes="(max-w-768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tighter mb-8">
                            Expertise built on <br /><span className="italic font-serif text-gray-400">the factory floor.</span>
                        </h1>
                        <div className="w-12 h-[1px] bg-[var(--color-dark)] mb-8"></div>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
                            I’m Sarah Fell, a dedicated manufacturing and skilled trades expert. With over a decade navigating the complexities of Canada's industrial sector, I don’t just understand resumes—I understand the machinery, the quotas, and the culture of a high-functioning facility.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
                            My hands-on experience spans supplying critical talent across <strong className="font-medium text-[var(--color-dark)]">automotive, heavy industrial, aerospace, and the food & beverage sectors</strong>.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
                            In an exciting new chapter, I have partnered with <a href="https://toptiertalentgroup.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-dark)] hover:text-gray-500 transition-colors underline decoration-1 underline-offset-4">Top Tier Talent Group</a>. This strategic alliance allows us to widen our reach, connecting clients with an even broader pool of exceptional, highly-vetted candidates, and empowering job seekers with unmatched opportunities across the industrial landscape.
                        </p>
                        <Link href="/#book" className="inline-flex items-center gap-2 border-b border-[var(--color-dark)] pb-1 font-medium hover:text-gray-500 hover:border-gray-500 transition-colors group text-sm uppercase tracking-widest self-start">
                            Work With Me
                        </Link>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
