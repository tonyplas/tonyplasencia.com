"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/links", label: "Links" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-accent font-bold text-lg glow tracking-wider">
          TP_
        </Link>

        <div className="hidden sm:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent glow" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-accent text-sm"
          aria-label="Toggle menu"
        >
          {open ? "[x]" : "[=]"}
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-surface-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-wide transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent glow" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
