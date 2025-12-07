"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Promotion from "./Promotion";
import Link from "next/link";

    export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <header className="w-full bg-[#50211E] text-white fixed top-0 left-0 z-50">
      <Promotion />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex gap-2.5">
            {/* Left: Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-white/10 text-white cursor-pointer"
                >
                  <Menu className="w-8 h-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-primary text-white border-white/10"
              >
                <SheetHeader className="border-b border-white">
                  <SheetTitle className="text-white text-left">Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href={"/"}
                    onClick={closeMenu}
                    className="text-lg cursor-pointer hover:bg-white/10 py-3 px-4 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/products"}
                    onClick={closeMenu}
                    className="text-lg cursor-pointer hover:bg-white/10 py-3 px-4 transition-colors"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href={"/products"}
                    onClick={closeMenu}
                    className="text-lg hover:bg-white/10 cursor-pointer py-3 px-4 transition-colors"
                  >
                    Bags
                  </Link>
                  <Link
                    href={"/products"}
                    onClick={closeMenu}
                    className="text-lg hover:bg-white/10 py-3 cursor-pointer px-4 transition-colors"
                  >
                    Accessories
                  </Link>
                  <Link
                    href={"/products"}
                    onClick={closeMenu}
                    className="text-lg hover:bg-white/10 py-3 px-4 cursor-pointer transition-colors"
                  >
                    Collections
                  </Link>
                  <Link
                    href={"/products"}
                    onClick={closeMenu}
                    className="text-lg hover:bg-white/10 py-3 px-4 cursor-pointer transition-colors"
                  >
                    Sale
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-white/10 text-white gap-1 cursor-pointer"
                >
                  Eng
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-primary border-white/10">
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  Italiano
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
                O bag
              </h1>
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Search */}
            <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden hover:bg-white/10 text-white"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="text-white border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white text-left">
                    Search
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3">
                    <Search className="w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      className="bg-transparent border-none h-auto p-0 placeholder:text-white/70 text-white focus-visible:ring-0"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          closeSearch();
                        }
                      }}
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="bg-white text-white relative cursor-pointer"
            >
              <img src="https://cdn2.obag.it/media/catalog/category/obag.png" alt="Cart" className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}