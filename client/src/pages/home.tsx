import { useState } from "react";
import { PackageForm } from "@/components/package-form";
import { InstallationProgress } from "@/components/installation-progress";
import { DownloadSection } from "@/components/download-section";
import { Package, FileArchive, Shield, Clock } from "lucide-react";

export default function Home() {
  const [currentJobId, setCurrentJobId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-npm-bg">
      {/* Header */}
      <header className="bg-white border-b border-npm-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="text-npm-red text-3xl" />
              <h1 className="text-2xl font-bold text-npm-dark">Package Installer Service</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-npm-text hover:text-npm-red transition-colors">Documentation</a>
              <a href="#" className="text-npm-text hover:text-npm-red transition-colors">API</a>
              <a href="#" className="text-npm-text hover:text-npm-red transition-colors">Support</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-npm-dark mb-4">Install & Bundle NPM Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specify npm packages, automatically install them in a clean environment, and download a bundled zip file with all dependencies.
          </p>
        </div>

        {/* Package Form */}
        <PackageForm onJobCreated={setCurrentJobId} />

        {/* Installation Progress */}
        {currentJobId && (
          <InstallationProgress jobId={currentJobId} />
        )}

        {/* Download Section */}
        {currentJobId && (
          <DownloadSection jobId={currentJobId} />
        )}

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 mt-16">
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 border border-npm-border shadow-sm">
              <Shield className="text-npm-red text-3xl mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-npm-dark mb-2">Isolated Environment</h4>
              <p className="text-gray-600">Each installation runs in a clean, isolated environment to prevent conflicts.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 border border-npm-border shadow-sm">
              <FileArchive className="text-npm-red text-3xl mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-npm-dark mb-2">Automatic Bundling</h4>
              <p className="text-gray-600">All dependencies are automatically bundled into a convenient zip file.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 border border-npm-border shadow-sm">
              <Clock className="text-npm-red text-3xl mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-npm-dark mb-2">Quick & Reliable</h4>
              <p className="text-gray-600">Fast package installation with real-time progress tracking.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-npm-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Package className="text-npm-red text-xl" />
              <span className="text-npm-dark font-medium">Package Installer Service</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-npm-red transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-npm-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-npm-red transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
