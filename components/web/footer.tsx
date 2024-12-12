import { Separator } from "@/components/ui/separator";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@tamsir.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Metaverse</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Développement Web</li>
              <li>Design UI/UX</li>
              <li>Solutions E-commerce</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Mentions Légales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="hover:text-blue-400 transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-blue-400 transition-colors">
                  Conditions Générales d'Utilisation
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-blue-400 transition-colors">
                  Politique des Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Tamsir.fr - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}