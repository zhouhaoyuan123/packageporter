import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Eye, Package as PackageIcon, Info } from "lucide-react";

interface DownloadSectionProps {
  jobId: number;
}

export function DownloadSection({ jobId }: DownloadSectionProps) {
  const { data: job, isLoading } = useQuery({
    queryKey: [`/api/installations/${jobId}`],
    refetchInterval: (data) => {
      if (data?.state?.data?.status === "completed") {
        return false;
      }
      return 2000;
    },
    enabled: !!jobId,
  });

  if (isLoading || !job || job.status !== "completed") {
    return null;
  }

  const packages = job.packages as Array<{ name: string; version?: string }>;
  const packageCount = packages.length;

  const handleDownload = () => {
    window.open(`/api/installations/${jobId}/download`, '_blank');
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg border border-npm-border p-8 mb-8">
      <CardContent className="p-0">
        <div className="flex items-center mb-6">
          <CheckCircle className="text-npm-success text-xl mr-3" />
          <h3 className="text-2xl font-semibold text-npm-dark">Installation Complete!</h3>
        </div>

        {/* Package Summary */}
        <div className="bg-npm-bg rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-npm-dark mb-4">Bundle Summary</h4>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-npm-border">
              <div className="text-2xl font-bold text-npm-red">{packageCount}</div>
              <div className="text-sm text-gray-600">Packages Installed</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-npm-border">
              <div className="text-2xl font-bold text-npm-red">{job.bundleSize || "Unknown"}</div>
              <div className="text-sm text-gray-600">Bundle Size</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-npm-border">
              <div className="text-2xl font-bold text-npm-red">Ready</div>
              <div className="text-sm text-gray-600">Status</div>
            </div>
          </div>
        </div>

        {/* Installed Packages List */}
        <div className="mb-6">
          <h4 className="font-semibold text-npm-dark mb-4">Installed Packages</h4>
          <div className="space-y-2">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-npm-bg rounded-lg p-3 border border-npm-border"
              >
                <div className="flex items-center">
                  <PackageIcon className="text-npm-red mr-3 h-5 w-5" />
                  <span className="font-mono font-medium">{pkg.name}</span>
                  {pkg.version && (
                    <span className="text-gray-500 ml-2">@{pkg.version}</span>
                  )}
                </div>
                <span className="text-sm text-npm-success">
                  <CheckCircle className="inline mr-1 h-4 w-4" />
                  Installed
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleDownload}
            className="flex-1 bg-npm-red text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center text-lg"
          >
            <Download className="mr-3 h-5 w-5" />
            Download Bundle (packages.zip)
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-white text-npm-dark px-8 py-4 rounded-lg border-2 border-npm-red hover:bg-npm-bg transition-colors font-medium flex items-center justify-center text-lg"
          >
            <Eye className="mr-3 h-5 w-5" />
            View Bundle Contents
          </Button>
        </div>

        {/* Download Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start">
            <Info className="text-blue-500 mr-3 mt-1 h-5 w-5" />
            <div>
              <h5 className="font-medium text-blue-900 mb-1">Download Information</h5>
              <p className="text-sm text-blue-700">
                Your bundle includes node_modules, package.json, and package-lock.json. 
                The download link will be available for 24 hours.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
