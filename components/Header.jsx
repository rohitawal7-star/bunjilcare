"use client";

import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // NAV ITEMS (ROUTES)
  const navItems = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/aboutus" },
    { label: "Mission", href: "/ourmission" },
    { label: "Services", href: "/ourservices" },
    { label: "Values", href: "/ourcore" },
    { label: "Contact", href: "/contactus" },
  ];

  // CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuOpen) return;

      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(e.target);

      const clickedOutsideButton =
        buttonRef.current && !buttonRef.current.contains(e.target);

      if (clickedOutsideMenu && clickedOutsideButton) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // NAVIGATION HANDLER (ROUTE CHANGE)
  const handleNavClick = (href) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/bunjil-logo-transparent.png"
            alt="Bunjil Care Service"
            width={280}
            height={90}
            className="h-14 w-auto object-contain"
            priority
          />

          <span>
            <span className="block text-lg font-black uppercase text-sky-800">
              Bunjil Care
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-[#0077b6]">
              Service
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-100 bg-white px-2 py-2 shadow-sm lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg"
                    : "text-slate-600 hover:bg-sky-50 hover:text-sky-800"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+61452584305"
            className="flex items-center gap-2 text-sm font-bold text-sky-800"
          >
            <PhoneIcon className="h-4 w-4" />
            0452 584 305
          </a>

          <Link
            href="/contactus"
            className="rounded-full bg-[#0077b6] px-5 py-3 text-sm font-black uppercase text-white"
          >
            Enquire Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          ref={buttonRef}
          className="rounded-full border p-3 text-sky-800 lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav
          ref={menuRef}
          className="relative z-50 border-t bg-white px-4 py-4 lg:hidden"
        >
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-bold transition-all duration-300 ${
                    active
                      ? "bg-sky-100 text-sky-800"
                      : "text-slate-700 hover:bg-sky-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
