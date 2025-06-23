
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageThemeToggle } from "@/components/LanguageThemeToggle";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `404 - ${t.appTitle}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-npm-bg dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-npm-border dark:border-gray-700 shadow-sm transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Package className="text-npm-red text-3xl" />
                <h1 className="text-2xl font-bold text-npm-dark dark:text-white">{t.appTitle}</h1>
              </Link>
            </div>
            <LanguageThemeToggle />
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="h-24 w-24 text-npm-red mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-npm-dark dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-npm-dark dark:text-white mb-4">{t.pageNotFound}</h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            {t.pageNotFoundDescription}
          </p>
          
          <Link href="/">
            <Button className="bg-npm-red hover:bg-red-600 text-white px-8 py-3 text-lg">
              <Home className="h-5 w-5 mr-2" />
              {t.backToHome}
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
