import {
    Bars3Icon,
    PhoneIcon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
  
  import { useState, useEffect, useRef } from "react";
  import Image from "next/image";
  
  const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
  
    const navItems = [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Mission", href: "#mission" },
      { label: "Services", href: "#services" },
      { label: "Values", href: "#values" },
      { label: "Contact", href: "#contact" },
    ];
  
    // ✅ CLICK OUTSIDE TO CLOSE MENU
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
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuOpen]);
  
    return (
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-sky-100 bg-white/90 shadow-sm shadow-sky-950/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
          
          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Bunjil Care Service home"
          >
            <Image
              src="/images/bunjil-logo-transparent.png"
              alt="Bunjil Care Service"
              width={280}
              height={90}
              className="h-14 w-auto object-contain"
              priority
            />
            <span>
              <span className="block text-lg font-black uppercase leading-none tracking-wide text-sky-800">
                Bunjil Care
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.28em] text-[#0077b6]">
                Service
              </span>
            </span>
          </a>
  
          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 rounded-full border border-slate-100 bg-white px-2 py-2 shadow-sm lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
  
          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+61452584305"
              className="flex items-center gap-2 text-sm font-bold text-sky-800"
            >
              <PhoneIcon className="h-4 w-4" />
              0452 584 305
            </a>
  
            <a
              href="#contact"
              className="rounded-full bg-[#0077b6] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-[#0077b6]/25 transition hover:-translate-y-0.5 hover:bg-[#03045e]"
            >
              Enquire Now
            </a>
          </div>
  
          {/* MOBILE BUTTON */}
          <button
            ref={buttonRef}
            className="rounded-full border border-sky-100 p-3 text-sky-800 lg:hidden"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
  
        {/* MOBILE MENU */}
        {menuOpen && (
          <nav
            ref={menuRef}
            className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-sky-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    );
  };
  
  export default Header;