import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { projectData } from '../data/projectData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'The Land', path: '/the-land' },
    { name: 'Plot Layout', path: '/plot-layout' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Inquire', path: '/inquire' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md joinery-border-b">
      <div className="w-full px-space-md md:px-margin-desktop py-space-sm flex justify-between items-center max-w-screen-2xl mx-auto">
        
        {/* Brand Logo Anchor */}
        <Link to="/" className="flex flex-col group py-1" onClick={() => setMobileMenuOpen(false)}>
          <span className="font-display-lg text-lg sm:text-headline-sm md:text-headline-md tracking-wider uppercase text-primary leading-tight">
            {projectData.brandName}
          </span>
          <span className="font-label-sm text-[9px] sm:text-[10px] tracking-widest text-outline uppercase -mt-0.5 sm:-mt-1">
            {projectData.brandSubtitle}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-label-sm text-label-sm uppercase tracking-wider transition-colors py-1 ${
                  isActive
                    ? 'text-primary border-b border-tertiary font-medium'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link
            to="/plot-layout"
            className="hidden sm:inline-flex items-center justify-center border border-outline-variant px-4 py-2 font-label-sm text-label-sm uppercase tracking-wider text-primary hover:border-tertiary transition-colors"
          >
            Explore 7 Plots
          </Link>
          <Link
            to="/inquire"
            className="inline-flex items-center justify-center bg-primary-container text-surface-container-lowest px-5 py-2 font-label-sm text-label-sm uppercase tracking-wider hover:bg-secondary transition-colors"
          >
            Inquire
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low joinery-border-b px-space-md py-6 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block font-label-sm text-label-sm uppercase tracking-wider py-1 ${
                  isActive
                    ? 'text-primary font-bold border-l-2 border-primary pl-2'
                    : 'text-on-surface-variant pl-2'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4 joinery-border-t space-y-3">
            <a
              className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-2.5 px-4 rounded font-label-sm text-xs font-semibold shadow-xs"
              href={projectData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp: {projectData.contact.phone}</span>
            </a>
            <a
              className="flex items-center justify-center space-x-2 text-secondary font-tabular-spec text-xs py-1"
              href={`tel:${projectData.contact.phoneTel}`}
            >
              <span className="material-symbols-outlined text-sm">call</span>
              <span>Direct Call: {projectData.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
