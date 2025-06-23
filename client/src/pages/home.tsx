import React, { useState, useEffect } from "react";
import { PackageForm } from "@/components/package-form";
import { InstallationProgress } from "@/components/installation-progress";
import { DownloadSection } from "@/components/download-section";
import { LanguageThemeToggle } from "@/components/LanguageThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Package, FileArchive, Shield, Clock, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [currentJobId, setCurrentJobId] = useState<number | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.appTitle;
  }, [t]);

  return (
    <div className="min-h-screen bg-npm-bg dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-npm-border dark:border-gray-700 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="text-npm-red text-3xl" />
              <h1 className="text-2xl font-bold text-npm-dark dark:text-white">{t.appTitle}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-npm-bg dark:bg-gray-700 rounded-lg px-3 py-2">
                <Mail className="h-4 w-4 text-npm-text dark:text-gray-300" />
                <span className="text-sm text-npm-text dark:text-gray-300">{t.support}:</span>
                <a 
                  href="mailto:zhouhaoyuan2012@foxmail.com" 
                  className="text-sm text-npm-red hover:underline"
                >
                  zhouhaoyuan2012@foxmail.com
                </a>
              </div>
              <LanguageThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-npm-dark dark:text-white mb-4">{t.heroTitle}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.heroDescription}
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
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-npm-border dark:border-gray-600 shadow-sm transition-colors">
              <Shield className="text-npm-red text-3xl mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-npm-dark dark:text-white mb-2">{t.isolatedEnvironment}</h4>
              <p className="text-gray-600 dark:text-gray-300">{t.isolatedEnvironmentDesc}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-npm-border dark:border-gray-600 shadow-sm transition-colors">
              <FileArchive className="text-npm-red text-3xl mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-npm-dark dark:text-white mb-2">{t.automaticBundling}</h4>
              <p className="text-gray-600 dark:text-gray-300">{t.automaticBundlingDesc}</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-npm-border dark:border-gray-600 shadow-sm transition-colors">
              <Clock className="text-npm-red text-3xl mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-npm-dark dark:text-white mb-2">{t.quickReliable}</h4>
              <p className="text-gray-600 dark:text-gray-300">{t.quickReliableDesc}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-npm-border dark:border-gray-700 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Package className="text-npm-red text-xl" />
              <span className="text-npm-dark dark:text-white font-medium">{t.appTitle}</span>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600 dark:text-gray-300">
              <Link href="/privacy-policy" className="hover:text-npm-red transition-colors">{t.privacyPolicy}</Link>
              <Link href="/terms-of-service" className="hover:text-npm-red transition-colors">{t.termsOfService}</Link>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:zhouhaoyuan2012@foxmail.com" 
                  className="hover:text-npm-red transition-colors"
                >
                  {t.contactSupport}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}