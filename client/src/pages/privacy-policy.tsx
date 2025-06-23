
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageThemeToggle } from "@/components/LanguageThemeToggle";
import { Package, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  useEffect(() => {
    const title = `${t.privacyPolicy} - ${t.appTitle}`;
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
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-npm-border dark:border-gray-600 shadow-sm p-8 transition-colors">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/" className="text-npm-red hover:text-red-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold text-npm-dark dark:text-white">{t.privacyPolicy}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-3">{t.privacySection1Title}</h2>
                <p>{t.privacySection1Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-3">{t.privacySection2Title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t.privacySection2Item1}</li>
                  <li>{t.privacySection2Item2}</li>
                  <li>{t.privacySection2Item3}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-3">{t.privacySection3Title}</h2>
                <p>{t.privacySection3Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-3">{t.privacySection4Title}</h2>
                <p>{t.privacySection4Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-3">{t.privacySection5Title}</h2>
                <p>{t.privacySection5Content}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-3">{t.contactTitle}</h2>
                <p>
                  {t.contactContent}{" "}
                  <a 
                    href="mailto:zhouhaoyuan2012@foxmail.com" 
                    className="text-npm-red hover:underline"
                  >
                    zhouhaoyuan2012@foxmail.com
                  </a>
                </p>
              </section>

              <div className="text-sm text-gray-500 dark:text-gray-400 mt-8 pt-4 border-t border-gray-200 dark:border-gray-600">
                {t.lastUpdated}: December 15, 2024
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
