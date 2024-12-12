"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

export function WebHero() {
  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <Code2 className="w-20 h-20 text-blue-400 mx-auto mb-8" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        Services de Développement Web
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Solutions professionnelles de développement web avec notre forfait tout inclus à 1000€.
        Du concept au déploiement, nous gérons tout.
      </p>
      <Button 
        onClick={scrollToContact}
        className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
      >
        Commencer
        <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
}