"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { greatVibes } from '@/lib/fonts'


export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between bg-gradient-to-r from-indigo-700 to-fuchsia-700 text-white">
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-md transition-transform duration-200 hover:-rotate-2">
          <Link
            href="/"
            className={`${greatVibes.className} text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-fuchsia-700`}
            >
              CHAKER
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-md transition-transform duration-200 hover:-rotate-2">
          <Link href="#about">About</Link>
          </div>
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-md transition-transform duration-200 hover:-rotate-2">
          <Link href="/blog">Projects</Link>
          </div>
        <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md shadow-md transition-transform duration-200 hover:-rotate-2">
          <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[200px]">
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
