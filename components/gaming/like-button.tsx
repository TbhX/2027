"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem("gamingLikes");
    const userHasLiked = localStorage.getItem("userHasLiked");
    if (savedLikes) setLikes(parseInt(savedLikes));
    if (userHasLiked) setHasLiked(true);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("gamingLikes", newLikes.toString());
      localStorage.setItem("userHasLiked", "true");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "group transition-all duration-300",
          hasLiked ? "text-purple-400" : "text-gray-400 hover:text-purple-400"
        )}
        onClick={handleLike}
        disabled={hasLiked}
      >
        <Heart
          className={cn(
            "w-5 h-5 mr-2 transition-all duration-300",
            hasLiked ? "fill-purple-400" : "group-hover:fill-purple-400/20"
          )}
        />
        <span className="font-medium">{likes}</span>
      </Button>
    </div>
  );
}