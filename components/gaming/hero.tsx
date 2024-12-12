import { Gamepad2 } from "lucide-react";

export function GamingHero() {
  return (
    <div className="container mx-auto px-4 py-24 text-center text-white relative z-10">
      <div className="bg-black/40 backdrop-blur-md p-12 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
          <Gamepad2 className="w-24 h-24 text-purple-400 relative z-10 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
          Gaming Project
        </h1>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Suivez l'évolution de notre projet gaming innovant
        </p>
      </div>
    </div>
  );
}