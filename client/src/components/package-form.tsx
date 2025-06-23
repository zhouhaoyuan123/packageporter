import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { apiRequest } from "@/lib/queryClient";
import { Plus, Download, X, Package as PackageIcon } from "lucide-react";

interface Package {
  name: string;
  version?: string;
}

interface PackageFormProps {
  onJobCreated: (jobId: number) => void;
}

export function PackageForm({ onJobCreated }: PackageFormProps) {
  const [packageName, setPackageName] = useState("");
  const [packageVersion, setPackageVersion] = useState("");
  const [packages, setPackages] = useState<Package[]>([]);
  const { toast } = useToast();
  const { t } = useLanguage();

  const createInstallationMutation = useMutation({
    mutationFn: async (packages: Package[]) => {
      const response = await apiRequest("POST", "/api/installations", { packages });
      return response.json();
    },
    onSuccess: (data) => {
      onJobCreated(data.id);
      setPackages([]);
      toast({
        title: t.installingPackages,
        description: "Your package installation has been queued.",
      });
    },
    onError: (error: any) => {
      toast({
        title: t.installationFailed,
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const addPackage = () => {
    if (!packageName.trim()) {
      toast({
        title: t.invalidPackage,
        description: t.packageNameRequired,
        variant: "destructive",
      });
      return;
    }

    const existingPackage = packages.find(pkg => pkg.name === packageName);
    if (existingPackage) {
      toast({
        title: t.duplicatePackage,
        description: t.alreadyInList,
        variant: "destructive",
      });
      return;
    }

    const newPackage: Package = {
      name: packageName.trim(),
      version: packageVersion.trim() || undefined,
    };

    setPackages([...packages, newPackage]);
    setPackageName("");
    setPackageVersion("");
  };

  const removePackage = (index: number) => {
    setPackages(packages.filter((_, i) => i !== index));
  };

  const startInstallation = () => {
    if (packages.length === 0) {
      toast({
        title: t.noPackages,
        description: t.addAtLeastOne,
        variant: "destructive",
      });
      return;
    }

    createInstallationMutation.mutate(packages);
  };

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-npm-border dark:border-gray-600 p-8 mb-8 transition-colors">
      <CardContent className="p-0">
        <div className="flex items-center mb-6">
          <PackageIcon className="text-npm-red text-xl mr-3" />
          <h3 className="text-2xl font-semibold text-npm-dark dark:text-white">{t.packageConfiguration}</h3>
        </div>

        {/* Package Input Section */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="packageName" className="block text-sm font-medium text-npm-text dark:text-gray-300 mb-2">
                {t.packageName}
              </Label>
              <Input
                id="packageName"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                placeholder={t.packageNamePlaceholder}
                className="w-full px-4 py-3 border border-npm-border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-npm-red focus:border-npm-red transition-colors font-mono text-sm bg-white dark:bg-gray-700 text-npm-dark dark:text-white"
                onKeyPress={(e) => e.key === "Enter" && addPackage()}
              />
            </div>
            <div>
              <Label htmlFor="packageVersion" className="block text-sm font-medium text-npm-text dark:text-gray-300 mb-2">
                {t.version}
              </Label>
              <Input
                id="packageVersion"
                value={packageVersion}
                onChange={(e) => setPackageVersion(e.target.value)}
                placeholder={t.versionPlaceholder}
                className="w-full px-4 py-3 border border-npm-border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-npm-red focus:border-npm-red transition-colors font-mono text-sm bg-white dark:bg-gray-700 text-npm-dark dark:text-white"
                onKeyPress={(e) => e.key === "Enter" && addPackage()}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={addPackage}
              className="bg-npm-red text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" />
              {t.addPackage}
            </Button>
            <Button
              onClick={startInstallation}
              disabled={packages.length === 0 || createInstallationMutation.isPending}
              className="bg-npm-success text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              {createInstallationMutation.isPending ? t.starting : t.installBundle}
            </Button>
          </div>
        </div>

        {/* Package List */}
        {packages.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-medium text-npm-dark dark:text-white mb-4">{t.selectedPackages}</h4>
            <div className="space-y-3">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-npm-bg dark:bg-gray-700 rounded-lg p-4 border border-npm-border dark:border-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    <PackageIcon className="text-npm-red mr-3 h-5 w-5" />
                    <span className="font-mono font-medium text-npm-dark dark:text-white">{pkg.name}</span>
                    {pkg.version && (
                      <span className="text-gray-500 dark:text-gray-400 ml-2">@{pkg.version}</span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removePackage(index)}
                    className="text-npm-accent hover:text-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
