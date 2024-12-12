import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Music2, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { ParticlesBackground } from "@/components/particles-background";
import { HomeFooter } from "@/components/home-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto mt-12">
          {/* Web Development Card */}
          <Card className="group relative bg-transparent border-0 overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="relative p-8 backdrop-blur-sm border border-blue-500/10 rounded-xl group-hover:border-blue-500/30 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Code2 className="w-20 h-20 text-blue-400 relative z-10" />
                </div>
                <h2 className="text-3xl font-bold text-blue-400">Développement Web</h2>
                <p className="text-gray-400">Solutions web professionnelles avec une offre tout inclus</p>
                <Link href="/web" className="w-full">
                  <Button className="w-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/50 hover:border-blue-500 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    Découvrir
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Music Card */}
          <Card className="group relative bg-transparent border-0 overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="relative p-8 backdrop-blur-sm border border-green-500/10 rounded-xl group-hover:border-green-500/30 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Music2 className="w-20 h-20 text-green-400 relative z-10" />
                </div>
                <h2 className="text-3xl font-bold text-green-400">Production Musicale</h2>
                <p className="text-gray-400">Découvrez l'univers musical de RealZn</p>
                <Link href="/music" className="w-full">
                  <Button className="w-full bg-green-600/20 hover:bg-green-600 border border-green-500/50 hover:border-green-500 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-green-500/20">
                    Écouter
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Gaming Card */}
          <Card className="group relative bg-transparent border-0 overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <div className="relative p-8 backdrop-blur-sm border border-purple-500/10 rounded-xl group-hover:border-purple-500/30 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Gamepad2 className="w-20 h-20 text-purple-400 relative z-10" />
                </div>
                <h2 className="text-3xl font-bold text-purple-400">Gaming</h2>
                <p className="text-gray-400">Suivez l'évolution de notre projet gaming</p>
                <Link href="/gaming" className="w-full">
                  <Button className="w-full bg-purple-600/20 hover:bg-purple-600 border border-purple-500/50 hover:border-purple-500 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    Explorer
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}