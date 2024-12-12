"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function WebNav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Contact", href: "#contact-form" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg py-4 sticky top-16 z-40 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-blue-400 hover:text-blue-300"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Accueil
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-blue-400 hover:text-blue-300"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden",
            isMenuOpen
              ? "max-h-[400px] opacity-100 mt-4"
              : "max-h-0 opacity-0 pointer-events-none",
            "overflow-hidden transition-all duration-300 ease-in-out"
          )}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 w-full justify-start"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}