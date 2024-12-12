import { MusicHero } from "@/components/music/hero";
import { SpotifyTracks } from "@/components/music/spotify-tracks";
import { SocialLinks } from "@/components/music/social-links";
import { MusicFooter } from "@/components/music/footer";
import { MusicNav } from "@/components/music/nav";

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      <MusicNav />
      <MusicHero />
      <div id="releases">
        <SpotifyTracks />
      </div>
      <div id="social">
        <SocialLinks />
      </div>
      <MusicFooter />
    </div>
  );
}