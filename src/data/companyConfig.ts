export type PageId = 'home' | 'about' | 'services' | 'solutions' | 'projects' | 'contact';
export type SectionId = 'hero' | 'about' | 'services' | 'why-us' | 'projects' | 'process' | 'tech' | 'contact';
export type LanguageCode = 'en' | 'fr';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  label: string;
  regionNote: string;
}

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'en',
    shortLabel: 'EN',
    label: 'English',
    regionNote: 'Ghana & Global',
  },
  {
    code: 'fr',
    shortLabel: 'FR',
    label: 'Français',
    regionNote: 'Afrique de l’Ouest',
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  callout?: string;
  summary: string;
  description: string;
  highlights: string[];
  capabilities: string[];
  deliverables: string[];
  iconName: 'code' | 'cloud' | 'server' | 'network' | 'shield' | 'briefcase';
}

export interface ProjectItem {
  id: string;
  title: string;
  category:
    | 'Full-Stack SaaS'
    | 'Cloud & DevOps'
    | 'IT Infrastructure'
    | 'Networking'
    | 'CCTV & Security';
  shortDescription: string;
  fullOverview: string;
  architectureHighlights: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  isDemo: true;
  demoScopeLabel: string;
}

export interface TechCategory {
  category: 'Cloud' | 'DevOps' | 'Systems' | 'Networking' | 'Development' | 'Security';
  summary: string;
  items: {
    name: string;
    role: string;
    code: string;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

/**
 * Editable Company Configuration
 * Update company name, contact details, email, WhatsApp number, and social links here.
 */
export const COMPANY_INFO = {
  name: 'SkyMax Technology',
  shortMark: 'ST',
  tagline: 'Business IT, Cloud Hosting & Full-Stack SaaS Software',
  footerIntro:
    'Helping companies, institutions, and startups simplify operations with full-stack SaaS web applications, cloud hosting, office networks, and security systems.',
  location: 'Ghana',
  locationDetail: 'Serving organisations across Ghana and remotely worldwide',
  whatsappDisplay: '0545452076',
  whatsappInternational: '+233 54 545 2076',
  whatsappLink: 'https://wa.me/233545452076',
  emailPlaceholder: 'info@skymaxtechnology.example',
  businessHours: 'Monday – Saturday · 08:00 – 18:00 GMT',
  socialLinks: [
    {label: 'LinkedIn', href: 'https://www.linkedin.com', handle: 'SkyMax Technology'},
    {label: 'X (Twitter)', href: 'https://x.com', handle: '@skymaxtechnology'},
    {label: 'GitHub', href: 'https://github.com', handle: 'skymax-technology'},
    {label: 'Facebook', href: 'https://www.facebook.com', handle: 'SkyMax Technology'},
  ],
  copyrightYear: new Date().getFullYear(),
} as const;

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_cloud_backdrop_1795453141832.jpg',
  alt: 'Cloud technology background with illuminated blue and cyan network data streams across midnight navy',
};

export const ABOUT_MEDIA = {
  image: '/src/assets/images/about_tech_workspace_1795449872355.jpg',
  alt: 'Modern systems engineering workspace with engineers reviewing network layout and SaaS application architecture',
};

export const TRUST_PILLARS = [
  {
    index: '01',
    title: 'One Accountable Partner',
    detail: 'SaaS software, cloud hosting, office networks, and security handled by one team.',
  },
  {
    index: '02',
    title: 'Built-In Security',
    detail: 'Protected networks, encrypted data access, and clear staff permissions.',
  },
  {
    index: '03',
    title: 'Ready to Scale',
    detail: 'Flexible systems designed for a single office or multi-location growth.',
  },
  {
    index: '04',
    title: 'Clear Support & Guides',
    detail: 'Smooth handover, plain-English guides, and reliable ongoing technical help.',
  },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'saas-applications',
    number: '01',
    title: 'Full-Stack SaaS Web Applications',
    summary:
      'Complete cloud software platforms—from client portals and billing to inventory, HR, CRM, and ERP systems.',
    description:
      'End-to-end SaaS web applications built for multi-user teams, customer portals, subscription billing, and live business reporting.',
    highlights: [
      'Full-stack SaaS web applications',
      'Multi-tenant client & team portals',
      'Subscription billing & invoicing',
      'CRM, ERP, HR & inventory platforms',
    ],
    capabilities: [
      'Full-stack SaaS web applications',
      'Multi-tenant client & team portals',
      'Subscription & invoice management',
      'Inventory & operations platforms',
      'CRM & ERP business systems',
      'HR, payroll & attendance portals',
      'Hospital & clinic management systems',
      'School & student management portals',
      'Multi-branch reporting dashboards',
      'IT asset tracking systems',
      'REST APIs & third-party integrations',
    ],
    deliverables: [
      'Modern, mobile-friendly web app for staff and clients',
      'Multi-tenant accounts, role permissions, and secure cloud database',
      'Live cloud launch, daily backups, and team training',
    ],
    iconName: 'code',
  },
  {
    id: 'cloud-computing',
    number: '02',
    title: 'Cloud Hosting & Deployment',
    callout: 'Move Your Business to the Cloud.',
    summary:
      'AWS, Azure, and Google Cloud setup, server deployment, automated updates, and reliable backup recovery.',
    description:
      'Safe cloud migrations, server setup, automated software deployments, and disaster recovery engineered to keep your business online.',
    highlights: [
      'AWS, Microsoft Azure & Google Cloud',
      'Windows & Linux cloud servers',
      'Docker, Kubernetes & automated releases',
      'Cloud security, monitoring & backups',
    ],
    capabilities: [
      'AWS cloud hosting',
      'Microsoft Azure services',
      'Google Cloud Platform',
      'Cloud server provisioning',
      'Windows Server & Linux deployment',
      'Cloud migration',
      'SaaS application deployment',
      'Docker containerisation',
      'Automated CI/CD release pipelines',
      'Jenkins & GitHub Actions',
      'Kubernetes scaling & clustering',
      'Cloud security & uptime monitoring',
      'Automated backups & disaster recovery',
    ],
    deliverables: [
      'Secure cloud servers, private networking, and SSL certificates',
      'Automated testing and zero-downtime deployment pipelines',
      'Scheduled off-site backups and recovery testing',
    ],
    iconName: 'cloud',
  },
  {
    id: 'system-administration',
    number: '03',
    title: 'System Administration & IT Support',
    summary:
      'Windows and Linux servers, Microsoft 365, staff login control, server backups, and fast IT support.',
    description:
      'Centralised management for office servers, staff user accounts, shared company files, and Microsoft 365 with responsive remote or on-site help.',
    highlights: [
      'Windows & Linux server management',
      'Active Directory, Group Policy & M365',
      'Shared file servers, DNS & DHCP',
      'Hyper-V virtual servers & IT support',
    ],
    capabilities: [
      'Windows Server administration',
      'Linux server administration',
      'Active Directory & Group Policy',
      'Microsoft 365 administration',
      'Staff account & access control',
      'DNS & DHCP setup',
      'Company file servers & DFS',
      'Server virtualisation (Hyper-V)',
      'System backup & recovery',
      'IT troubleshooting',
      'Remote & on-site IT support',
      'Ongoing IT maintenance',
    ],
    deliverables: [
      'Central staff login and security policy setup',
      'Consolidated virtual servers with verified daily backups',
      'Fast remote troubleshooting and routine system care',
    ],
    iconName: 'server',
  },
  {
    id: 'networking',
    number: '04',
    title: 'Business Networking & Wi-Fi',
    summary:
      'Office network design, MikroTik routers, UniFi business Wi-Fi, separated guest networks, firewalls, and VPNs.',
    description:
      'Neat structured cabling, reliable office-wide Wi-Fi, separated staff and guest networks, and secure VPN links between offices.',
    highlights: [
      'Office network design & cabling',
      'MikroTik routing & UniFi Wi-Fi',
      'Building-to-building wireless links',
      'Firewalls & secure office VPNs',
    ],
    capabilities: [
      'Business network design & setup',
      'Office LAN & WAN deployment',
      'MikroTik router configuration',
      'Ubiquiti & UniFi business Wi-Fi',
      'Point-to-point wireless links',
      'Separated networks (VLANs)',
      'Business firewall setup',
      'Site-to-site & remote VPNs',
      'Network security hardening',
      'Wi-Fi coverage optimisation',
      'Network troubleshooting',
      'Structured network cabling',
    ],
    deliverables: [
      'Labelled cabling and tidy server rack installation',
      'Separated networks for staff, guests, phones, and cameras',
      'Configured firewall rules and secure remote VPN access',
    ],
    iconName: 'network',
  },
  {
    id: 'cctv-security',
    number: '05',
    title: 'CCTV & Physical Security',
    summary:
      'Hikvision and Dahua HD cameras, NVR recording, phone viewing, biometric attendance, and door access control.',
    description:
      'Clear HD security cameras for offices and commercial sites, biometric staff clock-in, and smart door access with secure mobile viewing.',
    highlights: [
      'Hikvision & Dahua IP cameras',
      'NVR recording & remote viewing',
      'Biometric attendance & door access',
      'Ongoing camera maintenance',
    ],
    capabilities: [
      'IP CCTV camera installation',
      'Hikvision camera systems',
      'Dahua surveillance systems',
      'NVR & DVR setup',
      'Remote phone & desktop viewing',
      'Biometric staff attendance systems',
      'Smart door access control',
      'Surveillance system maintenance',
      'Office & warehouse security setups',
    ],
    deliverables: [
      'Site coverage plan and neat PoE camera installation',
      'Reliable NVR video storage and encrypted phone viewing',
      'Biometric attendance and controlled door entry setup',
    ],
    iconName: 'shield',
  },
  {
    id: 'it-consulting',
    number: '06',
    title: 'IT Consulting & Managed Services',
    summary:
      'IT reviews, technology planning, hardware buying advice, security checks, and ongoing technical support.',
    description:
      'Honest assessments of your current IT setup, smart purchasing advice, clear documentation, and proactive ongoing care.',
    highlights: [
      'IT & security health checks',
      'Technology planning & network audits',
      'Hardware & software buying advice',
      'Documentation & monthly IT support',
    ],
    capabilities: [
      'IT setup assessments',
      'Technology consulting',
      'IT strategy & planning',
      'IT asset management',
      'Hardware & software buying guidance',
      'Scheduled business IT maintenance',
      'Security risk reviews',
      'Network performance audits',
      'Clear system documentation',
      'Ongoing technical support',
    ],
    deliverables: [
      'Practical IT and security review report',
      'Right-sized hardware and licensing recommendations',
      'Up-to-date network maps and staff support guides',
    ],
    iconName: 'briefcase',
  },
];

export const SOLUTIONS = [
  {
    index: '01',
    sector: 'Growing & Multi-Office Firms',
    title: 'Full-Stack SaaS Platform & Connected Offices',
    description:
      'Keep teams across every location aligned with a shared SaaS operations portal, secure office VPNs, strong Wi-Fi, and remote CCTV.',
    includedServices: ['SaaS Web App', 'Office Networking', 'CCTV Security'],
  },
  {
    index: '02',
    sector: 'Healthcare & Education',
    title: 'Clinic, School & Campus Systems',
    description:
      'Patient, student, and school SaaS portals backed by reliable campus networks, staff login control, and biometric door security.',
    includedServices: ['SaaS Portals', 'Staff Access Control', 'Biometrics'],
  },
  {
    index: '03',
    sector: 'Startups & SaaS Products',
    title: 'Scalable SaaS Launch & Cloud Automation',
    description:
      'Build and launch multi-tenant SaaS products on AWS, Azure, or Google Cloud with automated updates and daily backups.',
    includedServices: ['Full-Stack SaaS', 'Cloud Hosting', 'Automated Releases'],
  },
  {
    index: '04',
    sector: 'Corporate Offices',
    title: 'Modern Office IT & Ongoing Support',
    description:
      'Upgrade office operations with managed servers, Microsoft 365, separated staff and guest Wi-Fi, and dependable IT support.',
    includedServices: ['System Admin', 'Microsoft 365', 'IT Consulting'],
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'All-In-One IT Partner',
    description: 'SaaS software, cloud hosting, servers, office networks, and CCTV handled by one team.',
  },
  {
    title: 'Focused On Business Goals',
    description: 'Practical technology chosen to save time, simplify daily work, and support growth.',
  },
  {
    title: 'Reliable Cloud Platforms',
    description: 'Proven cloud tools and automated updates built to keep your systems online.',
  },
  {
    title: 'Secure & Ready To Grow',
    description: 'Protected networks, controlled user permissions, and SaaS platforms that scale cleanly.',
  },
  {
    title: 'Clear, Friendly Support',
    description: 'Fast remote and on-site help explained in plain language without technical jargon.',
  },
  {
    title: 'Built Around Your Workflow',
    description: 'Systems tailored to your team size, office layout, and day-to-day operations.',
  },
  {
    title: 'Smart Cost Control',
    description: 'Right-sized hardware and software licences that help you avoid unnecessary spend.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'Full documentation and dependable support well after launch day.',
  },
] as const;

export const ABOUT_DATA = {
  headline: 'Technology That Works For Your Business.',
  lead: 'SkyMax Technology helps growing companies, startups, and institutions modernise daily work with full-stack SaaS web applications, cloud hosting, office networks, and security systems.',
  body: 'Instead of managing separate contractors for software, servers, cabling, and security cameras, you get one accountable team that plans, builds, and supports your entire setup.',
  mission:
    'To design, launch, and support dependable SaaS software, cloud systems, and business networks that help organisations work faster and grow safely.',
  vision:
    'To be a trusted long-term technology partner known for honest advice, clean workmanship, and everyday reliability.',
  approach:
    'We review your needs honestly, recommend the right-sized setup, test everything before launch, and stay available to support your team.',
  values: [
    {
      name: 'Reliability',
      detail: 'Systems built for steady, dependable daily performance.',
    },
    {
      name: 'Practical Innovation',
      detail: 'Modern SaaS and cloud tools used where they save real time and money.',
    },
    {
      name: 'Security First',
      detail: 'Controlled staff access, protected networks, and regular backups.',
    },
    {
      name: 'Professional Delivery',
      detail: 'Clean installations, clear timelines, and written documentation.',
    },
    {
      name: 'Continuous Improvement',
      detail: 'Regular updates and improvements as your business grows.',
    },
  ],
} as const;

export const TECH_EXPERTISE: TechCategory[] = [
  {
    category: 'Cloud',
    summary: 'Cloud hosting, migrations, and automated backups.',
    items: [
      {name: 'AWS', role: 'Cloud Servers, Storage & Databases', code: 'AWS'},
      {name: 'Microsoft Azure', role: 'Business Cloud & Microsoft Identity', code: 'AZR'},
      {name: 'Google Cloud', role: 'Scalable App Hosting & Storage', code: 'GCP'},
    ],
  },
  {
    category: 'DevOps',
    summary: 'Automated deployments, containers, and server setup.',
    items: [
      {name: 'Docker', role: 'Portable Application Packaging', code: 'DOC'},
      {name: 'Kubernetes', role: 'Auto-Scaling Cloud Containers', code: 'K8S'},
      {name: 'Jenkins', role: 'Automated Build & Test Pipelines', code: 'JNK'},
      {name: 'GitHub Actions', role: 'Zero-Downtime Code Releases', code: 'GHA'},
      {name: 'Terraform', role: 'Repeatable Cloud Setup', code: 'TRF'},
      {name: 'Ansible', role: 'Automated Server Configuration', code: 'ANS'},
    ],
  },
  {
    category: 'Systems',
    summary: 'Staff access governance, virtual servers, and server care.',
    items: [
      {name: 'Windows Server', role: 'Company Logins, Shared Files & Roles', code: 'WIN'},
      {name: 'Linux', role: 'Reliable Ubuntu & Debian Cloud Hosts', code: 'LNX'},
      {name: 'Active Directory', role: 'Central Staff Accounts & Policies', code: 'AD'},
      {name: 'Hyper-V', role: 'Virtual Server Consolidation', code: 'HYP'},
    ],
  },
  {
    category: 'Networking',
    summary: 'Office routing, business Wi-Fi, separated networks, and VPNs.',
    items: [
      {name: 'MikroTik', role: 'Internet Routing & Dual-ISP Failover', code: 'MTK'},
      {name: 'Ubiquiti', role: 'Business Switches & Wireless Links', code: 'UBQ'},
      {name: 'UniFi', role: 'Multi-Floor Office Wi-Fi Management', code: 'UFI'},
      {name: 'TCP/IP', role: 'Network Design, VLANs, DNS & DHCP', code: 'NET'},
      {name: 'VPN', role: 'Encrypted Remote & Branch Connections', code: 'VPN'},
    ],
  },
  {
    category: 'Development',
    summary: 'Full-stack SaaS interfaces, APIs, and cloud databases.',
    items: [
      {name: 'React', role: 'Fast SaaS Web Interfaces', code: 'RCT'},
      {name: 'Node.js', role: 'Backend APIs & Business Logic', code: 'NOD'},
      {name: 'JavaScript', role: 'Full-Stack Web Engineering', code: 'JS'},
      {name: 'Firebase', role: 'User Login, Hosting & App Services', code: 'FB'},
      {name: 'Firestore', role: 'Real-Time Cloud Data Storage', code: 'FST'},
    ],
  },
  {
    category: 'Security',
    summary: 'Firewalls, HD security cameras, recording, and door access.',
    items: [
      {name: 'Hikvision', role: 'HD Cameras, Recorders & Access Control', code: 'HIK'},
      {name: 'Dahua', role: 'Business Surveillance & Biometrics', code: 'DAH'},
      {name: 'CCTV', role: 'PoE Camera Setup & Remote Viewing', code: 'CAM'},
      {name: 'Firewalls', role: 'Network Protection & Traffic Control', code: 'FWL'},
    ],
  },
];

export const DEMO_PROJECTS: ProjectItem[] = [
  {
    id: 'demo-saas-platform',
    title: 'Full-Stack SaaS Operations & Client Platform',
    category: 'Full-Stack SaaS',
    shortDescription:
      'Sample SaaS web application unifying multi-tenant client accounts, team workflows, invoicing, and live dashboards.',
    fullOverview:
      'A sample full-stack SaaS platform showing how businesses and software startups manage multiple client workspaces, automate recurring billing, and track real-time operations in one browser app.',
    architectureHighlights: [
      'Multi-tenant workspace accounts with strict data separation',
      'Role-based access for admins, managers, staff, and clients',
      'Subscription billing, automated invoices, and live analytics',
      'Encrypted cloud database with automated daily backups',
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Firestore'],
    image: '/src/assets/images/project_web_platform_1795449872789.jpg',
    imageAlt: 'Sample full-stack SaaS web application dashboard displayed on desktop and laptop screens',
    isDemo: true,
    demoScopeLabel: 'Sample Project · Full-Stack SaaS Web Application',
  },
  {
    id: 'demo-cloud-cicd',
    title: 'Automated Cloud Hosting & Release Setup',
    category: 'Cloud & DevOps',
    shortDescription:
      'Sample cloud deployment setup using Docker, Kubernetes, GitHub Actions, and automated off-site backups.',
    fullOverview:
      'A sample cloud hosting setup illustrating zero-downtime software updates, automated server setup, and health monitoring across AWS and Linux.',
    architectureHighlights: [
      'Dockerised SaaS services scaled smoothly with Kubernetes',
      'Automated testing and publishing via GitHub Actions & Jenkins',
      'Repeatable cloud setup built with Terraform and Ansible',
      'Automated off-site backups, SSL security, and uptime alerts',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Linux'],
    image: '/src/assets/images/project_cloud_devops_1795449872144.jpg',
    imageAlt: 'Sample cloud server rack blades and structured fiber optic cabling',
    isDemo: true,
    demoScopeLabel: 'Sample Project · Cloud Hosting Blueprint',
  },
  {
    id: 'demo-hybrid-ad',
    title: 'Central Office Server & Microsoft 365 Setup',
    category: 'IT Infrastructure',
    shortDescription:
      'Sample office IT setup consolidating staff logins, Microsoft 365 sync, shared files, and virtual servers.',
    fullOverview:
      'A sample office infrastructure setup showing how mid-sized companies replace scattered PCs with central staff logins, shared security rules, and reliable virtual servers.',
    architectureHighlights: [
      'Windows Server Active Directory with clear staff permissions',
      'Hyper-V virtual servers separating company files and business apps',
      'Shared department folders with controlled access rights',
      'Verified image backups and Microsoft 365 login sync',
    ],
    technologies: ['Windows Server', 'Active Directory', 'Hyper-V', 'Microsoft Azure', 'Linux'],
    image: '/src/assets/images/about_tech_workspace_1795449872355.jpg',
    imageAlt: 'Sample systems administration workstation monitoring office server infrastructure',
    isDemo: true,
    demoScopeLabel: 'Sample Project · Office Server Blueprint',
  },
  {
    id: 'demo-unifi-network',
    title: 'Segmented Office Network, MikroTik & UniFi Wi-Fi',
    category: 'Networking',
    shortDescription:
      'Sample multi-floor office network with automatic backup internet, separated VLANs, and strong UniFi Wi-Fi.',
    fullOverview:
      'A sample network design showing reliable dual-internet failover, tidy cabling, and separate networks for staff devices, guest Wi-Fi, and security cameras.',
    architectureHighlights: [
      'MikroTik core router with automatic dual-internet failover',
      'Separate VLAN networks for Staff, Guests, Phones, and Cameras',
      'Ceiling-mounted UniFi access points for smooth whole-office Wi-Fi',
      'Encrypted VPN connecting main offices and remote staff',
    ],
    technologies: ['MikroTik', 'Ubiquiti', 'UniFi', 'TCP/IP', 'VPN', 'Firewalls'],
    image: '/src/assets/images/hero_enterprise_tech_1795449872221.jpg',
    imageAlt: 'Sample business network operations and switching infrastructure',
    isDemo: true,
    demoScopeLabel: 'Sample Project · Office Network Blueprint',
  },
  {
    id: 'demo-cctv-access',
    title: 'Commercial HD CCTV & Biometric Entry Setup',
    category: 'CCTV & Security',
    shortDescription:
      'Sample workplace security setup combining Hikvision/Dahua cameras, NVR storage, and biometric door access.',
    fullOverview:
      'A sample commercial security layout pairing HD cameras at entrances and corridors with isolated camera networks, biometric attendance, and smart door control.',
    architectureHighlights: [
      'Hikvision & Dahua PoE HD cameras across entrances and hallways',
      'Dedicated security network isolating camera feeds from guest Wi-Fi',
      'Biometric staff attendance clock-in with HR export support',
      'Encrypted remote viewing from mobile phones and office PCs',
    ],
    technologies: ['Hikvision', 'Dahua', 'CCTV', 'Firewalls', 'TCP/IP'],
    image: '/src/assets/images/project_network_security_1795449872012.jpg',
    imageAlt: 'Sample ceiling-mounted commercial IP dome camera and business wireless access point',
    isDemo: true,
    demoScopeLabel: 'Sample Project · Physical Security Blueprint',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Initial Call',
    description: 'Share your goals, office needs, and budget via call, WhatsApp, or an on-site visit.',
    outcome: 'Clear shared goals',
  },
  {
    step: '02',
    title: 'System Review',
    description: 'We check your current software, servers, Wi-Fi coverage, or security gaps.',
    outcome: 'Verified project scope',
  },
  {
    step: '03',
    title: 'Solution Plan',
    description: 'You receive a clear design plan, equipment or feature list, timeline, and quote.',
    outcome: 'Approved plan & quote',
  },
  {
    step: '04',
    title: 'Build & Setup',
    description: 'We build your SaaS web app, set up cloud servers, install cabling, or fit cameras.',
    outcome: 'Ready-to-use system',
  },
  {
    step: '05',
    title: 'Testing & Training',
    description: 'We test backups, speed, and security, then train your team and hand over clear guides.',
    outcome: 'Trained team & guides',
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description: 'We handle updates, troubleshooting, and future upgrades as your business grows.',
    outcome: 'Long-term reliability',
  },
];

export interface LocalizedSiteContent {
  metaTitle: string;
  nav: Record<SectionId, string> & {
    cta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    whatsappPrefix: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    audiences: [string, string, string];
    cloudEngineLabel: string;
    cloudComputeLabel: string;
    floatingProducts: [string, string, string, string];
  };
  trustPillars: {
    index: string;
    title: string;
    detail: string;
  }[];
  about: {
    eyebrow: string;
    heading: string;
    photoTag: string;
    missionTitle: string;
    visionTitle: string;
    showValuesLabel: string;
    hideValuesLabel: string;
    scheduleCta: string;
    lead: string;
    body: string;
    mission: string;
    vision: string;
    approach: string;
    values: {name: string; detail: string}[];
  };
  servicesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    whatYouGet: string;
    viewDeliverables: string;
    hideDetails: string;
    seeAllPrefix: string;
    seeAllSuffix: string;
    requestQuote: string;
  };
  services: ServiceItem[];
  whySection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    ownershipTitle: string;
    ownershipDetail: string;
    solutionsEyebrow: string;
    solutionsHeading: string;
    solutionsCta: string;
    discussBtn: string;
    integratedOptionLabel: string;
  };
  whyChooseUs: {title: string; description: string}[];
  solutions: {
    index: string;
    sector: string;
    title: string;
    description: string;
    includedServices: string[];
  }[];
  projectsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    sampleSetupBadge: string;
    viewDetails: string;
    categoryLabels: Record<'All' | ProjectItem['category'], string>;
  };
  projects: ProjectItem[];
  processSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    stepWord: string;
    ofWord: string;
    keyOutcomeLabel: string;
  };
  workingProcess: ProcessStep[];
  techSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    tabLabels: Record<'All' | TechCategory['category'], string>;
    roleOverrides?: Record<string, string>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    whatsappCardTitle: string;
    phoneLabel: string;
    emailLabel: string;
    coverageLabel: string;
    location: string;
    locationDetail: string;
    businessHours: string;
    formTitle: string;
    formSubtitlePrefix: string;
    formSubtitleSuffix: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    businessNameLabel: string;
    optionalTag: string;
    businessNamePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    phoneFieldLabel: string;
    serviceFieldLabel: string;
    extraServiceOptions: {
      integrated: string;
      general: string;
    };
    summaryLabel: string;
    summaryPlaceholder: string;
    submitBtn: string;
    submitHint: string;
    errors: {
      fullName: string;
      email: string;
      phone: string;
      service: string;
      description: string;
    };
    readyTitle: string;
    readySubtitlePrefix: string;
    readySubtitleSuffix: string;
    summaryServiceLabel: string;
    sendWhatsAppBtn: string;
    sendEmailBtn: string;
    editDetailsBtn: string;
    startAnotherBtn: string;
  };
  footer: {
    intro: string;
    stayUpdated: string;
    subscribedMessage: string;
    emailInputLabel: string;
    subscribeAria: string;
    coreServicesTitle: string;
    navigationTitle: string;
    contactScopeTitle: string;
    serviceRegionLabel: string;
    locationDetail: string;
    whatsappDirectLabel: string;
    bookConsultation: string;
    howWeDeliver: string;
    steps: [string, string, string];
    emailUs: string;
    privacy: string;
    terms: string;
  };
  modals: {
    servicePrefix: string;
    closeServiceAria: string;
    whatIsIncluded: string;
    whatYouReceive: string;
    requestQuote: string;
    discussWhatsApp: string;
    whatsappEnquiryPrefix: string;
    closeProjectAria: string;
    sampleSetupTag: string;
    keyFeatures: string;
    toolsUsed: string;
    requestSimilar: string;
    closeBtn: string;
    privacyTitle: string;
    termsTitle: string;
    closeLegalAria: string;
    privacyParagraphs: string[];
    termsParagraphs: string[];
  };
  controls: {
    themeButtonPrefix: string;
    themeEyebrow: string;
    themeTitle: string;
    closeThemeAria: string;
    modeLabels: Record<'Dark' | 'Light', string>;
    themes: Record<
      string,
      {name: string; description: string}
    >;
    languageLabel: string;
    switchLanguageAria: string;
  };
}

export const I18N: Record<LanguageCode, LocalizedSiteContent> = {
  en: {
    metaTitle: `${COMPANY_INFO.name} | Business IT, Cloud & Full-Stack SaaS Solutions`,
    nav: {
      hero: 'Home',
      about: 'About',
      services: 'Services',
      'why-us': 'Why Us',
      projects: 'Projects',
      process: 'Process',
      tech: 'Technologies',
      contact: 'Contact',
      cta: 'Get Consultation',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      whatsappPrefix: 'WhatsApp',
    },
    hero: {
      eyebrow: 'Business IT, Cloud & Full-Stack SaaS',
      titlePrefix: 'Transforming Businesses Through',
      titleHighlight: 'Smart Technology',
      subtitle:
        'From full-stack SaaS web applications and cloud hosting to secure office networks and CCTV systems, we help companies build, launch, and manage technology that runs smoothly every day.',
      primaryCta: 'Start Your Project',
      secondaryCta: 'View Sample Work',
      audiences: ['Companies & Startups', 'Institutions & Schools', 'Ghana & Remote Delivery'],
      cloudEngineLabel: 'Cloud Engine',
      cloudComputeLabel: 'Cloud Compute',
      floatingProducts: ['Full-Stack SaaS', 'Cloud Hosting', 'Office Networks', 'CCTV & Security'],
    },
    trustPillars: TRUST_PILLARS.map((p) => ({...p})),
    about: {
      eyebrow: 'Who We Are',
      heading: 'About SkyMax Technology',
      photoTag: 'How We Work With Clients',
      missionTitle: 'Our Mission',
      visionTitle: 'Our Vision',
      showValuesLabel: 'Our Core Values',
      hideValuesLabel: 'Hide Core Values',
      scheduleCta: 'Schedule Consultation',
      lead: ABOUT_DATA.lead,
      body: ABOUT_DATA.body,
      mission: ABOUT_DATA.mission,
      vision: ABOUT_DATA.vision,
      approach: ABOUT_DATA.approach,
      values: ABOUT_DATA.values.map((v) => ({...v})),
    },
    servicesSection: {
      eyebrow: 'What We Do',
      heading: 'Core Technology Services',
      subtitle:
        'Full-stack SaaS web applications, cloud hosting, system administration, business networking, CCTV security, and IT consulting.',
      whatYouGet: 'What You Get',
      viewDeliverables: 'View Deliverables',
      hideDetails: 'Hide Details',
      seeAllPrefix: 'See all',
      seeAllSuffix: 'included features',
      requestQuote: 'Request Quote',
    },
    services: SERVICES,
    whySection: {
      eyebrow: 'Why SkyMax',
      heading: 'Why Businesses Choose Us',
      subtitle:
        'We bring full-stack SaaS software, cloud hosting, office networks, and security together under one dependable team.',
      ownershipTitle: 'Full Ownership & Clarity',
      ownershipDetail:
        'You keep full ownership of your software, accounts, and equipment with clear guides.',
      solutionsEyebrow: 'Industry Solutions',
      solutionsHeading: 'Complete Setups Built For Your Industry',
      solutionsCta: 'Request Custom Setup',
      discussBtn: 'Discuss',
      integratedOptionLabel: 'Multiple / Integrated Solution',
    },
    whyChooseUs: WHY_CHOOSE_US.map((w) => ({...w})),
    solutions: SOLUTIONS.map((s) => ({
      ...s,
      includedServices: [...s.includedServices],
    })),
    projectsSection: {
      eyebrow: 'Sample Work',
      heading: 'Featured Projects & Blueprints',
      subtitle:
        'See example setups showing how we deliver full-stack SaaS web applications, cloud hosting, office servers, business networks, and security cameras.',
      sampleSetupBadge: 'Sample Setup',
      viewDetails: 'View Details',
      categoryLabels: {
        All: 'All Projects',
        'Full-Stack SaaS': 'Full-Stack SaaS',
        'Cloud & DevOps': 'Cloud & DevOps',
        'IT Infrastructure': 'IT Infrastructure',
        Networking: 'Networking',
        'CCTV & Security': 'CCTV & Security',
      },
    },
    projects: DEMO_PROJECTS,
    processSection: {
      eyebrow: 'How We Work',
      heading: 'Our Working Process',
      subtitle:
        'Six clear steps from our first conversation to launch, staff training, and ongoing support.',
      stepWord: 'Step',
      ofWord: 'of',
      keyOutcomeLabel: 'Key Outcome',
    },
    workingProcess: WORKING_PROCESS,
    techSection: {
      eyebrow: 'Trusted Platforms',
      heading: 'Technologies We Use',
      subtitle:
        'Proven software, cloud, server, networking, and security tools chosen for everyday reliability.',
      tabLabels: {
        All: 'All Tech',
        Cloud: 'Cloud',
        DevOps: 'DevOps',
        Systems: 'Systems',
        Networking: 'Networking',
        Development: 'Development',
        Security: 'Security',
      },
    },
    contact: {
      eyebrow: 'Get In Touch',
      heading: 'Talk To Us About Your Project',
      subtitle:
        'Reach out for full-stack SaaS web applications, IT health checks, office network setups, or CCTV security quotes.',
      whatsappCardTitle: 'WhatsApp Direct Chat',
      phoneLabel: 'Phone Line',
      emailLabel: 'Email Address',
      coverageLabel: 'Operations Coverage',
      location: COMPANY_INFO.location,
      locationDetail: COMPANY_INFO.locationDetail,
      businessHours: COMPANY_INFO.businessHours,
      formTitle: 'Request a Consultation',
      formSubtitlePrefix: 'Tell us what you want to build or improve. Fields marked with',
      formSubtitleSuffix: 'are required.',
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Kwame Mensah',
      businessNameLabel: 'Business Name',
      optionalTag: '(Optional)',
      businessNamePlaceholder: 'Accra Logistics Ltd',
      emailFieldLabel: 'Email Address',
      emailPlaceholder: 'you@company.com',
      phoneFieldLabel: 'Phone / WhatsApp',
      serviceFieldLabel: 'Service Required',
      extraServiceOptions: {
        integrated: 'Multiple / Integrated Solution',
        general: 'General IT Consultation',
      },
      summaryLabel: 'Project Summary',
      summaryPlaceholder: 'Briefly describe what you need, your team size, or your timeline...',
      submitBtn: 'Review & Send Message',
      submitHint: 'Send directly via WhatsApp or email after checking your details.',
      errors: {
        fullName: 'Please enter your full name.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone or WhatsApp number.',
        service: 'Please select the service you require.',
        description: 'Please share a brief overview of your requirements (10+ characters).',
      },
      readyTitle: 'Your Message Is Ready',
      readySubtitlePrefix: 'Thank you,',
      readySubtitleSuffix:
        '. Choose how you would like to send your project details directly to our team:',
      summaryServiceLabel: 'Service:',
      sendWhatsAppBtn: 'Send via WhatsApp',
      sendEmailBtn: 'Send via Email App',
      editDetailsBtn: 'Edit Details',
      startAnotherBtn: 'Start Another Enquiry',
    },
    footer: {
      intro: COMPANY_INFO.footerIntro,
      stayUpdated: 'Stay Updated',
      subscribedMessage: 'Subscribed to SkyMax updates.',
      emailInputLabel: 'Email address for updates',
      subscribeAria: 'Subscribe for updates',
      coreServicesTitle: 'Our Core Services',
      navigationTitle: 'Navigation',
      contactScopeTitle: 'Contact & Scope',
      serviceRegionLabel: 'Service Region',
      locationDetail: COMPANY_INFO.locationDetail,
      whatsappDirectLabel: 'WhatsApp Direct',
      bookConsultation: 'Book a Free Consultation',
      howWeDeliver: 'How We Deliver',
      steps: ['1. Plan', '2. Build', '3. Support'],
      emailUs: 'Email Us',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    modals: {
      servicePrefix: 'Service',
      closeServiceAria: 'Close service details',
      whatIsIncluded: 'What Is Included',
      whatYouReceive: 'What You Receive',
      requestQuote: 'Request a Quote',
      discussWhatsApp: 'Discuss on WhatsApp',
      whatsappEnquiryPrefix: 'Hello, I would like to enquire about',
      closeProjectAria: 'Close project details',
      sampleSetupTag: 'Sample Setup',
      keyFeatures: 'Key Features',
      toolsUsed: 'Tools Used',
      requestSimilar: 'Request a Setup Like This',
      closeBtn: 'Close',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms and Conditions',
      closeLegalAria: 'Close legal notice',
      privacyParagraphs: [
        `${COMPANY_INFO.name} respects your privacy. This business website does not store enquiry form submissions in a background database or sell visitor information to third parties.`,
        'Information you enter into the enquiry form is validated locally in your browser so you can choose to send your project brief directly via WhatsApp or your own email application.',
        `For privacy questions, contact us at ${COMPANY_INFO.emailPlaceholder} or ${COMPANY_INFO.whatsappInternational}.`,
      ],
      termsParagraphs: [
        `Content on this website is provided by ${COMPANY_INFO.name} for general informational purposes regarding our IT, SaaS software, cloud, networking, and physical security services.`,
        'Sample setups displayed in the Projects section are demonstration blueprints for scoping discussions. Final project deliverables, timelines, warranties, and service-level terms are defined in written client proposals.',
      ],
    },
    controls: {
      themeButtonPrefix: 'Theme',
      themeEyebrow: 'Theme Selector',
      themeTitle: 'Choose Your Style',
      closeThemeAria: 'Close theme selector',
      modeLabels: {Dark: 'Dark', Light: 'Light'},
      themes: {
        'cobalt-slate': {
          name: 'Navy Prism',
          description: 'Deep navy void with cyan, violet & amber blend',
        },
        'nordic-daylight': {
          name: 'Nordic Daylight',
          description: 'Crisp white & cool mist with cobalt-violet highlights',
        },
        'graphite-amber': {
          name: 'Graphite Amber',
          description: 'Carbon charcoal paired with precision amber gold',
        },
        'alabaster-teal': {
          name: 'Alabaster Teal',
          description: 'Clean mineral off-white with deep ocean teal',
        },
      },
      languageLabel: 'Language',
      switchLanguageAria: 'Switch site language between English and French',
    },
  },

  fr: {
    metaTitle: `${COMPANY_INFO.name} | Solutions IT, Cloud & Applications SaaS Full-Stack`,
    nav: {
      hero: 'Accueil',
      about: 'À propos',
      services: 'Services',
      'why-us': 'Atouts',
      projects: 'Projets',
      process: 'Méthode',
      tech: 'Outils',
      contact: 'Contact',
      cta: 'Devis Gratuit',
      openMenuLabel: 'Ouvrir le menu de navigation',
      closeMenuLabel: 'Fermer le menu de navigation',
      whatsappPrefix: 'WhatsApp',
    },
    hero: {
      eyebrow: 'IT d’Entreprise, Cloud & SaaS Full-Stack',
      titlePrefix: 'Transformez Votre Entreprise Avec des',
      titleHighlight: 'Technologies Intelligentes',
      subtitle:
        'Des applications web SaaS full-stack et l’hébergement cloud aux réseaux de bureau sécurisés et systèmes de vidéosurveillance, nous accompagnons les entreprises pour concevoir, lancer et gérer des systèmes fiables au quotidien.',
      primaryCta: 'Lancer Votre Projet',
      secondaryCta: 'Voir Nos Exemples',
      audiences: ['Entreprises & Startups', 'Écoles & Institutions', 'Ghana & Afrique de l’Ouest'],
      cloudEngineLabel: 'Moteur Cloud',
      cloudComputeLabel: 'Calcul Cloud',
      floatingProducts: [
        'SaaS Full-Stack',
        'Hébergement Cloud',
        'Réseaux de Bureau',
        'CCTV & Sécurité',
      ],
    },
    trustPillars: [
      {
        index: '01',
        title: 'Un Seul Partenaire Fiable',
        detail:
          'Logiciels SaaS, hébergement cloud, réseaux de bureau et sécurité gérés par une seule équipe.',
      },
      {
        index: '02',
        title: 'Sécurité Intégrée',
        detail:
          'Réseaux protégés, accès chiffrés aux données et droits d’accès clairs pour le personnel.',
      },
      {
        index: '03',
        title: 'Prêt à Évoluer',
        detail:
          'Des systèmes flexibles conçus pour un bureau unique ou une croissance multi-sites.',
      },
      {
        index: '04',
        title: 'Guides & Support Clairs',
        detail:
          'Prise en main fluide, documentation simple et assistance technique réactive au quotidien.',
      },
    ],
    about: {
      eyebrow: 'Qui Sommes-Nous',
      heading: 'À Propos de SkyMax Technology',
      photoTag: 'Notre Approche Client',
      missionTitle: 'Notre Mission',
      visionTitle: 'Notre Vision',
      showValuesLabel: 'Nos Valeurs Clés',
      hideValuesLabel: 'Masquer Nos Valeurs',
      scheduleCta: 'Planifier un Échange',
      lead: 'SkyMax Technology aide les entreprises en croissance, startups et institutions à moderniser leur travail quotidien grâce aux applications web SaaS full-stack, au cloud, aux réseaux et à la sécurité.',
      body: 'Au lieu de coordonner plusieurs prestataires pour vos logiciels, serveurs, câblages et caméras, vous disposez d’une équipe unique qui conçoit, déploie et maintient l’ensemble de votre infrastructure.',
      mission:
        'Concevoir, déployer et maintenir des logiciels SaaS fiables, des systèmes cloud et des réseaux d’entreprise qui permettent aux équipes de travailler plus vite en toute sécurité.',
      vision:
        'Être un partenaire technologique durable, reconnu pour ses conseils honnêtes, son travail soigné et sa fiabilité au quotidien.',
      approach:
        'Nous analysons vos besoins avec transparence, recommandons la solution adaptée, testons chaque élément avant la mise en ligne et restons à vos côtés.',
      values: [
        {
          name: 'Fiabilité',
          detail: 'Des systèmes pensés pour une performance stable et régulière chaque jour.',
        },
        {
          name: 'Innovation Utile',
          detail: 'Des outils SaaS et cloud modernes utilisés là où ils font gagner temps et budget.',
        },
        {
          name: 'Sécurité Prioritaire',
          detail: 'Accès personnel maîtrisé, réseaux cloisonnés et sauvegardes régulières.',
        },
        {
          name: 'Livraison Soignée',
          detail: 'Installations propres, délais clairs et documentation écrite complète.',
        },
        {
          name: 'Amélioration Continue',
          detail: 'Mises à jour et évolutions régulières au rythme de votre entreprise.',
        },
      ],
    },
    servicesSection: {
      eyebrow: 'Nos Domaines',
      heading: 'Services Technologiques Principaux',
      subtitle:
        'Applications web SaaS full-stack, hébergement cloud, administration systèmes, réseaux d’entreprise, vidéosurveillance CCTV et conseil IT.',
      whatYouGet: 'Ce Que Vous Obtenez',
      viewDeliverables: 'Voir les Livrables',
      hideDetails: 'Masquer les Détails',
      seeAllPrefix: 'Voir les',
      seeAllSuffix: 'fonctionnalités incluses',
      requestQuote: 'Demander un Devis',
    },
    services: [
      {
        id: 'saas-applications',
        number: '01',
        title: 'Applications Web SaaS Full-Stack',
        summary:
          'Plateformes cloud complètes : portails clients, facturation, stocks, RH, CRM et ERP.',
        description:
          'Applications web SaaS complètes conçues pour les équipes multi-utilisateurs, portails clients, abonnements et tableaux de bord en temps réel.',
        highlights: [
          'Applications web SaaS full-stack',
          'Portails clients et équipes multi-locataires',
          'Gestion des abonnements et factures',
          'Plateformes CRM, ERP, RH & stocks',
        ],
        capabilities: [
          'Applications web SaaS full-stack',
          'Portails clients & équipes multi-locataires',
          'Gestion d’abonnements & facturation',
          'Plateformes de stocks & opérations',
          'Systèmes CRM & ERP d’entreprise',
          'Portails RH, paie & présence',
          'Systèmes de gestion clinique & hôpital',
          'Portails scolaires & étudiants',
          'Tableaux de bord multi-agences',
          'Suivi du parc informatique',
          'APIs REST & intégrations tierces',
        ],
        deliverables: [
          'Application web moderne et adaptée aux mobiles pour équipes et clients',
          'Comptes multi-espaces, gestion des rôles et base cloud sécurisée',
          'Mise en ligne cloud, sauvegardes quotidiennes et formation des équipes',
        ],
        iconName: 'code',
      },
      {
        id: 'cloud-computing',
        number: '02',
        title: 'Hébergement & Déploiement Cloud',
        callout: 'Passez Votre Entreprise dans le Cloud.',
        summary:
          'Configuration AWS, Azure et Google Cloud, déploiement de serveurs, mises à jour automatisées et reprise après sinistre.',
        description:
          'Migrations cloud sécurisées, installation de serveurs, déploiements automatisés et plans de reprise conçus pour garantir la continuité d’activité.',
        highlights: [
          'AWS, Microsoft Azure & Google Cloud',
          'Serveurs cloud Windows & Linux',
          'Docker, Kubernetes & mises en ligne continues',
          'Sécurité cloud, supervision & sauvegardes',
        ],
        capabilities: [
          'Hébergement cloud AWS',
          'Services Microsoft Azure',
          'Google Cloud Platform',
          'Provisionnement de serveurs cloud',
          'Déploiement Windows Server & Linux',
          'Migration vers le cloud',
          'Déploiement d’applications SaaS',
          'Conteneurisation Docker',
          'Pipelines CI/CD automatisés',
          'Jenkins & GitHub Actions',
          'Montée en charge Kubernetes',
          'Sécurité cloud & suivi de disponibilité',
          'Sauvegardes automatiques & reprise d’activité',
        ],
        deliverables: [
          'Serveurs cloud sécurisés, réseau privé et certificats SSL',
          'Tests automatisés et déploiements sans interruption',
          'Sauvegardes hors site planifiées et tests de restauration',
        ],
        iconName: 'cloud',
      },
      {
        id: 'system-administration',
        number: '03',
        title: 'Administration Systèmes & Support IT',
        summary:
          'Serveurs Windows et Linux, Microsoft 365, gestion des accès, sauvegardes et support informatique rapide.',
        description:
          'Gestion centralisée des serveurs de bureau, comptes utilisateurs, fichiers partagés et Microsoft 365 avec assistance à distance ou sur site.',
        highlights: [
          'Gestion serveurs Windows & Linux',
          'Active Directory, stratégies & M365',
          'Serveurs de fichiers, DNS & DHCP',
          'Virtualisation Hyper-V & support IT',
        ],
        capabilities: [
          'Administration Windows Server',
          'Administration serveurs Linux',
          'Active Directory & stratégies de groupe',
          'Administration Microsoft 365',
          'Gestion des comptes & accès employés',
          'Configuration DNS & DHCP',
          'Serveurs de fichiers & DFS',
          'Virtualisation de serveurs (Hyper-V)',
          'Sauvegarde & restauration système',
          'Dépannage informatique',
          'Support IT à distance et sur site',
          'Maintenance informatique régulière',
        ],
        deliverables: [
          'Connexion centralisée des employés et règles de sécurité',
          'Serveurs virtuels consolidés avec sauvegardes quotidiennes vérifiées',
          'Intervention rapide à distance et suivi préventif',
        ],
        iconName: 'server',
      },
      {
        id: 'networking',
        number: '04',
        title: 'Réseaux d’Entreprise & Wi-Fi',
        summary:
          'Architecture réseau, routeurs MikroTik, Wi-Fi professionnel UniFi, réseaux invités isolés, pare-feu et VPN.',
        description:
          'Câblage structuré propre, couverture Wi-Fi fiable dans tout le bureau, séparation employés/invités et connexions VPN sécurisées inter-sites.',
        highlights: [
          'Conception réseau & câblage structuré',
          'Routage MikroTik & Wi-Fi UniFi',
          'Liaisons sans fil entre bâtiments',
          'Pare-feu & VPN d’entreprise sécurisés',
        ],
        capabilities: [
          'Conception & installation réseau',
          'Déploiement LAN & WAN de bureau',
          'Configuration routeurs MikroTik',
          'Wi-Fi professionnel Ubiquiti & UniFi',
          'Liaisons sans fil point à point',
          'Réseaux cloisonnés (VLAN)',
          'Installation de pare-feu d’entreprise',
          'VPN inter-sites et accès distant',
          'Durcissement de la sécurité réseau',
          'Optimisation de la couverture Wi-Fi',
          'Diagnostic & dépannage réseau',
          'Câblage réseau structuré',
        ],
        deliverables: [
          'Câblage étiqueté et baie serveur proprement organisée',
          'Réseaux séparés pour employés, invités, téléphones et caméras',
          'Règles pare-feu configurées et accès VPN distant sécurisé',
        ],
        iconName: 'network',
      },
      {
        id: 'cctv-security',
        number: '05',
        title: 'Vidéosurveillance CCTV & Sécurité',
        summary:
          'Caméras HD Hikvision et Dahua, enregistrement NVR, consultation mobile, pointage biométrique et contrôle d’accès.',
        description:
          'Caméras de surveillance HD nettes pour bureaux et sites commerciaux, pointage biométrique du personnel et contrôle d’accès sécurisé.',
        highlights: [
          'Caméras IP Hikvision & Dahua',
          'Enregistrement NVR & vue à distance',
          'Pointage biométrique & contrôle de porte',
          'Maintenance continue des caméras',
        ],
        capabilities: [
          'Installation de caméras IP CCTV',
          'Systèmes Hikvision',
          'Systèmes de surveillance Dahua',
          'Configuration NVR & DVR',
          'Accès mobile et ordinateur à distance',
          'Pointage biométrique du personnel',
          'Contrôle d’accès intelligent des portes',
          'Maintenance des systèmes de surveillance',
          'Sécurisation de bureaux et entrepôts',
        ],
        deliverables: [
          'Plan de couverture du site et pose propre des caméras PoE',
          'Stockage vidéo NVR fiable et accès mobile chiffré',
          'Pointage biométrique et contrôle des accès configurés',
        ],
        iconName: 'shield',
      },
      {
        id: 'it-consulting',
        number: '06',
        title: 'Conseil IT & Services Gérés',
        summary:
          'Audits informatiques, planification technologique, conseil d’achat matériel, contrôles sécurité et support continu.',
        description:
          'Évaluation honnête de votre système existant, recommandations d’achat adaptées, documentation claire et suivi technique proactif.',
        highlights: [
          'Audits IT & bilans de sécurité',
          'Planification & audit de performance réseau',
          'Conseil d’achat matériel & licences',
          'Documentation & support mensuel',
        ],
        capabilities: [
          'Audit d’infrastructure informatique',
          'Conseil technologique',
          'Stratégie & feuille de route IT',
          'Gestion du parc matériel et logiciel',
          'Accompagnement aux achats IT',
          'Maintenance informatique planifiée',
          'Analyse des risques de sécurité',
          'Audit de performance réseau',
          'Documentation claire des systèmes',
          'Assistance technique continue',
        ],
        deliverables: [
          'Rapport pratique d’audit IT et sécurité',
          'Recommandations dimensionnées de matériel et licences',
          'Schémas réseau à jour et guides pour votre équipe',
        ],
        iconName: 'briefcase',
      },
    ],
    whySection: {
      eyebrow: 'Pourquoi SkyMax',
      heading: 'Pourquoi Les Entreprises Nous Choisissent',
      subtitle:
        'Nous réunissons logiciels SaaS full-stack, hébergement cloud, réseaux de bureau et sécurité sous une même équipe fiable.',
      ownershipTitle: 'Propriété Complète & Clarté',
      ownershipDetail:
        'Vous conservez la pleine propriété de vos logiciels, comptes et équipements avec des guides clairs.',
      solutionsEyebrow: 'Solutions Sectorielles',
      solutionsHeading: 'Des Installations Complètes Adaptées à Votre Secteur',
      solutionsCta: 'Demander une Configuration',
      discussBtn: 'Échanger',
      integratedOptionLabel: 'Solution Multiple / Intégrée',
    },
    whyChooseUs: [
      {
        title: 'Partenaire IT Tout-en-Un',
        description:
          'Logiciels SaaS, cloud, serveurs, réseaux de bureau et caméras CCTV pris en charge par une seule équipe.',
      },
      {
        title: 'Orienté Objectifs Métier',
        description:
          'Des choix techniques concrets pour gagner du temps, simplifier le quotidien et soutenir la croissance.',
      },
      {
        title: 'Plateformes Cloud Fiables',
        description:
          'Des outils cloud éprouvés et des déploiements automatisés pour garder vos services en ligne.',
      },
      {
        title: 'Sécurisé & Évolutif',
        description:
          'Réseaux protégés, permissions contrôlées et plateformes SaaS capables de grandir sereinement.',
      },
      {
        title: 'Support Clair & Réactif',
        description:
          'Assistance rapide à distance ou sur site, expliquée en termes simples sans jargon inutile.',
      },
      {
        title: 'Adapté à Votre Fonctionnement',
        description:
          'Des systèmes dimensionnés selon la taille de votre équipe, vos locaux et vos opérations.',
      },
      {
        title: 'Maîtrise des Coûts',
        description:
          'Matériel et licences logiciels adaptés pour éviter toute dépense superflue.',
      },
      {
        title: 'Partenariat Durable',
        description:
          'Documentation complète et accompagnement fiable bien après le lancement.',
      },
    ],
    solutions: [
      {
        index: '01',
        sector: 'Entreprises Multi-Sites',
        title: 'Plateforme SaaS Full-Stack & Bureaux Connectés',
        description:
          'Gardez toutes vos agences synchronisées grâce à un portail SaaS partagé, des VPN sécurisés, un Wi-Fi solide et la vidéosurveillance à distance.',
        includedServices: ['Appli Web SaaS', 'Réseau de Bureau', 'Sécurité CCTV'],
      },
      {
        index: '02',
        sector: 'Santé & Éducation',
        title: 'Systèmes pour Cliniques, Écoles & Campus',
        description:
          'Portails SaaS pour patients ou étudiants soutenus par des réseaux campus fiables, contrôle des accès et sécurité biométrique.',
        includedServices: ['Portails SaaS', 'Contrôle d’Accès', 'Biométrie'],
      },
      {
        index: '03',
        sector: 'Startups & Éditeurs SaaS',
        title: 'Lancement SaaS Évolutif & Automatisation Cloud',
        description:
          'Concevez et lancez des produits SaaS multi-locataires sur AWS, Azure ou Google Cloud avec mises à jour automatisées et sauvegardes quotidiennes.',
        includedServices: ['SaaS Full-Stack', 'Hébergement Cloud', 'Mises en Ligne Auto'],
      },
      {
        index: '04',
        sector: 'Bureaux Corporatifs',
        title: 'IT de Bureau Moderne & Support Continu',
        description:
          'Modernisez vos bureaux avec serveurs gérés, Microsoft 365, Wi-Fi séparé employés/invités et assistance informatique fiable.',
        includedServices: ['Admin Systèmes', 'Microsoft 365', 'Conseil IT'],
      },
    ],
    projectsSection: {
      eyebrow: 'Exemples de Projets',
      heading: 'Projets Types & Architectures',
      subtitle:
        'Découvrez des configurations types illustrant nos réalisations en applications web SaaS full-stack, cloud, serveurs, réseaux et sécurité.',
      sampleSetupBadge: 'Configuration Type',
      viewDetails: 'Voir les Détails',
      categoryLabels: {
        All: 'Tous les Projets',
        'Full-Stack SaaS': 'SaaS Full-Stack',
        'Cloud & DevOps': 'Cloud & DevOps',
        'IT Infrastructure': 'Infrastructure IT',
        Networking: 'Réseaux',
        'CCTV & Security': 'CCTV & Sécurité',
      },
    },
    projects: [
      {
        ...DEMO_PROJECTS[0],
        title: 'Plateforme SaaS Full-Stack Opérations & Clients',
        shortDescription:
          'Exemple d’application web SaaS réunissant comptes clients multi-espaces, workflows d’équipe, facturation et tableaux de bord.',
        fullOverview:
          'Un modèle de plateforme SaaS full-stack montrant comment entreprises et startups gèrent plusieurs espaces clients, automatisent la facturation récurrente et suivent les opérations en direct.',
        architectureHighlights: [
          'Espaces clients multi-locataires avec séparation stricte des données',
          'Accès par rôles pour administrateurs, managers, équipes et clients',
          'Facturation d’abonnements, factures automatisées et analytique en direct',
          'Base de données cloud chiffrée avec sauvegardes quotidiennes automatiques',
        ],
        demoScopeLabel: 'Projet Type · Application Web SaaS Full-Stack',
      },
      {
        ...DEMO_PROJECTS[1],
        title: 'Hébergement Cloud & Déploiement Automatisé',
        shortDescription:
          'Exemple d’infrastructure cloud utilisant Docker, Kubernetes, GitHub Actions et sauvegardes hors site.',
        fullOverview:
          'Un modèle d’hébergement cloud illustrant les mises à jour sans coupure, l’installation automatisée des serveurs et la supervision sur AWS et Linux.',
        architectureHighlights: [
          'Services SaaS conteneurisés sous Docker et orchestrés par Kubernetes',
          'Tests et publications automatisés via GitHub Actions & Jenkins',
          'Infrastructure reproductible déployée avec Terraform et Ansible',
          'Sauvegardes hors site automatisées, SSL et alertes de disponibilité',
        ],
        demoScopeLabel: 'Projet Type · Architecture Hébergement Cloud',
      },
      {
        ...DEMO_PROJECTS[2],
        title: 'Serveur de Bureau Centralisé & Microsoft 365',
        shortDescription:
          'Exemple d’infrastructure de bureau unifiant connexions employés, synchronisation Microsoft 365, fichiers partagés et serveurs virtuels.',
        fullOverview:
          'Un modèle d’infrastructure montrant comment une PME remplace les postes isolés par une gestion centralisée des identités, des règles de sécurité et des serveurs virtuels fiables.',
        architectureHighlights: [
          'Active Directory Windows Server avec droits d’accès par service',
          'Serveurs virtuels Hyper-V séparant fichiers partagés et applications métier',
          'Dossiers partagés par département avec permissions contrôlées',
          'Sauvegardes complètes vérifiées et synchronisation Microsoft 365',
        ],
        demoScopeLabel: 'Projet Type · Architecture Serveur de Bureau',
      },
      {
        ...DEMO_PROJECTS[3],
        title: 'Réseau Cloisonné, MikroTik & Wi-Fi UniFi',
        shortDescription:
          'Exemple de réseau multi-étages avec bascule internet automatique, VLAN séparés et Wi-Fi UniFi haute couverture.',
        fullOverview:
          'Une architecture réseau illustrant la double connexion internet de secours, le câblage structuré et la séparation entre postes employés, Wi-Fi invités et caméras.',
        architectureHighlights: [
          'Routeur principal MikroTik avec bascule automatique sur double lien internet',
          'Réseaux VLAN distincts pour Employés, Invités, Téléphonie et Caméras',
          'Bornes Wi-Fi UniFi au plafond pour une couverture fluide sur tout le site',
          'Tunnel VPN chiffré reliant siège, agences et collaborateurs distants',
        ],
        demoScopeLabel: 'Projet Type · Architecture Réseau de Bureau',
      },
      {
        ...DEMO_PROJECTS[4],
        title: 'Vidéosurveillance HD & Contrôle d’Accès Biométrique',
        shortDescription:
          'Exemple de sécurité de site combinant caméras Hikvision/Dahua, enregistreur NVR et contrôle d’accès biométrique.',
        fullOverview:
          'Un déploiement de sécurité physique associant caméras HD aux entrées, réseau vidéo isolé, pointage biométrique et contrôle d’ouverture des portes.',
        architectureHighlights: [
          'Caméras IP HD PoE Hikvision & Dahua couvrant entrées et couloirs',
          'Réseau sécurité dédié isolant les flux vidéo du Wi-Fi public',
          'Pointeuse biométrique avec export des horaires vers les RH',
          'Visionnage à distance chiffré sur smartphone et poste de bureau',
        ],
        demoScopeLabel: 'Projet Type · Architecture Sécurité Physique',
      },
    ],
    processSection: {
      eyebrow: 'Notre Méthode',
      heading: 'Comment Nous Travaillons',
      subtitle:
        'Six étapes claires, du premier échange jusqu’au lancement, à la formation de vos équipes et au support continu.',
      stepWord: 'Étape',
      ofWord: 'sur',
      keyOutcomeLabel: 'Résultat Clé',
    },
    workingProcess: [
      {
        step: '01',
        title: 'Premier Échange',
        description:
          'Partagez vos objectifs, besoins de bureau et budget par appel, WhatsApp ou visite sur site.',
        outcome: 'Objectifs clairs et partagés',
      },
      {
        step: '02',
        title: 'Analyse Technique',
        description:
          'Nous vérifions vos logiciels actuels, serveurs, couverture Wi-Fi ou points de sécurité.',
        outcome: 'Périmètre de projet validé',
      },
      {
        step: '03',
        title: 'Plan de Solution',
        description:
          'Vous recevez une proposition claire : fonctionnalités ou matériel, délais et devis détaillé.',
        outcome: 'Plan et devis approuvés',
      },
      {
        step: '04',
        title: 'Réalisation & Pose',
        description:
          'Nous développons votre appli SaaS, configurons le cloud, posons le câblage ou les caméras.',
        outcome: 'Système prêt à l’emploi',
      },
      {
        step: '05',
        title: 'Tests & Formation',
        description:
          'Nous testons sauvegardes, rapidité et sécurité, puis formons votre équipe avec des guides simples.',
        outcome: 'Équipe formée & guides remis',
      },
      {
        step: '06',
        title: 'Suivi Continu',
        description:
          'Nous assurons mises à jour, dépannage et évolutions futures au fil de votre croissance.',
        outcome: 'Fiabilité à long terme',
      },
    ],
    techSection: {
      eyebrow: 'Plateformes Éprouvées',
      heading: 'Technologies Utilisées',
      subtitle:
        'Des outils logiciels, cloud, serveurs, réseaux et sécurité reconnus pour leur fiabilité quotidienne.',
      tabLabels: {
        All: 'Tout Voir',
        Cloud: 'Cloud',
        DevOps: 'DevOps',
        Systems: 'Systèmes',
        Networking: 'Réseaux',
        Development: 'Développement',
        Security: 'Sécurité',
      },
      roleOverrides: {
        AWS: 'Serveurs cloud, stockage & bases de données',
        'Microsoft Azure': 'Cloud d’entreprise & identité Microsoft',
        'Google Cloud': 'Hébergement applicatif évolutif & stockage',
        Docker: 'Empaquetage portable d’applications',
        Kubernetes: 'Conteneurs cloud à mise à l’échelle auto',
        Jenkins: 'Chaînes automatisées de test & compilation',
        'GitHub Actions': 'Mises en ligne sans interruption',
        Terraform: 'Déploiement cloud reproductible',
        Ansible: 'Configuration automatisée des serveurs',
        'Windows Server': 'Connexions d’entreprise, fichiers & rôles',
        Linux: 'Hôtes cloud Ubuntu & Debian fiables',
        'Active Directory': 'Comptes employés & stratégies centralisées',
        'Hyper-V': 'Consolidation de serveurs virtuels',
        MikroTik: 'Routage internet & secours double FAI',
        Ubiquiti: 'Commutateurs pro & liaisons sans fil',
        UniFi: 'Wi-Fi professionnel multi-étages géré',
        'TCP/IP': 'Architecture réseau, VLAN, DNS & DHCP',
        VPN: 'Connexions distantes & inter-sites chiffrées',
        React: 'Interfaces web SaaS rapides',
        'Node.js': 'APIs backend & logique métier',
        JavaScript: 'Ingénierie web full-stack',
        Firebase: 'Connexion utilisateur, hébergement & services',
        Firestore: 'Base de données cloud en temps réel',
        Hikvision: 'Caméras HD, enregistreurs & contrôle d’accès',
        Dahua: 'Vidéosurveillance pro & biométrie',
        CCTV: 'Caméras PoE & visionnage à distance',
        Firewalls: 'Protection réseau & filtrage de trafic',
      },
    },
    contact: {
      eyebrow: 'Contactez-Nous',
      heading: 'Parlons de Votre Projet',
      subtitle:
        'Contactez-nous pour une application web SaaS full-stack, un audit IT, un réseau de bureau ou un devis de vidéosurveillance CCTV.',
      whatsappCardTitle: 'Discussion Directe WhatsApp',
      phoneLabel: 'Ligne Téléphonique',
      emailLabel: 'Adresse E-mail',
      coverageLabel: 'Zone d’Intervention',
      location: 'Ghana & Afrique de l’Ouest',
      locationDetail: 'Accompagnement au Ghana, en Afrique de l’Ouest et à distance dans le monde',
      businessHours: 'Lundi – Samedi · 08h00 – 18h00 GMT',
      formTitle: 'Demander une Consultation',
      formSubtitlePrefix: 'Décrivez ce que vous souhaitez créer ou améliorer. Les champs avec',
      formSubtitleSuffix: 'sont obligatoires.',
      fullNameLabel: 'Nom Complet',
      fullNamePlaceholder: 'Kwame Mensah',
      businessNameLabel: 'Nom de l’Entreprise',
      optionalTag: '(Optionnel)',
      businessNamePlaceholder: 'Accra Logistics SARL',
      emailFieldLabel: 'Adresse E-mail',
      emailPlaceholder: 'vous@entreprise.com',
      phoneFieldLabel: 'Téléphone / WhatsApp',
      serviceFieldLabel: 'Service Souhaité',
      extraServiceOptions: {
        integrated: 'Solution Multiple / Intégrée',
        general: 'Consultation IT Générale',
      },
      summaryLabel: 'Résumé du Projet',
      summaryPlaceholder: 'Décrivez brièvement votre besoin, la taille de votre équipe ou vos délais...',
      submitBtn: 'Vérifier & Envoyer',
      submitHint: 'Envoyez directement via WhatsApp ou votre messagerie après vérification.',
      errors: {
        fullName: 'Veuillez saisir votre nom complet.',
        email: 'Veuillez saisir une adresse e-mail valide.',
        phone: 'Veuillez saisir un numéro de téléphone ou WhatsApp valide.',
        service: 'Veuillez sélectionner le service souhaité.',
        description: 'Veuillez décrire brièvement votre besoin (10 caractères minimum).',
      },
      readyTitle: 'Votre Message Est Prêt',
      readySubtitlePrefix: 'Merci,',
      readySubtitleSuffix:
        '. Choisissez comment transmettre directement votre demande à notre équipe :',
      summaryServiceLabel: 'Service :',
      sendWhatsAppBtn: 'Envoyer sur WhatsApp',
      sendEmailBtn: 'Envoyer par E-mail',
      editDetailsBtn: 'Modifier les Infos',
      startAnotherBtn: 'Nouvelle Demande',
    },
    footer: {
      intro:
        'Nous aidons entreprises, institutions et startups à simplifier leurs opérations grâce aux applications web SaaS full-stack, au cloud, aux réseaux de bureau et à la sécurité.',
      stayUpdated: 'Restez Informé',
      subscribedMessage: 'Inscrit aux actualités SkyMax.',
      emailInputLabel: 'Adresse e-mail pour les actualités',
      subscribeAria: 'S’inscrire aux actualités',
      coreServicesTitle: 'Nos Services Clés',
      navigationTitle: 'Navigation',
      contactScopeTitle: 'Contact & Portée',
      serviceRegionLabel: 'Zone Desservie',
      locationDetail: 'Accompagnement au Ghana, en Afrique de l’Ouest et à distance dans le monde',
      whatsappDirectLabel: 'WhatsApp Direct',
      bookConsultation: 'Réserver une Consultation',
      howWeDeliver: 'Notre Démarche',
      steps: ['1. Planifier', '2. Construire', '3. Accompagner'],
      emailUs: 'Écrivez-Nous',
      privacy: 'Confidentialité',
      terms: 'Conditions',
    },
    modals: {
      servicePrefix: 'Service',
      closeServiceAria: 'Fermer les détails du service',
      whatIsIncluded: 'Ce Qui Est Inclus',
      whatYouReceive: 'Livrables Inclus',
      requestQuote: 'Demander un Devis',
      discussWhatsApp: 'Discuter sur WhatsApp',
      whatsappEnquiryPrefix: 'Bonjour, je souhaite me renseigner au sujet de',
      closeProjectAria: 'Fermer les détails du projet',
      sampleSetupTag: 'Configuration Type',
      keyFeatures: 'Points Clés',
      toolsUsed: 'Outils Utilisés',
      requestSimilar: 'Demander une Configuration Similaire',
      closeBtn: 'Fermer',
      privacyTitle: 'Politique de Confidentialité',
      termsTitle: 'Conditions Générales',
      closeLegalAria: 'Fermer la notice légale',
      privacyParagraphs: [
        `${COMPANY_INFO.name} respecte votre vie privée. Ce site vitrine ne stocke pas les soumissions du formulaire dans une base de données distante et ne vend aucune donnée à des tiers.`,
        'Les informations saisies dans le formulaire sont validées localement dans votre navigateur afin que vous puissiez envoyer votre brief directement par WhatsApp ou votre messagerie e-mail.',
        `Pour toute question, contactez-nous à ${COMPANY_INFO.emailPlaceholder} ou au ${COMPANY_INFO.whatsappInternational}.`,
      ],
      termsParagraphs: [
        `Le contenu de ce site est fourni par ${COMPANY_INFO.name} à titre informatif concernant nos services IT, logiciels SaaS, cloud, réseaux et sécurité physique.`,
        'Les architectures présentées dans la section Projets sont des modèles de démonstration servant aux échanges de cadrage. Les livrables, délais, garanties et niveaux de service finaux sont précisés dans nos propositions écrites.',
      ],
    },
    controls: {
      themeButtonPrefix: 'Thème',
      themeEyebrow: 'Sélecteur de Thème',
      themeTitle: 'Choisir Votre Style',
      closeThemeAria: 'Fermer le sélecteur de thème',
      modeLabels: {Dark: 'Sombre', Light: 'Clair'},
      themes: {
        'cobalt-slate': {
          name: 'Navy Prisme',
          description: 'Bleu nuit profond avec dégradé cyan, violet & ambre',
        },
        'nordic-daylight': {
          name: 'Lumière Nordique',
          description: 'Blanc pur et brume douce avec accents cobalt-violet',
        },
        'graphite-amber': {
          name: 'Graphite Ambre',
          description: 'Charbon sombre associé à l’ambre doré',
        },
        'alabaster-teal': {
          name: 'Albâtre Sarcelle',
          description: 'Blanc minéral avec sarcelle océan profond',
        },
      },
      languageLabel: 'Langue',
      switchLanguageAria: 'Changer la langue du site entre anglais et français',
    },
  },
};
