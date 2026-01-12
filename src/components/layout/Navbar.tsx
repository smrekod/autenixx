"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  AlertTriangle,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Users,
  Rocket,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "../ui/Button";
import { NAV_ITEMS } from "../../lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  AlertTriangle,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Users,
  Rocket,
  TrendingUp,
  Building2,
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Autenix"
              width={223}
              height={45}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {/* Platform Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("platform")}
              onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-surface-700 hover:text-surface-900 transition-colors">
                Platform
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMenu === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "platform" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-2xl shadow-xl border border-surface-200 p-4 mt-2">
                    <div className="grid grid-cols-2 gap-3 items-stretch">
                      {NAV_ITEMS.platform.items.map((item) => {
                        const Icon = iconMap[item.icon];
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2.5 p-3 rounded-xl hover:bg-surface-50 transition-colors group h-full min-h-[60px]">
                            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors shrink-0">
                              {Icon && (
                                <Icon className="w-5 h-5 text-brand-600" />
                              )}
                            </div>
                            <div className="font-medium text-surface-900 whitespace-nowrap flex items-center">
                              {item.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("solutions")}
              onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-surface-700 hover:text-surface-900 transition-colors">
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMenu === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white rounded-2xl shadow-xl border border-surface-200 p-4 mt-2">
                    <div className="space-y-1">
                      {NAV_ITEMS.solutions.items.map((item) => {
                        const Icon = iconMap[item.icon];
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-50 transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                              {Icon && (
                                <Icon className="w-5 h-5 text-brand-600" />
                              )}
                            </div>
                            <div className="font-medium text-surface-900 whitespace-nowrap">
                              {item.title}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Frameworks Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("frameworks")}
              onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 px-4 py-2 text-surface-700 hover:text-surface-900 transition-colors">
                Frameworks
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeMenu === "frameworks" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "frameworks" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white rounded-2xl shadow-xl border border-surface-200 p-4 mt-2">
                    <div className="grid grid-cols-2 gap-1">
                      {NAV_ITEMS.frameworks.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-3 py-2 rounded-lg text-surface-700 hover:bg-surface-50 hover:text-surface-900 transition-colors whitespace-nowrap text-center">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-surface-200 text-center">
                      <Link
                        href="/frameworks"
                        className="text-sm text-brand-600 hover:text-brand-700 font-medium">
                        View all frameworks →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="px-4 py-2 text-surface-700 hover:text-surface-900 transition-colors">
              Pricing
            </Link>

            <Link
              href="/compare"
              className="px-4 py-2 text-surface-700 hover:text-surface-900 transition-colors">
              Compare
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 absolute right-4 sm:right-6 lg:right-8">
            {/* <Link
              href="/login"
              className="px-4 py-2 text-surface-700 hover:text-surface-900 transition-colors">
              Log in
            </Link> */}
            <Button className="text-black" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-surface-700 ml-auto"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden">
              <div className="py-4 space-y-4 border-t border-surface-200">
                <div>
                  <div className="text-sm font-medium text-surface-500 px-2 mb-2">
                    Platform
                  </div>
                  {NAV_ITEMS.platform.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-surface-700 hover:text-surface-900 hover:bg-surface-50 rounded-lg"
                      onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-surface-500 px-2 mb-2">
                    Solutions
                  </div>
                  {NAV_ITEMS.solutions.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-surface-700 hover:text-surface-900 hover:bg-surface-50 rounded-lg"
                      onClick={() => setIsOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 border-t border-surface-200 space-y-2">
                  <Link
                    href="/pricing"
                    className="block px-4 py-2 text-surface-700 hover:text-surface-900 hover:bg-surface-50 rounded-lg"
                    onClick={() => setIsOpen(false)}>
                    Pricing
                  </Link>
                  <Link
                    href="/compare"
                    className="block px-4 py-2 text-surface-700 hover:text-surface-900 hover:bg-surface-50 rounded-lg"
                    onClick={() => setIsOpen(false)}>
                    Compare
                  </Link>
                  {/* <Link
                    href="/login"
                    className="block px-4 py-2 text-surface-700 hover:text-surface-900"
                    onClick={() => setIsOpen(false)}>
                    Log in
                  </Link> */}
                  <Button className="w-full text-black" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
