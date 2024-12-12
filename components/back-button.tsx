"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  variant?: "web" | "music" | "gaming" | "default";
}

export function BackButton({ variant = "default" }: BackButtonProps) {
  const router = useRouter();

  const variantStyles = {
    web: "text-blue-400 hover:text-blue-300 hover:bg-blue-900/20",
    music: "text-green-400 hover:text-green-300 hover:bg-green-900/20",
    gaming: "text-purple-400 hover:text-purple-300 hover:bg-purple-900/20",
    default: "text-gray-400 hover:text-gray-300 hover:bg-gray-900/20"
  };

  return (
    <Button
      variant="ghost"
      className={`${variantStyles[variant]} fixed top-20 left-4 z-50`}
      onClick={() => router.back()}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Retour
    </Button>
  );
}