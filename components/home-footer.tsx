import { Code2, Music2, Gamepad2 } from "lucide-react";

export function HomeFooter() {
  return (
    <footer className="relative z-10 mt-auto py-8 bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3">
            <Code2 className="w-6 h-6 text-blue-400 animate-pulse" />
            <Music2 className="w-6 h-6 text-green-400 animate-pulse [animation-delay:0.2s]" />
            <Gamepad2 className="w-6 h-6 text-purple-400 animate-pulse [animation-delay:0.4s]" />
          </div>
          <p className="text-gray-400 text-center font-light italic">
            Créé par un développeur, gamer & artiste
          </p>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Tamsir.fr - Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
}