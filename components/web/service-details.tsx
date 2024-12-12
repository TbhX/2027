import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function ServiceDetails() {
  const features = [
    "Développement d'Applications Web sur Mesure",
    "Design Responsive pour Tous les Appareils",
    "Optimisation de l'Expérience Utilisateur (UX)",
    "Optimisation des Performances",
    "Meilleures Pratiques SEO",
    "Implémentation de la Sécurité",
    "3 Mois de Support & Maintenance",
    "Configuration du Domaine & de l'Hébergement"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Forfait Tout Inclus</h2>
      <Card className="bg-gray-800/50 border-gray-700 p-8">
        <div className="text-center mb-8">
          <span className="text-5xl font-bold">1000€</span>
          <p className="text-gray-400 mt-2">Tout ce dont vous avez besoin pour démarrer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check className="text-green-400 w-5 h-5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}