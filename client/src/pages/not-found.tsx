
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageThemeToggle } from "@/components/LanguageThemeToggle";
import { Package, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useLanguage();

  useEffect(() => {
    const title = `404 - ${t.appTitle}`;
    document.title = title;
    // Force title update
    setTimeout(() => {
      if (document.title !== title) {
        document.title = title;
      }
    }, 100);
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-full p-8 border border-npm-border dark:border-gray-600 shadow-sm">
              <AlertTriangle className="text-npm-red text-6xl" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-npm-dark dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-npm-dark dark:text-white mb-4">{t.pageNotFound}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.pageNotFoundDescription}
          </p>
          
          <Link href="/" className="inline-flex items-center space-x-2 bg-npm-red hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>{t.backToHome}</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
