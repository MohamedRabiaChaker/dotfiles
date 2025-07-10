"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { playfair } from '@/lib/fonts'


export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className={`${playfair.className} text-2xl font-bold`}>
          CHAKER Mohamed Rabia
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about">About</Link>
          <Link href="/blog">Projects</Link>
          <Link href="/contact">Contact</Link>
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
