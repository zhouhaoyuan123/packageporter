import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Loader2, Circle, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface InstallationProgressProps {
  jobId: number;
}

export function InstallationProgress({ jobId }: InstallationProgressProps) {
  const { t } = useLanguage();
  const { data: job, isLoading, isError } = useQuery({
    queryKey: [`/api/installations/${jobId}`],
    refetchInterval: (data) => {
      // Stop polling if job is completed
      if (data?.state?.data?.status === "completed") {
        return false;
      }
      // Continue polling for failed jobs for a short time to show error
      if (data?.state?.data?.status === "failed") {
        return 1000; // Poll every 1 second for failed jobs
      }
      return 2000; // Poll every 2 seconds
    },
    enabled: !!jobId,
    retry: false, // Don't retry when job is deleted
  });

  // If job was deleted (404 error), don't show anything
  if (isError || (!isLoading && !job)) {
    return null;
  }

  if (isLoading || !job) {
    return null;
  }

  if ((job as any).status === "pending" || (job as any).status === "installing") {
    return (
      <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-npm-border dark:border-gray-600 p-8 mb-8 transition-colors">
        <CardContent className="p-0">
          <div className="flex items-center mb-6">
            <Loader2 className="animate-spin h-6 w-6 text-npm-red mr-3" />
            <h3 className="text-2xl font-semibold text-npm-dark dark:text-white">{t.installingPackages}</h3>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
              <span>{(job as any).currentStep || t.preparing}</span>
              <span>{(job as any).progress}%</span>
            </div>
            <Progress value={(job as any).progress} className="w-full h-3" />
          </div>

          {/* Installation Steps */}
          <div className="space-y-4">
            <div className="flex items-center text-npm-success">
              <CheckCircle className="mr-3 h-4 w-4" />
              <span>{t.environmentCreated}</span>
            </div>
            
            {(job as any).progress >= 20 && (
              <div className="flex items-center text-npm-success">
                <CheckCircle className="mr-3 h-4 w-4" />
                <span>{t.projectInitialized}</span>
              </div>
            )}

            {(job as any).progress >= 30 && (job as any).progress < 70 && (
              <div className="flex items-center text-npm-red">
                <Loader2 className="animate-spin mr-3 h-4 w-4" />
                <span>{t.installingPackagesProgress}</span>
              </div>
            )}

            {(job as any).progress >= 70 && (job as any).progress < 100 && (
              <div className="flex items-center text-npm-red">
                <Loader2 className="animate-spin mr-3 h-4 w-4" />
                <span>{t.generatingBundle}</span>
              </div>
            )}

            {(job as any).progress < 70 && (
              <div className="flex items-center text-gray-400 dark:text-gray-500">
                <Circle className="mr-3 h-4 w-4 text-xs" />
                <span>{t.generatingBundle}</span>
              </div>
            )}
          </div>

          {/* Installation Log */}
          <div className="mt-6">
            <div className="bg-npm-dark dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <div className="mb-1">$ npm install {((job as any).packages as any)?.[0]?.name || "..."}</div>
              <div className="mb-1 text-gray-400">Installing dependencies...</div>
              {(job as any).progress >= 50 && (
                <div className="text-gray-400">Please wait ...</div>
              )}
              <div className="animate-pulse">█</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if ((job as any).status === "failed") {
    return (
      <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-red-200 dark:border-red-700 p-8 mb-8 transition-colors">
        <CardContent className="p-0">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-npm-accent text-xl mr-3" />
            <h3 className="text-2xl font-semibold text-npm-dark dark:text-white">{t.installationFailed}</h3>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-6">
            <p className="text-red-800 dark:text-red-300">{(job as any).errorMessage}</p>
          </div>
          
          <div className="text-sm text-gray-600">
            This failed installation will be automatically removed in a few seconds.
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}
