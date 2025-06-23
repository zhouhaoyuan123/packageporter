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
  
  // Privacy Policy
  privacySection1Title: string;
  privacySection1Content: string;
  privacySection2Title: string;
  privacySection2Item1: string;
  privacySection2Item2: string;
  privacySection2Item3: string;
  privacySection3Title: string;
  privacySection3Content: string;
  privacySection4Title: string;
  privacySection4Content: string;
  privacySection5Title: string;
  privacySection5Content: string;
  
  // Terms of Service
  termsSection1Title: string;
  termsSection1Content: string;
  termsSection2Title: string;
  termsSection2Item1: string;
  termsSection2Item2: string;
  termsSection2Item3: string;
  termsSection2Item4: string;
  termsSection3Title: string;
  termsSection3Content: string;
  termsSection4Title: string;
  termsSection4Content: string;
  termsSection5Title: string;
  termsSection5Content: string;
  termsSection6Title: string;
  termsSection6Content: string;
  
  // Contact and Common
  contactTitle: string;
  contactContent: string;
  lastUpdated: string;
  lastUpdatedDate: string;
  
  // Theme and Language
  theme: string;
  language: string;
  light: string;
  dark: string;
  system: string;
  
  // 404 Page
  pageNotFound: string;
  pageNotFoundDescription: string;
  backToHome: string;
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
    
    privacySection1Title: "Information We Collect",
    privacySection1Content: "We collect minimal information necessary to provide our package installation service. This may include package names, versions, and installation metadata.",
    privacySection2Title: "How We Use Your Information",
    privacySection2Item1: "To process your package installation requests",
    privacySection2Item2: "To provide download links for your bundled packages",
    privacySection2Item3: "To improve our service quality and performance",
    privacySection3Title: "Data Storage and Security",
    privacySection3Content: "All installation data and generated bundles are automatically deleted after 15 minutes. We do not store personal information beyond what is necessary for service operation.",
    privacySection4Title: "Third-Party Services",
    privacySection4Content: "Our service interacts with the NPM registry to download packages. Please refer to NPM's privacy policy for information about their data practices.",
    privacySection5Title: "Changes to Privacy Policy",
    privacySection5Content: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.",
    
    termsSection1Title: "Acceptance of Terms",
    termsSection1Content: "By using this package installation service, you agree to be bound by these terms of service and our privacy policy.",
    termsSection2Title: "Service Description",
    termsSection2Item1: "Install NPM packages in isolated environments",
    termsSection2Item2: "Bundle packages with dependencies into downloadable archives",
    termsSection2Item3: "Provide temporary download links (15-minute expiration)",
    termsSection2Item4: "Automatically clean up temporary files and data",
    termsSection3Title: "User Responsibilities",
    termsSection3Content: "You are responsible for ensuring that the packages you request are legitimate and that you have the right to download and use them. You must not use this service for malicious purposes.",
    termsSection4Title: "Service Limitations",
    termsSection4Content: "This service is provided as-is without warranties. We may limit usage, modify features, or discontinue the service at any time without notice.",
    termsSection5Title: "Liability",
    termsSection5Content: "We are not liable for any damages resulting from the use of this service, including but not limited to data loss, security issues, or service interruptions.",
    termsSection6Title: "Modifications",
    termsSection6Content: "We reserve the right to modify these terms at any time. Continued use of the service after changes indicates acceptance of the new terms.",
    
    contactTitle: "Contact Information",
    contactContent: "If you have questions about this privacy policy or terms of service, please contact us at:",
    lastUpdated: "Last updated",
    lastUpdatedDate: "December 15, 2024",
    
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
    system: "System",
    
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist or has been moved.",
    backToHome: "Back to Home"
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
    
    privacySection1Title: "我们收集的信息",
    privacySection1Content: "我们收集提供包安装服务所必需的最少信息。这可能包括包名称、版本和安装元数据。",
    privacySection2Title: "我们如何使用您的信息",
    privacySection2Item1: "处理您的包安装请求",
    privacySection2Item2: "为您的捆绑包提供下载链接",
    privacySection2Item3: "改善我们的服务质量和性能",
    privacySection3Title: "数据存储和安全",
    privacySection3Content: "所有安装数据和生成的捆绑包在15分钟后自动删除。我们不会存储超出服务运营必需的个人信息。",
    privacySection4Title: "第三方服务",
    privacySection4Content: "我们的服务与NPM注册表交互以下载包。请参考NPM的隐私政策了解其数据实践信息。",
    privacySection5Title: "隐私政策变更",
    privacySection5Content: "我们可能会不时更新此隐私政策。任何变更将在此页面发布并更新修订日期。",
    
    termsSection1Title: "接受条款",
    termsSection1Content: "使用此包安装服务，即表示您同意受这些服务条款和我们的隐私政策约束。",
    termsSection2Title: "服务描述",
    termsSection2Item1: "在隔离环境中安装NPM包",
    termsSection2Item2: "将包与依赖项打包成可下载的存档",
    termsSection2Item3: "提供临时下载链接（15分钟过期）",
    termsSection2Item4: "自动清理临时文件和数据",
    termsSection3Title: "用户责任",
    termsSection3Content: "您有责任确保您请求的包是合法的，并且您有权下载和使用它们。您不得将此服务用于恶意目的。",
    termsSection4Title: "服务限制",
    termsSection4Content: "此服务按原样提供，不提供保证。我们可能随时限制使用、修改功能或停止服务，恕不另行通知。",
    termsSection5Title: "责任",
    termsSection5Content: "我们对使用此服务造成的任何损害不承担责任，包括但不限于数据丢失、安全问题或服务中断。",
    termsSection6Title: "修改",
    termsSection6Content: "我们保留随时修改这些条款的权利。在变更后继续使用服务表示接受新条款。",
    
    contactTitle: "联系信息",
    contactContent: "如果您对此隐私政策或服务条款有疑问，请联系我们：",
    lastUpdated: "最后更新",
    lastUpdatedDate: "2024年12月15日",
    
    theme: "主题",
    language: "语言",
    light: "浅色",
    dark: "深色",
    system: "系统",
    
    pageNotFound: "页面未找到",
    pageNotFoundDescription: "您要查找的页面不存在或已被移动。",
    backToHome: "返回首页"
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
    
    privacySection1Title: "Información que Recopilamos",
    privacySection1Content: "Recopilamos la información mínima necesaria para proporcionar nuestro servicio de instalación de paquetes. Esto puede incluir nombres de paquetes, versiones y metadatos de instalación.",
    privacySection2Title: "Cómo Usamos Su Información",
    privacySection2Item1: "Para procesar sus solicitudes de instalación de paquetes",
    privacySection2Item2: "Para proporcionar enlaces de descarga para sus paquetes empaquetados",
    privacySection2Item3: "Para mejorar la calidad y rendimiento de nuestro servicio",
    privacySection3Title: "Almacenamiento y Seguridad de Datos",
    privacySection3Content: "Todos los datos de instalación y paquetes generados se eliminan automáticamente después de 15 minutos. No almacenamos información personal más allá de lo necesario para la operación del servicio.",
    privacySection4Title: "Servicios de Terceros",
    privacySection4Content: "Nuestro servicio interactúa con el registro NPM para descargar paquetes. Consulte la política de privacidad de NPM para obtener información sobre sus prácticas de datos.",
    privacySection5Title: "Cambios en la Política de Privacidad",
    privacySection5Content: "Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada.",
    
    termsSection1Title: "Aceptación de Términos",
    termsSection1Content: "Al usar este servicio de instalación de paquetes, acepta estar sujeto a estos términos de servicio y nuestra política de privacidad.",
    termsSection2Title: "Descripción del Servicio",
    termsSection2Item1: "Instalar paquetes NPM en entornos aislados",
    termsSection2Item2: "Empaquetar paquetes con dependencias en archivos descargables",
    termsSection2Item3: "Proporcionar enlaces de descarga temporales (expiración de 15 minutos)",
    termsSection2Item4: "Limpiar automáticamente archivos y datos temporales",
    termsSection3Title: "Responsabilidades del Usuario",
    termsSection3Content: "Usted es responsable de asegurar que los paquetes que solicita sean legítimos y que tenga derecho a descargarlos y usarlos. No debe usar este servicio para propósitos maliciosos.",
    termsSection4Title: "Limitaciones del Servicio",
    termsSection4Content: "Este servicio se proporciona tal como está, sin garantías. Podemos limitar el uso, modificar características o discontinuar el servicio en cualquier momento sin aviso.",
    termsSection5Title: "Responsabilidad",
    termsSection5Content: "No somos responsables de ningún daño resultante del uso de este servicio, incluyendo pero no limitado a pérdida de datos, problemas de seguridad o interrupciones del servicio.",
    termsSection6Title: "Modificaciones",
    termsSection6Content: "Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del servicio después de los cambios indica la aceptación de los nuevos términos.",
    
    contactTitle: "Información de Contacto",
    contactContent: "Si tiene preguntas sobre esta política de privacidad o términos de servicio, contáctenos en:",
    lastUpdated: "Última actualización",
    lastUpdatedDate: "15 de diciembre de 2024",
    
    theme: "Tema",
    language: "Idioma",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    
    pageNotFound: "Página no encontrada",
    pageNotFoundDescription: "La página que buscas no existe o ha sido movida.",
    backToHome: "Volver al inicio"
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
    
    privacySection1Title: "Informations que Nous Collectons",
    privacySection1Content: "Nous collectons les informations minimales nécessaires pour fournir notre service d'installation de paquets. Cela peut inclure les noms de paquets, les versions et les métadonnées d'installation.",
    privacySection2Title: "Comment Nous Utilisons Vos Informations",
    privacySection2Item1: "Pour traiter vos demandes d'installation de paquets",
    privacySection2Item2: "Pour fournir des liens de téléchargement pour vos paquets groupés",
    privacySection2Item3: "Pour améliorer la qualité et les performances de notre service",
    privacySection3Title: "Stockage et Sécurité des Données",
    privacySection3Content: "Toutes les données d'installation et les paquets générés sont automatiquement supprimés après 15 minutes. Nous ne stockons pas d'informations personnelles au-delà de ce qui est nécessaire pour le fonctionnement du service.",
    privacySection4Title: "Services Tiers",
    privacySection4Content: "Notre service interagit avec le registre NPM pour télécharger des paquets. Veuillez consulter la politique de confidentialité de NPM pour des informations sur leurs pratiques de données.",
    privacySection5Title: "Modifications de la Politique de Confidentialité",
    privacySection5Content: "Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Tout changement sera publié sur cette page avec une date de révision mise à jour.",
    
    termsSection1Title: "Acceptation des Conditions",
    termsSection1Content: "En utilisant ce service d'installation de paquets, vous acceptez d'être lié par ces conditions de service et notre politique de confidentialité.",
    termsSection2Title: "Description du Service",
    termsSection2Item1: "Installer des paquets NPM dans des environnements isolés",
    termsSection2Item2: "Grouper des paquets avec des dépendances en archives téléchargeables",
    termsSection2Item3: "Fournir des liens de téléchargement temporaires (expiration de 15 minutes)",
    termsSection2Item4: "Nettoyer automatiquement les fichiers et données temporaires",
    termsSection3Title: "Responsabilités de l'Utilisateur",
    termsSection3Content: "Vous êtes responsable de vous assurer que les paquets que vous demandez sont légitimes et que vous avez le droit de les télécharger et de les utiliser. Vous ne devez pas utiliser ce service à des fins malveillantes.",
    termsSection4Title: "Limitations du Service",
    termsSection4Content: "Ce service est fourni tel quel, sans garanties. Nous pouvons limiter l'utilisation, modifier les fonctionnalités ou discontinuer le service à tout moment sans préavis.",
    termsSection5Title: "Responsabilité",
    termsSection5Content: "Nous ne sommes pas responsables des dommages résultant de l'utilisation de ce service, y compris mais sans s'y limiter la perte de données, les problèmes de sécurité ou les interruptions de service.",
    termsSection6Title: "Modifications",
    termsSection6Content: "Nous nous réservons le droit de modifier ces conditions à tout moment. L'utilisation continue du service après les changements indique l'acceptation des nouvelles conditions.",
    
    contactTitle: "Informations de Contact",
    contactContent: "Si vous avez des questions sur cette politique de confidentialité ou ces conditions de service, veuillez nous contacter à :",
    lastUpdated: "Dernière mise à jour",
    lastUpdatedDate: "15 décembre 2024",
    
    theme: "Thème",
    language: "Langue",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    
    pageNotFound: "Page non trouvée",
    pageNotFoundDescription: "La page que vous recherchez n'existe pas ou a été déplacée.",
    backToHome: "Retour à l'accueil"
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
    
    privacySection1Title: "Informationen, die Wir Sammeln",
    privacySection1Content: "Wir sammeln nur die minimalen Informationen, die zur Bereitstellung unseres Paketinstallationsdienstes erforderlich sind. Dies kann Paketnamen, Versionen und Installationsmetadaten umfassen.",
    privacySection2Title: "Wie Wir Ihre Informationen Verwenden",
    privacySection2Item1: "Zur Bearbeitung Ihrer Paketinstallationsanfragen",
    privacySection2Item2: "Zur Bereitstellung von Download-Links für Ihre gebündelten Pakete",
    privacySection2Item3: "Zur Verbesserung der Qualität und Leistung unseres Dienstes",
    privacySection3Title: "Datenspeicherung und Sicherheit",
    privacySection3Content: "Alle Installationsdaten und generierten Bundles werden nach 15 Minuten automatisch gelöscht. Wir speichern keine persönlichen Informationen über das hinaus, was für den Servicebetrieb erforderlich ist.",
    privacySection4Title: "Drittanbieter-Services",
    privacySection4Content: "Unser Service interagiert mit der NPM-Registry zum Herunterladen von Paketen. Bitte beachten Sie NPMs Datenschutzrichtlinie für Informationen über deren Datenpraktiken.",
    privacySection5Title: "Änderungen der Datenschutzrichtlinie",
    privacySection5Content: "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht.",
    
    termsSection1Title: "Annahme der Bedingungen",
    termsSection1Content: "Durch die Nutzung dieses Paketinstallationsdienstes stimmen Sie zu, an diese Nutzungsbedingungen und unsere Datenschutzrichtlinie gebunden zu sein.",
    termsSection2Title: "Servicebeschreibung",
    termsSection2Item1: "NPM-Pakete in isolierten Umgebungen installieren",
    termsSection2Item2: "Pakete mit Abhängigkeiten in herunterladbare Archive bündeln",
    termsSection2Item3: "Temporäre Download-Links bereitstellen (15-Minuten-Ablauf)",
    termsSection2Item4: "Automatische Bereinigung temporärer Dateien und Daten",
    termsSection3Title: "Benutzerverantwortlichkeiten",
    termsSection3Content: "Sie sind dafür verantwortlich sicherzustellen, dass die von Ihnen angeforderten Pakete legitim sind und dass Sie das Recht haben, sie herunterzuladen und zu verwenden. Sie dürfen diesen Service nicht für böswillige Zwecke nutzen.",
    termsSection4Title: "Service-Einschränkungen",
    termsSection4Content: "Dieser Service wird wie besehen ohne Garantien bereitgestellt. Wir können die Nutzung begrenzen, Funktionen ändern oder den Service jederzeit ohne Ankündigung einstellen.",
    termsSection5Title: "Haftung",
    termsSection5Content: "Wir haften nicht für Schäden, die durch die Nutzung dieses Services entstehen, einschließlich aber nicht beschränkt auf Datenverlust, Sicherheitsprobleme oder Service-Unterbrechungen.",
    termsSection6Title: "Änderungen",
    termsSection6Content: "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Die fortgesetzte Nutzung des Services nach Änderungen zeigt die Annahme der neuen Bedingungen an.",
    
    contactTitle: "Kontaktinformationen",
    contactContent: "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder den Nutzungsbedingungen haben, kontaktieren Sie uns unter:",
    lastUpdated: "Zuletzt aktualisiert",
    lastUpdatedDate: "15. Dezember 2024",
    
    theme: "Theme",
    language: "Sprache",
    light: "Hell",
    dark: "Dunkel",
    system: "System",
    
    pageNotFound: "Seite nicht gefunden",
    pageNotFoundDescription: "Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.",
    backToHome: "Zurück zur Startseite"
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
    
    privacySection1Title: "収集する情報",
    privacySection1Content: "パッケージインストールサービスの提供に必要な最小限の情報を収集します。これにはパッケージ名、バージョン、インストールメタデータが含まれる場合があります。",
    privacySection2Title: "情報の使用方法",
    privacySection2Item1: "パッケージインストールリクエストの処理",
    privacySection2Item2: "バンドルされたパッケージのダウンロードリンクの提供",
    privacySection2Item3: "サービス品質とパフォーマンスの向上",
    privacySection3Title: "データストレージとセキュリティ",
    privacySection3Content: "すべてのインストールデータと生成されたバンドルは15分後に自動的に削除されます。サービス運営に必要な範囲を超えて個人情報を保存することはありません。",
    privacySection4Title: "サードパーティサービス",
    privacySection4Content: "当サービスはパッケージダウンロードのためにNPMレジストリと連携します。データ取り扱いについてはNPMのプライバシーポリシーをご参照ください。",
    privacySection5Title: "プライバシーポリシーの変更",
    privacySection5Content: "このプライバシーポリシーは随時更新される場合があります。変更はこのページに更新日付とともに掲載されます。",
    
    termsSection1Title: "利用規約の同意",
    termsSection1Content: "このパッケージインストールサービスを使用することで、これらの利用規約と当社のプライバシーポリシーに同意したものとみなされます。",
    termsSection2Title: "サービス内容",
    termsSection2Item1: "分離された環境でのNPMパッケージのインストール",
    termsSection2Item2: "依存関係を含むパッケージのダウンロード可能なアーカイブへのバンドル",
    termsSection2Item3: "一時的なダウンロードリンクの提供（15分で期限切れ）",
    termsSection2Item4: "一時ファイルとデータの自動クリーンアップ",
    termsSection3Title: "ユーザーの責任",
    termsSection3Content: "リクエストするパッケージが正当であり、ダウンロードと使用の権利があることを確認する責任があります。悪意のある目的でのサービス使用は禁止されています。",
    termsSection4Title: "サービスの制限",
    termsSection4Content: "このサービスは現状のまま、保証なしで提供されます。使用制限、機能の変更、サービスの停止を予告なく行う場合があります。",
    termsSection5Title: "責任",
    termsSection5Content: "データ損失、セキュリティ問題、サービス中断を含むがこれに限定されない、このサービスの使用により生じる損害について責任を負いません。",
    termsSection6Title: "変更",
    termsSection6Content: "これらの利用規約をいつでも変更する権利を留保します。変更後のサービス継続使用は新しい利用規約への同意を示します。",
    
    contactTitle: "連絡先情報",
    contactContent: "このプライバシーポリシーまたは利用規約についてご質問がある場合は、以下までお問い合わせください：",
    lastUpdated: "最終更新",
    lastUpdatedDate: "2024年12月15日",
    
    theme: "テーマ",
    language: "言語",
    light: "ライト",
    dark: "ダーク",
    system: "システム",
    
    pageNotFound: "ページが見つかりません",
    pageNotFoundDescription: "お探しのページは存在しないか、移動されました。",
    backToHome: "ホームに戻る"
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
    
    privacySection1Title: "수집하는 정보",
    privacySection1Content: "패키지 설치 서비스 제공에 필요한 최소한의 정보를 수집합니다. 여기에는 패키지 이름, 버전, 설치 메타데이터가 포함될 수 있습니다.",
    privacySection2Title: "정보 사용 방법",
    privacySection2Item1: "패키지 설치 요청 처리",
    privacySection2Item2: "번들된 패키지의 다운로드 링크 제공",
    privacySection2Item3: "서비스 품질 및 성능 개선",
    privacySection3Title: "데이터 저장 및 보안",
    privacySection3Content: "모든 설치 데이터와 생성된 번들은 15분 후 자동으로 삭제됩니다. 서비스 운영에 필요한 범위를 넘어서는 개인정보는 저장하지 않습니다.",
    privacySection4Title: "제3자 서비스",
    privacySection4Content: "저희 서비스는 패키지 다운로드를 위해 NPM 레지스트리와 상호작용합니다. 데이터 처리에 대한 정보는 NPM의 개인정보 보호정책을 참조하세요.",
    privacySection5Title: "개인정보 보호정책 변경",
    privacySection5Content: "이 개인정보 보호정책은 수시로 업데이트될 수 있습니다. 변경사항은 수정된 날짜와 함께 이 페이지에 게시됩니다.",
    
    termsSection1Title: "약관 동의",
    termsSection1Content: "이 패키지 설치 서비스를 사용함으로써 이 서비스 약관과 개인정보 보호정책에 구속되는 것에 동의합니다.",
    termsSection2Title: "서비스 설명",
    termsSection2Item1: "격리된 환경에서 NPM 패키지 설치",
    termsSection2Item2: "의존성과 함께 패키지를 다운로드 가능한 아카이브로 번들링",
    termsSection2Item3: "임시 다운로드 링크 제공 (15분 만료)",
    termsSection2Item4: "임시 파일 및 데이터 자동 정리",
    termsSection3Title: "사용자 책임",
    termsSection3Content: "요청하는 패키지가 합법적이며 다운로드 및 사용할 권리가 있음을 보장할 책임이 있습니다. 악의적인 목적으로 이 서비스를 사용해서는 안 됩니다.",
    termsSection4Title: "서비스 제한",
    termsSection4Content: "이 서비스는 보증 없이 현재 상태 그대로 제공됩니다. 사전 통지 없이 언제든지 사용을 제한하거나 기능을 수정하거나 서비스를 중단할 수 있습니다.",
    termsSection5Title: "책임",
    termsSection5Content: "데이터 손실, 보안 문제, 서비스 중단을 포함하되 이에 국한되지 않는 이 서비스 사용으로 인한 손해에 대해 책임지지 않습니다.",
    termsSection6Title: "수정",
    termsSection6Content: "언제든지 이 약관을 수정할 권리를 보유합니다. 변경 후 서비스를 계속 사용하면 새로운 약관에 동의하는 것으로 간주됩니다.",
    
    contactTitle: "연락처 정보",
    contactContent: "이 개인정보 보호정책이나 서비스 약관에 대해 질문이 있으시면 다음으로 연락해 주세요:",
    lastUpdated: "최종 업데이트",
    lastUpdatedDate: "2024년 12월 15일",
    
    theme: "테마",
    language: "언어",
    light: "라이트",
    dark: "다크",
    system: "시스템",
    
    pageNotFound: "페이지를 찾을 수 없습니다",
    pageNotFoundDescription: "찾으시는 페이지가 존재하지 않거나 이동되었습니다.",
    backToHome: "홈으로 돌아가기"
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