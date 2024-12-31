'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SunIcon, MoonIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

const menus = [
  { name: '홈', href: '/' },
  { name: '메타', href: '/meta' },
  { name: '상성', href: '/matchups' },
  { name: '덱빌더', href: '/deck-builder' },
];

export default function GNB() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          LOGO
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          {menus.map((menu) => (
            <Link key={menu.name} href={menu.href} className="hover:underline">
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Language & Theme Switcher */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <button className="flex items-center">
            <GlobeAltIcon className="w-6 h-6" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center"
          >
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center"
        >
          <span className="sr-only">Open menu</span>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="space-y-2">
            {menus.map((menu) => (
              <li key={menu.name}>
                <Link href={menu.href} onClick={() => setMobileMenuOpen(false)}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
