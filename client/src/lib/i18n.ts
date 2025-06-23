export type Language = 'en' | 'zh' | 'es' | 'fr' | 'de' | 'ja' | 'ko';

export interface Translations {
  // Header
  appTitle: string;
  support: string;
  
  // Hero section
  heroTitle: string;
  heroDescription: string;
  
  // Package form
  packageConfiguration: string;
  packageName: string;
  packageNamePlaceholder: string;
  version: string;
  versionPlaceholder: string;
  addPackage: string;
  installBundle: string;
  starting: string;
  selectedPackages: string;
  noPackages: string;
  addAtLeastOne: string;
  invalidPackage: string;
  packageNameRequired: string;
  duplicatePackage: string;
  alreadyInList: string;
  
  // Installation progress
  installingPackages: string;
  preparing: string;
  environmentCreated: string;
  projectInitialized: string;
  installingPackagesProgress: string;
  generatingBundle: string;
  installationFailed: string;
  failedJobCleanup: string;
  
  // Download section
  installationComplete: string;
  bundleSummary: string;
  packagesInstalled: string;
  bundleSize: string;
  status: string;
  ready: string;
  installedPackages: string;
  installed: string;
  downloadBundle: string;
  copyDownloadLink: string;
  viewContents: string;
  hideContents: string;
  bundleContents: string;
  allDependencies: string;
  downloadInfo: string;
  downloadInfoText: string;
  linkCopied: string;
  linkCopiedDescription: string;
  copyFailed: string;
  copyFailedDescription: string;
  
  // Features
  isolatedEnvironment: string;
  isolatedEnvironmentDesc: string;
  automaticBundling: string;
  automaticBundlingDesc: string;
  quickReliable: string;
  quickReliableDesc: string;
  
  // Footer
  privacyPolicy: string;
  termsOfService: string;
  contactSupport: string;
  
  // Theme and Language
  theme: string;
  language: string;
  light: string;
  dark: string;
  system: string;
}

const translations: Record<Language, Translations> = {
  en: {
    appTitle: "Package Installer Service",
    support: "Support",
    
    heroTitle: "Install & Bundle NPM Packages",
    heroDescription: "Specify npm packages, automatically install them in a clean environment, and download a bundled zip file with all dependencies.",
    
    packageConfiguration: "Package Configuration",
    packageName: "Package Name",
    packageNamePlaceholder: "e.g., lodash, express, react",
    version: "Version (Optional)",
    versionPlaceholder: "e.g., ^4.17.21, latest",
    addPackage: "Add Package",
    installBundle: "Install & Bundle",
    starting: "Starting...",
    selectedPackages: "Selected Packages",
    noPackages: "No Packages",
    addAtLeastOne: "Please add at least one package to install.",
    invalidPackage: "Invalid Package",
    packageNameRequired: "Package name is required.",
    duplicatePackage: "Duplicate Package",
    alreadyInList: "This package is already in the list.",
    
    installingPackages: "Installing Packages",
    preparing: "Preparing...",
    environmentCreated: "Environment created successfully",
    projectInitialized: "Project initialized",
    installingPackagesProgress: "Installing packages...",
    generatingBundle: "Generating package bundle...",
    installationFailed: "Installation Failed",
    failedJobCleanup: "This failed installation will be automatically removed in a few seconds.",
    
    installationComplete: "Installation Complete!",
    bundleSummary: "Bundle Summary",
    packagesInstalled: "Packages Installed",
    bundleSize: "Bundle Size",
    status: "Status",
    ready: "Ready",
    installedPackages: "Installed Packages",
    installed: "Installed",
    downloadBundle: "Download Bundle (packages.zip)",
    copyDownloadLink: "Copy Download Link",
    viewContents: "View Contents",
    hideContents: "Hide Contents",
    bundleContents: "Bundle Contents",
    allDependencies: "... and all dependencies",
    downloadInfo: "Download Information",
    downloadInfoText: "Your bundle includes node_modules, package.json, and package-lock.json. The download link will expire in 15 minutes and files will be automatically deleted.",
    linkCopied: "Link Copied",
    linkCopiedDescription: "Download link has been copied to your clipboard.",
    copyFailed: "Copy Failed",
    copyFailedDescription: "Unable to copy link to clipboard.",
    
    isolatedEnvironment: "Isolated Environment",
    isolatedEnvironmentDesc: "Each installation runs in a clean, isolated environment to prevent conflicts.",
    automaticBundling: "Automatic Bundling",
    automaticBundlingDesc: "All dependencies are automatically bundled into a convenient zip file.",
    quickReliable: "Quick & Reliable",
    quickReliableDesc: "Fast package installation with real-time progress tracking.",
    
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contactSupport: "Contact Support",
    
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System"
  },
  
  zh: {
    appTitle: "包安装服务",
    support: "支持",
    
    heroTitle: "安装和打包 NPM 包",
    heroDescription: "指定 npm 包，自动在干净环境中安装它们，并下载包含所有依赖项的捆绑 zip 文件。",
    
    packageConfiguration: "包配置",
    packageName: "包名称",
    packageNamePlaceholder: "例如：lodash, express, react",
    version: "版本（可选）",
    versionPlaceholder: "例如：^4.17.21, latest",
    addPackage: "添加包",
    installBundle: "安装和打包",
    starting: "启动中...",
    selectedPackages: "已选择的包",
    noPackages: "没有包",
    addAtLeastOne: "请至少添加一个要安装的包。",
    invalidPackage: "无效包",
    packageNameRequired: "包名称是必需的。",
    duplicatePackage: "重复包",
    alreadyInList: "此包已在列表中。",
    
    installingPackages: "正在安装包",
    preparing: "准备中...",
    environmentCreated: "环境创建成功",
    projectInitialized: "项目已初始化",
    installingPackagesProgress: "正在安装包...",
    generatingBundle: "正在生成包捆绑...",
    installationFailed: "安装失败",
    failedJobCleanup: "此失败的安装将在几秒钟内自动删除。",
    
    installationComplete: "安装完成！",
    bundleSummary: "捆绑摘要",
    packagesInstalled: "已安装的包",
    bundleSize: "捆绑大小",
    status: "状态",
    ready: "就绪",
    installedPackages: "已安装的包",
    installed: "已安装",
    downloadBundle: "下载捆绑包 (packages.zip)",
    copyDownloadLink: "复制下载链接",
    viewContents: "查看内容",
    hideContents: "隐藏内容",
    bundleContents: "捆绑内容",
    allDependencies: "... 和所有依赖项",
    downloadInfo: "下载信息",
    downloadInfoText: "您的捆绑包包括 node_modules、package.json 和 package-lock.json。下载链接将在 15 分钟后过期，文件将被自动删除。",
    linkCopied: "链接已复制",
    linkCopiedDescription: "下载链接已复制到剪贴板。",
    copyFailed: "复制失败",
    copyFailedDescription: "无法将链接复制到剪贴板。",
    
    isolatedEnvironment: "隔离环境",
    isolatedEnvironmentDesc: "每次安装都在干净、隔离的环境中运行，以防止冲突。",
    automaticBundling: "自动打包",
    automaticBundlingDesc: "所有依赖项都会自动打包到方便的 zip 文件中。",
    quickReliable: "快速可靠",
    quickReliableDesc: "快速包安装，实时进度跟踪。",
    
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    contactSupport: "联系支持",
    
    theme: "主题",
    language: "语言",
    light: "浅色",
    dark: "深色",
    system: "系统"
  },
  
  es: {
    appTitle: "Servicio de Instalación de Paquetes",
    support: "Soporte",
    
    heroTitle: "Instalar y Empaquetar Paquetes NPM",
    heroDescription: "Especifica paquetes npm, instálalos automáticamente en un entorno limpio y descarga un archivo zip empaquetado con todas las dependencias.",
    
    packageConfiguration: "Configuración de Paquetes",
    packageName: "Nombre del Paquete",
    packageNamePlaceholder: "ej., lodash, express, react",
    version: "Versión (Opcional)",
    versionPlaceholder: "ej., ^4.17.21, latest",
    addPackage: "Agregar Paquete",
    installBundle: "Instalar y Empaquetar",
    starting: "Iniciando...",
    selectedPackages: "Paquetes Seleccionados",
    noPackages: "Sin Paquetes",
    addAtLeastOne: "Por favor agregue al menos un paquete para instalar.",
    invalidPackage: "Paquete Inválido",
    packageNameRequired: "El nombre del paquete es requerido.",
    duplicatePackage: "Paquete Duplicado",
    alreadyInList: "Este paquete ya está en la lista.",
    
    installingPackages: "Instalando Paquetes",
    preparing: "Preparando...",
    environmentCreated: "Entorno creado exitosamente",
    projectInitialized: "Proyecto inicializado",
    installingPackagesProgress: "Instalando paquetes...",
    generatingBundle: "Generando paquete empaquetado...",
    installationFailed: "Instalación Fallida",
    failedJobCleanup: "Esta instalación fallida será eliminada automáticamente en unos segundos.",
    
    installationComplete: "¡Instalación Completa!",
    bundleSummary: "Resumen del Paquete",
    packagesInstalled: "Paquetes Instalados",
    bundleSize: "Tamaño del Paquete",
    status: "Estado",
    ready: "Listo",
    installedPackages: "Paquetes Instalados",
    installed: "Instalado",
    downloadBundle: "Descargar Paquete (packages.zip)",
    copyDownloadLink: "Copiar Enlace de Descarga",
    viewContents: "Ver Contenidos",
    hideContents: "Ocultar Contenidos",
    bundleContents: "Contenidos del Paquete",
    allDependencies: "... y todas las dependencias",
    downloadInfo: "Información de Descarga",
    downloadInfoText: "Su paquete incluye node_modules, package.json y package-lock.json. El enlace de descarga expirará en 15 minutos y los archivos serán eliminados automáticamente.",
    linkCopied: "Enlace Copiado",
    linkCopiedDescription: "El enlace de descarga ha sido copiado a su portapapeles.",
    copyFailed: "Copia Fallida",
    copyFailedDescription: "No se pudo copiar el enlace al portapapeles.",
    
    isolatedEnvironment: "Entorno Aislado",
    isolatedEnvironmentDesc: "Cada instalación se ejecuta en un entorno limpio y aislado para prevenir conflictos.",
    automaticBundling: "Empaquetado Automático",
    automaticBundlingDesc: "Todas las dependencias se empaquetan automáticamente en un archivo zip conveniente.",
    quickReliable: "Rápido y Confiable",
    quickReliableDesc: "Instalación rápida de paquetes con seguimiento de progreso en tiempo real.",
    
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    contactSupport: "Contactar Soporte",
    
    theme: "Tema",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema"
  },
  
  fr: {
    appTitle: "Service d'Installation de Paquets",
    support: "Support",
    
    heroTitle: "Installer et Emballer les Paquets NPM",
    heroDescription: "Spécifiez les paquets npm, installez-les automatiquement dans un environnement propre et téléchargez un fichier zip groupé avec toutes les dépendances.",
    
    packageConfiguration: "Configuration des Paquets",
    packageName: "Nom du Paquet",
    packageNamePlaceholder: "ex., lodash, express, react",
    version: "Version (Optionnelle)",
    versionPlaceholder: "ex., ^4.17.21, latest",
    addPackage: "Ajouter un Paquet",
    installBundle: "Installer et Emballer",
    starting: "Démarrage...",
    selectedPackages: "Paquets Sélectionnés",
    noPackages: "Aucun Paquet",
    addAtLeastOne: "Veuillez ajouter au moins un paquet à installer.",
    invalidPackage: "Paquet Invalide",
    packageNameRequired: "Le nom du paquet est requis.",
    duplicatePackage: "Paquet Dupliqué",
    alreadyInList: "Ce paquet est déjà dans la liste.",
    
    installingPackages: "Installation des Paquets",
    preparing: "Préparation...",
    environmentCreated: "Environnement créé avec succès",
    projectInitialized: "Projet initialisé",
    installingPackagesProgress: "Installation des paquets...",
    generatingBundle: "Génération du paquet groupé...",
    installationFailed: "Installation Échouée",
    failedJobCleanup: "Cette installation échouée sera automatiquement supprimée dans quelques secondes.",
    
    installationComplete: "Installation Terminée !",
    bundleSummary: "Résumé du Paquet",
    packagesInstalled: "Paquets Installés",
    bundleSize: "Taille du Paquet",
    status: "Statut",
    ready: "Prêt",
    installedPackages: "Paquets Installés",
    installed: "Installé",
    downloadBundle: "Télécharger le Paquet (packages.zip)",
    copyDownloadLink: "Copier le Lien de Téléchargement",
    viewContents: "Voir le Contenu",
    hideContents: "Masquer le Contenu",
    bundleContents: "Contenu du Paquet",
    allDependencies: "... et toutes les dépendances",
    downloadInfo: "Informations de Téléchargement",
    downloadInfoText: "Votre paquet inclut node_modules, package.json et package-lock.json. Le lien de téléchargement expirera dans 15 minutes et les fichiers seront automatiquement supprimés.",
    linkCopied: "Lien Copié",
    linkCopiedDescription: "Le lien de téléchargement a été copié dans votre presse-papiers.",
    copyFailed: "Copie Échouée",
    copyFailedDescription: "Impossible de copier le lien dans le presse-papiers.",
    
    isolatedEnvironment: "Environnement Isolé",
    isolatedEnvironmentDesc: "Chaque installation s'exécute dans un environnement propre et isolé pour éviter les conflits.",
    automaticBundling: "Emballage Automatique",
    automaticBundlingDesc: "Toutes les dépendances sont automatiquement emballées dans un fichier zip pratique.",
    quickReliable: "Rapide et Fiable",
    quickReliableDesc: "Installation rapide de paquets avec suivi de progression en temps réel.",
    
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions de Service",
    contactSupport: "Contacter le Support",
    
    theme: "Thème",
    language: "Langue",
    light: "Clair",
    dark: "Sombre",
    system: "Système"
  },
  
  de: {
    appTitle: "Paket-Installationsdienst",
    support: "Support",
    
    heroTitle: "NPM-Pakete Installieren und Bündeln",
    heroDescription: "Geben Sie npm-Pakete an, installieren Sie sie automatisch in einer sauberen Umgebung und laden Sie eine gebündelte Zip-Datei mit allen Abhängigkeiten herunter.",
    
    packageConfiguration: "Paket-Konfiguration",
    packageName: "Paketname",
    packageNamePlaceholder: "z.B. lodash, express, react",
    version: "Version (Optional)",
    versionPlaceholder: "z.B. ^4.17.21, latest",
    addPackage: "Paket Hinzufügen",
    installBundle: "Installieren und Bündeln",
    starting: "Starten...",
    selectedPackages: "Ausgewählte Pakete",
    noPackages: "Keine Pakete",
    addAtLeastOne: "Bitte fügen Sie mindestens ein Paket zur Installation hinzu.",
    invalidPackage: "Ungültiges Paket",
    packageNameRequired: "Paketname ist erforderlich.",
    duplicatePackage: "Doppeltes Paket",
    alreadyInList: "Dieses Paket ist bereits in der Liste.",
    
    installingPackages: "Pakete Installieren",
    preparing: "Vorbereiten...",
    environmentCreated: "Umgebung erfolgreich erstellt",
    projectInitialized: "Projekt initialisiert",
    installingPackagesProgress: "Pakete installieren...",
    generatingBundle: "Paket-Bundle generieren...",
    installationFailed: "Installation Fehlgeschlagen",
    failedJobCleanup: "Diese fehlgeschlagene Installation wird in wenigen Sekunden automatisch entfernt.",
    
    installationComplete: "Installation Abgeschlossen!",
    bundleSummary: "Bundle-Zusammenfassung",
    packagesInstalled: "Installierte Pakete",
    bundleSize: "Bundle-Größe",
    status: "Status",
    ready: "Bereit",
    installedPackages: "Installierte Pakete",
    installed: "Installiert",
    downloadBundle: "Bundle Herunterladen (packages.zip)",
    copyDownloadLink: "Download-Link Kopieren",
    viewContents: "Inhalt Anzeigen",
    hideContents: "Inhalt Verbergen",
    bundleContents: "Bundle-Inhalt",
    allDependencies: "... und alle Abhängigkeiten",
    downloadInfo: "Download-Informationen",
    downloadInfoText: "Ihr Bundle enthält node_modules, package.json und package-lock.json. Der Download-Link läuft in 15 Minuten ab und die Dateien werden automatisch gelöscht.",
    linkCopied: "Link Kopiert",
    linkCopiedDescription: "Download-Link wurde in die Zwischenablage kopiert.",
    copyFailed: "Kopieren Fehlgeschlagen",
    copyFailedDescription: "Link konnte nicht in die Zwischenablage kopiert werden.",
    
    isolatedEnvironment: "Isolierte Umgebung",
    isolatedEnvironmentDesc: "Jede Installation läuft in einer sauberen, isolierten Umgebung, um Konflikte zu vermeiden.",
    automaticBundling: "Automatisches Bündeln",
    automaticBundlingDesc: "Alle Abhängigkeiten werden automatisch in eine praktische Zip-Datei gebündelt.",
    quickReliable: "Schnell und Zuverlässig",
    quickReliableDesc: "Schnelle Paketinstallation mit Echtzeit-Fortschrittsverfolging.",
    
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    contactSupport: "Support Kontaktieren",
    
    theme: "Theme",
    language: "Sprache",
    light: "Hell",
    dark: "Dunkel",
    system: "System"
  },
  
  ja: {
    appTitle: "パッケージインストールサービス",
    support: "サポート",
    
    heroTitle: "NPMパッケージのインストールとバンドル",
    heroDescription: "npmパッケージを指定し、クリーンな環境で自動的にインストールし、すべての依存関係を含むバンドルされたzipファイルをダウンロードします。",
    
    packageConfiguration: "パッケージ設定",
    packageName: "パッケージ名",
    packageNamePlaceholder: "例：lodash, express, react",
    version: "バージョン（オプション）",
    versionPlaceholder: "例：^4.17.21, latest",
    addPackage: "パッケージを追加",
    installBundle: "インストールとバンドル",
    starting: "開始中...",
    selectedPackages: "選択されたパッケージ",
    noPackages: "パッケージなし",
    addAtLeastOne: "インストールするパッケージを少なくとも1つ追加してください。",
    invalidPackage: "無効なパッケージ",
    packageNameRequired: "パッケージ名が必要です。",
    duplicatePackage: "重複パッケージ",
    alreadyInList: "このパッケージは既にリストにあります。",
    
    installingPackages: "パッケージをインストール中",
    preparing: "準備中...",
    environmentCreated: "環境が正常に作成されました",
    projectInitialized: "プロジェクトが初期化されました",
    installingPackagesProgress: "パッケージをインストール中...",
    generatingBundle: "パッケージバンドルを生成中...",
    installationFailed: "インストールに失敗しました",
    failedJobCleanup: "この失敗したインストールは数秒後に自動的に削除されます。",
    
    installationComplete: "インストール完了！",
    bundleSummary: "バンドル概要",
    packagesInstalled: "インストールされたパッケージ",
    bundleSize: "バンドルサイズ",
    status: "ステータス",
    ready: "準備完了",
    installedPackages: "インストールされたパッケージ",
    installed: "インストール済み",
    downloadBundle: "バンドルをダウンロード (packages.zip)",
    copyDownloadLink: "ダウンロードリンクをコピー",
    viewContents: "内容を表示",
    hideContents: "内容を非表示",
    bundleContents: "バンドル内容",
    allDependencies: "... およびすべての依存関係",
    downloadInfo: "ダウンロード情報",
    downloadInfoText: "バンドルにはnode_modules、package.json、package-lock.jsonが含まれています。ダウンロードリンクは15分後に期限切れになり、ファイルは自動的に削除されます。",
    linkCopied: "リンクがコピーされました",
    linkCopiedDescription: "ダウンロードリンクがクリップボードにコピーされました。",
    copyFailed: "コピーに失敗しました",
    copyFailedDescription: "リンクをクリップボードにコピーできませんでした。",
    
    isolatedEnvironment: "分離された環境",
    isolatedEnvironmentDesc: "各インストールはクリーンで分離された環境で実行され、競合を防ぎます。",
    automaticBundling: "自動バンドル",
    automaticBundlingDesc: "すべての依存関係は便利なzipファイルに自動的にバンドルされます。",
    quickReliable: "高速で信頼性",
    quickReliableDesc: "リアルタイムの進行状況追跡による高速パッケージインストール。",
    
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    contactSupport: "サポートに連絡",
    
    theme: "テーマ",
    language: "言語",
    light: "ライト",
    dark: "ダーク",
    system: "システム"
  },
  
  ko: {
    appTitle: "패키지 설치 서비스",
    support: "지원",
    
    heroTitle: "NPM 패키지 설치 및 번들링",
    heroDescription: "npm 패키지를 지정하고, 깨끗한 환경에서 자동으로 설치하며, 모든 종속성이 포함된 번들 zip 파일을 다운로드하세요.",
    
    packageConfiguration: "패키지 구성",
    packageName: "패키지 이름",
    packageNamePlaceholder: "예: lodash, express, react",
    version: "버전 (선택사항)",
    versionPlaceholder: "예: ^4.17.21, latest",
    addPackage: "패키지 추가",
    installBundle: "설치 및 번들링",
    starting: "시작 중...",
    selectedPackages: "선택된 패키지",
    noPackages: "패키지 없음",
    addAtLeastOne: "설치할 패키지를 적어도 하나 추가해주세요.",
    invalidPackage: "잘못된 패키지",
    packageNameRequired: "패키지 이름이 필요합니다.",
    duplicatePackage: "중복 패키지",
    alreadyInList: "이 패키지는 이미 목록에 있습니다.",
    
    installingPackages: "패키지 설치 중",
    preparing: "준비 중...",
    environmentCreated: "환경이 성공적으로 생성되었습니다",
    projectInitialized: "프로젝트가 초기화되었습니다",
    installingPackagesProgress: "패키지 설치 중...",
    generatingBundle: "패키지 번들 생성 중...",
    installationFailed: "설치 실패",
    failedJobCleanup: "이 실패한 설치는 몇 초 후에 자동으로 제거됩니다.",
    
    installationComplete: "설치 완료!",
    bundleSummary: "번들 요약",
    packagesInstalled: "설치된 패키지",
    bundleSize: "번들 크기",
    status: "상태",
    ready: "준비됨",
    installedPackages: "설치된 패키지",
    installed: "설치됨",
    downloadBundle: "번들 다운로드 (packages.zip)",
    copyDownloadLink: "다운로드 링크 복사",
    viewContents: "내용 보기",
    hideContents: "내용 숨기기",
    bundleContents: "번들 내용",
    allDependencies: "... 및 모든 종속성",
    downloadInfo: "다운로드 정보",
    downloadInfoText: "번들에는 node_modules, package.json, package-lock.json이 포함됩니다. 다운로드 링크는 15분 후 만료되며 파일은 자동으로 삭제됩니다.",
    linkCopied: "링크 복사됨",
    linkCopiedDescription: "다운로드 링크가 클립보드에 복사되었습니다.",
    copyFailed: "복사 실패",
    copyFailedDescription: "링크를 클립보드에 복사할 수 없습니다.",
    
    isolatedEnvironment: "격리된 환경",
    isolatedEnvironmentDesc: "각 설치는 충돌을 방지하기 위해 깨끗하고 격리된 환경에서 실행됩니다.",
    automaticBundling: "자동 번들링",
    automaticBundlingDesc: "모든 종속성이 편리한 zip 파일로 자동으로 번들됩니다.",
    quickReliable: "빠르고 신뢰할 수 있음",
    quickReliableDesc: "실시간 진행률 추적으로 빠른 패키지 설치.",
    
    privacyPolicy: "개인정보 보호정책",
    termsOfService: "서비스 약관",
    contactSupport: "지원 문의",
    
    theme: "테마",
    language: "언어",
    light: "라이트",
    dark: "다크",
    system: "시스템"
  }
};

export function detectLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('ja')) return 'ja';
  if (browserLang.startsWith('ko')) return 'ko';
  
  return 'en'; // Default to English
}

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.en;
}

export const SUPPORTED_LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' }
];