import { GamingHero } from "@/components/gaming/hero";
import { ProgressTracker } from "@/components/gaming/progress-tracker";
import { ProjectLink } from "@/components/gaming/project-link";
import { GamingFooter } from "@/components/gaming/footer";
import { GamingNav } from "@/components/gaming/nav";
import Image from "next/image";

export default function GamingPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://ibb.co/RBX9tVB"
          alt="Gaming Background"
          fill
          className="object-cover opacity-60 blur-[2px]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <GamingNav />
        <GamingHero />
        <div id="progress">
          <ProgressTracker />
        </div>
        <div id="project">
          <ProjectLink />
        </div>
        <GamingFooter />
      </div>
    </div>
  );
}