import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Eye, Package as PackageIcon, Info, Copy, FolderOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface DownloadSectionProps {
  jobId: number;
}

export function DownloadSection({ jobId }: DownloadSectionProps) {
  const [showContents, setShowContents] = useState(false);
  const { toast } = useToast();
  
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
  const downloadUrl = `${window.location.origin}/api/installations/${jobId}/download`;

  const handleDownload = () => {
    window.open(`/api/installations/${jobId}/download`, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadUrl);
      toast({
        title: "Link Copied",
        description: "Download link has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy link to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleViewContents = () => {
    setShowContents(!showContents);
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
            onClick={handleViewContents}
            variant="outline"
            className="flex-1 bg-white text-npm-dark px-8 py-4 rounded-lg border-2 border-npm-red hover:bg-npm-bg transition-colors font-medium flex items-center justify-center text-lg"
          >
            <Eye className="mr-3 h-5 w-5" />
            {showContents ? "Hide Contents" : "View Contents"}
          </Button>
        </div>

        {/* Copy Download Link */}
        <div className="mt-4">
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="w-full bg-white text-npm-dark px-4 py-3 rounded-lg border border-npm-border hover:bg-npm-bg transition-colors font-medium flex items-center justify-center"
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Download Link
          </Button>
        </div>

        {/* Bundle Contents */}
        {showContents && (
          <div className="mt-6 p-4 bg-npm-dark rounded-lg">
            <h5 className="font-medium text-white mb-3 flex items-center">
              <FolderOpen className="mr-2 h-4 w-4" />
              Bundle Contents
            </h5>
            <div className="font-mono text-sm text-green-400 space-y-1">
              <div>📁 packages.zip</div>
              <div className="ml-4">📄 package.json</div>
              <div className="ml-4">📄 package-lock.json</div>
              <div className="ml-4">📁 node_modules/</div>
              {packages.map((pkg, index) => (
                <div key={index} className="ml-8">
                  📁 {pkg.name}/
                </div>
              ))}
              <div className="ml-8 text-gray-400">... and all dependencies</div>
            </div>
          </div>
        )}

        {/* Download Info */}
        <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-start">
            <Info className="text-orange-500 mr-3 mt-1 h-5 w-5" />
            <div>
              <h5 className="font-medium text-orange-900 mb-1">Download Information</h5>
              <p className="text-sm text-orange-700">
                Your bundle includes node_modules, package.json, and package-lock.json. 
                The download link will expire in 15 minutes and files will be automatically deleted.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
