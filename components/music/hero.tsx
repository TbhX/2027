import { Music2 } from "lucide-react";

export function MusicHero() {
  return (
    <div className="container mx-auto px-4 py-24 text-center text-white">
      <Music2 className="w-20 h-20 text-green-400 mx-auto mb-8" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
        RealZn
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Electronic Music Producer & Rapper under FrenchMafiaRecords
      </p>
    </div>
  );
}