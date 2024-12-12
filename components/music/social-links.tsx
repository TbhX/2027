import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Music } from "lucide-react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/lib/constants/routes";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: EXTERNAL_LINKS.INSTAGRAM,
      color: "hover:bg-pink-600"
    },
    {
      name: "YouTube Music",
      icon: Youtube,
      url: EXTERNAL_LINKS.YOUTUBE,
      color: "hover:bg-red-600"
    },
    {
      name: "Spotify",
      icon: Music,
      url: EXTERNAL_LINKS.SPOTIFY,
      color: "hover:bg-green-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Follow RealZn</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
        {socialLinks.map((social) => (
          <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className={`bg-black/50 border-green-900 ${social.color} transition-colors duration-300`}
            >
              <social.icon className="mr-2 h-5 w-5" />
              {social.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}