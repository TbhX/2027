import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/constants/routes";

export function ProjectLink() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <Link href={EXTERNAL_LINKS.GAMING_PROJECT} target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          Le projet gaming d'une vie
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
}