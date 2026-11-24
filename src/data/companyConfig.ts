export type PageId = 'home' | 'about' | 'services' | 'solutions' | 'projects' | 'contact';
export type SectionId = 'hero' | 'about' | 'services' | 'why-us' | 'projects' | 'process' | 'tech' | 'contact';

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
