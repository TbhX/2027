"use client";

import { cn } from "@/lib/utils";
import { Code2, Music2, Gamepad2, Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { useState } from "react";
import { Button } from "./ui/button";

export function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Accueil",
      href: ROUTES.HOME,
      icon: Home,
      color: "text-white",
      hoverColor: "hover:text-gray-300",
      glowColor: "hover:shadow-white/20",
    },
    {
      name: "Web",
      href: ROUTES.WEB,
      icon: Code2,
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      glowColor: "hover:shadow-blue-500/20",
    },
    {
      name: "Musique",
      href: ROUTES.MUSIC,
      icon: Music2,
      color: "text-green-400",
      hoverColor: "hover:text-green-300",
      glowColor: "hover:shadow-green-500/20",
    },
    {
      name: "Gaming",
      href: ROUTES.GAMING,
      icon: Gamepad2,
      color: "text-purple-400",
      hoverColor: "hover:text-purple-300",
      glowColor: "hover:shadow-purple-500/20",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:justify-center">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-400" />
            ) : (
              <Menu className="h-6 w-6 text-gray-400" />
            )}
          </Button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300",
                    item.color,
                    item.hoverColor,
                    item.glowColor,
                    "hover:scale-105 hover:shadow-lg",
                    isActive ? "bg-gray-800/50 shadow-lg" : "opacity-70"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden",
            isMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
            "overflow-hidden transition-all duration-300 ease-in-out"
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300",
                    item.color,
                    item.hoverColor,
                    item.glowColor,
                    "hover:scale-105 hover:shadow-lg w-full",
                    isActive ? "bg-gray-800/50 shadow-lg" : "opacity-70"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}