import { Separator } from "@/components/ui/separator";
import { LikeButton } from "./like-button";
import { Gamepad2 } from "lucide-react";

export function GamingFooter() {
  return (
    <footer className="bg-black/70 backdrop-blur-sm mt-16 text-white border-t border-purple-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold">J'y fus</h3>
          </div>
          <LikeButton />
          <Separator className="my-8 bg-purple-900/50" />
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Le 91arena. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}