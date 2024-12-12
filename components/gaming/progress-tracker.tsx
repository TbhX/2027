import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { PROJECT_STAGES } from "@/lib/constants/project-stages";
import { cn } from "@/lib/utils";

export function ProgressTracker() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Progression du Projet
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {PROJECT_STAGES.map((stage, index) => (
          <Card 
            key={index}
            className={cn(
              "p-6 bg-black/70 backdrop-blur-sm border transition-all duration-300",
              stage.status === "in-progress" 
                ? "border-indigo-500/50 hover:border-indigo-500"
                : "border-gray-800/50 hover:border-gray-800"
            )}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div 
                    className={cn(
                      "w-3 h-3 rounded-full",
                      stage.status === "in-progress" ? "bg-indigo-500" : "bg-gray-600"
                    )}
                  />
                  <h3 className={cn(
                    "font-semibold",
                    stage.status === "in-progress" 
                      ? "text-indigo-400"
                      : "text-gray-400"
                  )}>
                    {stage.name}
                  </h3>
                </div>
                <span className={cn(
                  "text-lg font-bold",
                  stage.status === "in-progress" 
                    ? "text-indigo-400"
                    : "text-gray-600"
                )}>
                  {stage.progress}%
                </span>
              </div>
              <Progress 
                value={stage.progress} 
                className={cn(
                  "h-2",
                  stage.status === "in-progress" 
                    ? "bg-indigo-950/30" 
                    : "bg-gray-900/30"
                )}
                indicatorClassName={cn(
                  stage.status === "in-progress"
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600"
                    : "bg-gray-700"
                )}
              />
              {stage.status === "in-progress" && (
                <div className="bg-indigo-900/20 p-3 rounded-lg border border-indigo-500/20">
                  <p className="text-indigo-200 text-sm">
                    Cette étape est actuellement en cours de réalisation.
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}