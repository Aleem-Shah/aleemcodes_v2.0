"use client"
import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const pathname= usePathname();
  return (
    <section className="md:hidden">
      <div className="flex  justify-between p-4">
        <Link href="/" className="flex flex-col ">
          <span className="text-xl mb-[-8px]">&#47;&#47; AleemCodes </span>
          
          <span  className="text-[#8e74fc] text-lg ml-[23px] ">Dev</span>
        </Link>
        <nav >
          <Sheet>
            <SheetTrigger>
              <Image src="/icons/menu.svg" width={20} height={20} alt="menu" />
            </SheetTrigger>
            <SheetContent className="bg-inherit border-none text-[1.5rem] shadow-2xl shadow-[#2b2b2b] ">
                <div className="mt-10">
                  {navbarLinks.map((items)=>{
                        const isActive =
                        pathname === items.route ||
                        pathname.startsWith(`${items.route}/`);
                    return(
                      <SheetClose asChild key={items.route}>

                      <Link
                      href={items.route}
                      key={items.route}
                      >
                     
                        <p className={cn("mb-10",{"text-[#2fcbef]":isActive})}>{items.label}</p>
                      </Link>
                        </SheetClose>
                    )
                  })}
                </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default MobileNavbar;
