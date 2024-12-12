import { Card } from "@/components/ui/card";
import { SPOTIFY_TRACKS } from "@/lib/constants/spotify-tracks";

export function SpotifyTracks() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest Releases</h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        {SPOTIFY_TRACKS.map((embed, index) => (
          <Card key={index} className="bg-black/50 border-green-900 p-4">
            <iframe
              style={{ borderRadius: "12px" }}
              src={`${embed}?utm_source=generator`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}