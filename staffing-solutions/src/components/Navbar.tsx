'use client'

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-[#FAFAFA] border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex flex-col items-start font-heading text-xl font-bold text-[var(--color-dark)] tracking-tight cursor-pointer text-left leading-tight">
                            <span>Staffing Solutions by</span>
                            <span className="ml-[6.5rem] italic font-serif text-gray-700 font-medium tracking-normal">Sarah Fell, Inc.</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1 text-sm tracking-widest uppercase transition-all">
                            About Us
                        </Link>
                        <Link href="/#book" className="text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1 text-sm tracking-widest uppercase transition-all">
                            Book a Call
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
