"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function MusicNav() {
  const router = useRouter();
  const navItems = [
    { name: "Dernières Sorties", href: "#releases" },
    { name: "Réseaux Sociaux", href: "#social" },
  ];

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-black/50 backdrop-blur-lg py-4 sticky top-16 z-40 border-b border-green-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-green-400 hover:text-green-300"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Accueil
          </Button>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-green-400 hover:text-green-300"
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