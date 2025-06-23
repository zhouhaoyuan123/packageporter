import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n";
import { Settings, Globe, Sun, Moon, Monitor } from "lucide-react";

export function LanguageThemeToggle() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-npm-text dark:text-gray-300 hover:text-npm-red dark:hover:text-npm-red transition-colors">
          <Settings className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white dark:bg-gray-800 border border-npm-border dark:border-gray-600">
        {/* Language Section */}
        <div className="px-2 py-1.5">
          <div className="flex items-center mb-2">
            <Globe className="h-4 w-4 mr-2 text-npm-red" />
            <span className="text-sm font-medium text-npm-dark dark:text-white">{t.language}</span>
          </div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full bg-white dark:bg-gray-700 border border-npm-border dark:border-gray-600">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border border-npm-border dark:border-gray-600">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <SelectItem 
                  key={lang.code} 
                  value={lang.code}
                  className="hover:bg-npm-bg dark:hover:bg-gray-700 text-npm-dark dark:text-white"
                >
                  {lang.nativeName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DropdownMenuSeparator className="bg-npm-border dark:bg-gray-600" />

        {/* Theme Section */}
        <div className="px-2 py-1.5">
          <div className="flex items-center mb-2">
            {actualTheme === 'dark' ? (
              <Moon className="h-4 w-4 mr-2 text-npm-red" />
            ) : (
              <Sun className="h-4 w-4 mr-2 text-npm-red" />
            )}
            <span className="text-sm font-medium text-npm-dark dark:text-white">{t.theme}</span>
          </div>
          <div className="space-y-1">
            <DropdownMenuItem 
              onClick={() => setTheme('light')}
              className={`flex items-center cursor-pointer text-npm-dark dark:text-white hover:bg-npm-bg dark:hover:bg-gray-700 ${theme === 'light' ? 'bg-npm-bg dark:bg-gray-700' : ''}`}
            >
              <Sun className="h-4 w-4 mr-2" />
              {t.light}
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setTheme('dark')}
              className={`flex items-center cursor-pointer text-npm-dark dark:text-white hover:bg-npm-bg dark:hover:bg-gray-700 ${theme === 'dark' ? 'bg-npm-bg dark:bg-gray-700' : ''}`}
            >
              <Moon className="h-4 w-4 mr-2" />
              {t.dark}
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setTheme('system')}
              className={`flex items-center cursor-pointer text-npm-dark dark:text-white hover:bg-npm-bg dark:hover:bg-gray-700 ${theme === 'system' ? 'bg-npm-bg dark:bg-gray-700' : ''}`}
            >
              <Monitor className="h-4 w-4 mr-2" />
              {t.system}
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}