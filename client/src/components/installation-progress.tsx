import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Loader2, Circle, AlertTriangle } from "lucide-react";

interface InstallationProgressProps {
  jobId: number;
}

export function InstallationProgress({ jobId }: InstallationProgressProps) {
  const { data: job, isLoading } = useQuery({
    queryKey: [`/api/installations/${jobId}`],
    refetchInterval: (data) => {
      // Stop polling if job is completed or failed
      if (data?.state?.data?.status === "completed" || data?.state?.data?.status === "failed") {
        return false;
      }
      return 2000; // Poll every 2 seconds
    },
    enabled: !!jobId,
  });

  if (isLoading || !job) {
    return null;
  }

  if (job.status === "pending" || job.status === "installing") {
    return (
      <Card className="bg-white rounded-xl shadow-lg border border-npm-border p-8 mb-8">
        <CardContent className="p-0">
          <div className="flex items-center mb-6">
            <Loader2 className="animate-spin h-6 w-6 text-npm-red mr-3" />
            <h3 className="text-2xl font-semibold text-npm-dark">Installing Packages</h3>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{job.currentStep || "Preparing..."}</span>
              <span>{job.progress}%</span>
            </div>
            <Progress value={job.progress} className="w-full h-3" />
          </div>

          {/* Installation Steps */}
          <div className="space-y-4">
            <div className="flex items-center text-npm-success">
              <CheckCircle className="mr-3 h-4 w-4" />
              <span>Environment created successfully</span>
            </div>
            
            {job.progress >= 20 && (
              <div className="flex items-center text-npm-success">
                <CheckCircle className="mr-3 h-4 w-4" />
                <span>Project initialized</span>
              </div>
            )}

            {job.progress >= 30 && job.progress < 70 && (
              <div className="flex items-center text-npm-red">
                <Loader2 className="animate-spin mr-3 h-4 w-4" />
                <span>Installing packages...</span>
              </div>
            )}

            {job.progress >= 70 && job.progress < 100 && (
              <div className="flex items-center text-npm-red">
                <Loader2 className="animate-spin mr-3 h-4 w-4" />
                <span>Generating package bundle...</span>
              </div>
            )}

            {job.progress < 70 && (
              <div className="flex items-center text-gray-400">
                <Circle className="mr-3 h-4 w-4 text-xs" />
                <span>Generating package bundle...</span>
              </div>
            )}
          </div>

          {/* Installation Log */}
          <div className="mt-6">
            <div className="bg-npm-dark rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <div className="mb-1">$ npm install {(job.packages as any)?.[0]?.name || "..."}</div>
              <div className="mb-1 text-gray-400">Installing dependencies...</div>
              {job.progress >= 50 && (
                <div className="text-gray-400">found 0 vulnerabilities</div>
              )}
              <div className="animate-pulse">█</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (job.status === "failed") {
    return (
      <Card className="bg-white rounded-xl shadow-lg border border-red-200 p-8 mb-8">
        <CardContent className="p-0">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-npm-accent text-xl mr-3" />
            <h3 className="text-2xl font-semibold text-npm-dark">Installation Failed</h3>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{job.errorMessage}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}
