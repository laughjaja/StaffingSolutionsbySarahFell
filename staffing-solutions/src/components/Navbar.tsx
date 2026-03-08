'use client'

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-[#FAFAFA] border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-20">

                {/* Logo block — left */}
                <Link href="/" className="flex flex-col items-start font-heading text-[var(--color-dark)] tracking-tight cursor-pointer leading-snug">
                    <span className="text-sm font-semibold uppercase tracking-widest">Staffing Solutions by</span>
                    <span className="pl-[14px] italic font-serif text-gray-600 font-medium tracking-normal text-base">Sarah Fell, Inc.</span>
                </Link>

                {/* Nav links — right */}
                <div className="flex items-center gap-8">
                    <Link href="/about" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1 text-sm tracking-widest uppercase transition-all">
                        About Us
                    </Link>
                    <Link href="/#book" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1 text-sm tracking-widest uppercase transition-all">
                        Book a Call
                    </Link>
                </div>

            </div>
        </nav>
    );
}
