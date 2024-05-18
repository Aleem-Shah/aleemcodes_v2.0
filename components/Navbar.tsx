"use client";
import { footerLinks } from '@/constants'; // Assuming you only need footerLinks for now
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <section className="hidden md:flex p-8">
            <div className="flex w-full items-center justify-between">
                <Link href="/" className="flex flex-col">
                    <span className="text-3xl mb-[-8px]">&#47;&#47; AleemCodes</span>
                    <span className="text-[#8e74fc] text-2xl ml-[35px]">Dev</span>
                </Link>

                <nav className="flex gap-10  items-center">
                    {footerLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                        return (
                            <Link href={item.route} key={item.route}>
                                <p className={cn(" text-2xl", { "text-[#2fcbef]": isActive })}>
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
