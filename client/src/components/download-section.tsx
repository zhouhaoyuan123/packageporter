import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Eye, Package as PackageIcon, Info, Copy, FolderOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface DownloadSectionProps {
  jobId: number;
}

export function DownloadSection({ jobId }: DownloadSectionProps) {
  const [showContents, setShowContents] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const { data: job, isLoading, isError } = useQuery({
    queryKey: [`/api/installations/${jobId}`],
    refetchInterval: (data) => {
      if (data?.state?.data?.status === "completed") {
        return false;
      }
      return 2000;
    },
    enabled: !!jobId,
    retry: false,
  });

  // If job was deleted or doesn't exist, don't show download section
  if (isError || isLoading || !job || (job as any).status !== "completed") {
    return null;
  }

  const packages = (job as any).packages as Array<{ name: string; version?: string }>;
  const packageCount = packages.length;
  const downloadUrl = `${window.location.origin}/api/installations/${jobId}/download`;

  const handleDownload = () => {
    window.open(`/api/installations/${jobId}/download`, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadUrl);
      toast({
        title: t.linkCopied,
        description: t.linkCopiedDescription,
      });
    } catch (error) {
      toast({
        title: t.copyFailed,
        description: t.copyFailedDescription,
        variant: "destructive",
      });
    }
  };

  const handleViewContents = () => {
    setShowContents(!showContents);
  };

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-npm-border dark:border-gray-600 p-8 mb-8 transition-colors">
      <CardContent className="p-0">
        <div className="flex items-center mb-6">
          <CheckCircle className="text-npm-success text-xl mr-3" />
          <h3 className="text-2xl font-semibold text-npm-dark dark:text-white">{t.installationComplete}</h3>
        </div>

        {/* Package Summary */}
        <div className="bg-npm-bg dark:bg-gray-700 rounded-lg p-6 mb-6 transition-colors">
          <h4 className="font-semibold text-npm-dark dark:text-white mb-4">{t.bundleSummary}</h4>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-gray-600 rounded-lg p-4 border border-npm-border dark:border-gray-500 transition-colors">
              <div className="text-2xl font-bold text-npm-red">{packageCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.packagesInstalled}</div>
            </div>
            <div className="bg-white dark:bg-gray-600 rounded-lg p-4 border border-npm-border dark:border-gray-500 transition-colors">
              <div className="text-2xl font-bold text-npm-red">{(job as any).bundleSize || "Unknown"}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.bundleSize}</div>
            </div>
            <div className="bg-white dark:bg-gray-600 rounded-lg p-4 border border-npm-border dark:border-gray-500 transition-colors">
              <div className="text-2xl font-bold text-npm-red">{t.ready}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{t.status}</div>
            </div>
          </div>
        </div>

        {/* Installed Packages List */}
        <div className="mb-6">
          <h4 className="font-semibold text-npm-dark dark:text-white mb-4">{t.installedPackages}</h4>
          <div className="space-y-2">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-npm-bg dark:bg-gray-700 rounded-lg p-3 border border-npm-border dark:border-gray-600 transition-colors"
              >
                <div className="flex items-center">
                  <PackageIcon className="text-npm-red mr-3 h-5 w-5" />
                  <span className="font-mono font-medium text-npm-dark dark:text-white">{pkg.name}</span>
                  {pkg.version && (
                    <span className="text-gray-500 dark:text-gray-400 ml-2">@{pkg.version}</span>
                  )}
                </div>
                <span className="text-sm text-npm-success">
                  <CheckCircle className="inline mr-1 h-4 w-4" />
                  {t.installed}
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
            {t.downloadBundle}
          </Button>
          <Button
            onClick={handleViewContents}
            variant="outline"
            className="flex-1 bg-white dark:bg-gray-700 text-npm-dark dark:text-white px-8 py-4 rounded-lg border-2 border-npm-red hover:bg-npm-bg dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center text-lg"
          >
            <Eye className="mr-3 h-5 w-5" />
            {showContents ? t.hideContents : t.viewContents}
          </Button>
        </div>

        {/* Copy Download Link */}
        <div className="mt-4">
          <Button
            onClick={handleCopyLink}
            variant="outline"
            className="w-full bg-white dark:bg-gray-700 text-npm-dark dark:text-white px-4 py-3 rounded-lg border border-npm-border dark:border-gray-600 hover:bg-npm-bg dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center"
          >
            <Copy className="mr-2 h-4 w-4" />
            {t.copyDownloadLink}
          </Button>
        </div>

        {/* Bundle Contents */}
        {showContents && (
          <div className="mt-6 p-4 bg-npm-dark dark:bg-gray-900 rounded-lg transition-colors">
            <h5 className="font-medium text-white mb-3 flex items-center">
              <FolderOpen className="mr-2 h-4 w-4" />
              {t.bundleContents}
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
              <div className="ml-8 text-gray-400">{t.allDependencies}</div>
            </div>
          </div>
        )}

        {/* Download Info */}
        <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg transition-colors">
          <div className="flex items-start">
            <Info className="text-orange-500 mr-3 mt-1 h-5 w-5" />
            <div>
              <h5 className="font-medium text-orange-900 dark:text-orange-200 mb-1">{t.downloadInfo}</h5>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                {t.downloadInfoText}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
