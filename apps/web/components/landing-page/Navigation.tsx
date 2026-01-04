'use client';

import { useState } from 'react';
import { Menu, X, Mic2 } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'API', href: '#api' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="w-[60%] mx-auto">
        {/* Brushed Metal Navigation Bar */}
        <div className="brushed-metal rounded-lg px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="brass-badge w-10 h-10 rounded-full flex items-center justify-center">
                <Mic2 className="w-5 h-5 text-wood-dark" />
              </div>
              <span className="font-heading font-bold text-lg text-wood-dark tracking-wide">
                PODNEX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 font-body text-sm font-medium text-wood-dark hover:text-brass transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brass scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            {/* Auth Links */}
            <div className="hidden md:flex items-center gap-2">
              <Link href="/signin" className="px-3 py-2 font-body text-sm font-medium text-wood-dark hover:text-brass transition-colors">
                Sign in
              </Link>
              <Link href="/signup">
                <button className="btn-skeuo px-5 py-2.5 rounded-lg font-body font-semibold text-sm text-foreground">
                  Start Free
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden brass-badge w-10 h-10 rounded-lg flex items-center justify-center"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-wood-dark" />
              ) : (
                <Menu className="w-5 h-5 text-wood-dark" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-metal-steel/30">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 font-body text-sm font-medium text-wood-dark hover:bg-metal-aluminum/20 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Link href="/signin">
                  <button className="btn-skeuo-secondary mt-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm text-wood-dark w-full">
                    Sign in
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="btn-skeuo mt-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm text-foreground w-full">
                    Start Free
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Decorative screws */}
        <div className="hidden md:flex justify-between px-3 -mt-1">
          <div className="screw relative" />
          <div className="screw relative" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
