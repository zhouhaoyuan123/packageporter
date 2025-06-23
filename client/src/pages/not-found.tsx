import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `404 - ${t.appTitle}`;
  }, [t]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-npm-bg dark:bg-gray-900 transition-colors">
      <Card className="w-full max-w-md mx-4 bg-white dark:bg-gray-800 border border-npm-border dark:border-gray-600 transition-colors">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <AlertCircle className="h-16 w-16 text-npm-red mb-4" />
            <h1 className="text-3xl font-bold text-npm-dark dark:text-white mb-2">404</h1>
            <h2 className="text-xl font-semibold text-npm-dark dark:text-white mb-4">{t.pageNotFound}</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t.pageNotFoundDescription}
            </p>
            
            <Link href="/">
              <Button className="bg-npm-red hover:bg-red-600 text-white">
                <Home className="h-4 w-4 mr-2" />
                {t.backToHome}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

            <Link href="/">
              <Button className="bg-npm-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center">
                <Home className="mr-2 h-4 w-4" />
                {t.backToHome}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
