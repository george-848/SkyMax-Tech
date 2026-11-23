export type PageId = 'home' | 'about' | 'services' | 'solutions' | 'projects' | 'contact';

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
    | 'Web Applications'
    | 'Cloud and DevOps'
    | 'IT Infrastructure'
    | 'Networking'
    | 'CCTV and Security';
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
  tagline: 'Enterprise IT, Cloud Infrastructure & Software Engineering',
  footerIntro:
    'Helping businesses, organisations, and startups modernise operations with reliable software, cloud infrastructure, networking, and security systems.',
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
  alt: 'Modern systems engineering workspace with engineers reviewing network topology and application architecture',
};

export const TRUST_PILLARS = [
  {
    index: '01',
    title: 'Single-Partner Delivery',
    detail: 'Software, cloud, networking, and security under one accountable team.',
  },
  {
    index: '02',
    title: 'Security-First Design',
    detail: 'Segmented networks, encrypted access, and role-based system controls.',
  },
  {
    index: '03',
    title: 'Built to Scale',
    detail: 'Clean architectures ready for single offices or multi-branch operations.',
  },
  {
    index: '04',
    title: 'Documented Support',
    detail: 'Structured handover, clear diagrams, and ongoing technical assistance.',
  },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Application Development',
    summary:
      'Custom, scalable web platforms—from POS and inventory to hospital, school, HR, and CRM/ERP systems.',
    description:
      'Modern, responsive, scalable, and secure web applications tailored around your daily workflows and multi-branch reporting.',
    highlights: [
      'Custom business web & SaaS apps',
      'POS, retail & inventory systems',
      'Hospital, school & student portals',
      'HR, payroll, CRM, ERP & IT asset systems',
    ],
    capabilities: [
      'Custom business web applications',
      'POS and retail management systems',
      'Inventory management systems',
      'Hospital management systems',
      'Student management systems',
      'School management systems',
      'HR and payroll systems',
      'IT Asset Management systems',
      'CRM and ERP solutions',
      'Multi-branch business management systems',
      'SaaS applications',
    ],
    deliverables: [
      'Responsive desktop and mobile-ready web interface',
      'Role-based access control and encrypted cloud database',
      'Deployment, automated backups, and team onboarding',
    ],
    iconName: 'code',
  },
  {
    id: 'cloud-computing',
    number: '02',
    title: 'Cloud Computing and Deployment',
    callout: 'Move Your Business to the Cloud.',
    summary:
      'AWS, Azure, and Google Cloud infrastructure, Docker & Kubernetes deployments, CI/CD pipelines, and backup recovery.',
    description:
      'Reliable cloud migrations, server provisioning, containerisation, and automated CI/CD workflows engineered for uptime and recovery.',
    highlights: [
      'AWS, Microsoft Azure & Google Cloud',
      'Windows & Linux server provisioning',
      'Docker, Kubernetes & CI/CD pipelines',
      'Cloud security, monitoring & disaster recovery',
    ],
    capabilities: [
      'AWS cloud infrastructure',
      'Microsoft Azure services',
      'Google Cloud Platform',
      'Cloud server provisioning',
      'Windows Server and Linux deployment',
      'Cloud migration',
      'Application deployment',
      'Docker containerisation',
      'CI/CD pipeline implementation',
      'Jenkins and GitHub Actions',
      'Kubernetes deployment',
      'Cloud monitoring and security',
      'Cloud backup and disaster recovery',
    ],
    deliverables: [
      'Hardened cloud servers, VPC networking, and SSL/TLS setup',
      'Automated Jenkins or GitHub Actions release pipelines',
      'Scheduled off-site backups and failover recovery testing',
    ],
    iconName: 'cloud',
  },
  {
    id: 'system-administration',
    number: '03',
    title: 'System Administration and IT Support',
    summary:
      'Windows and Linux servers, Active Directory, Microsoft 365, Hyper-V virtualisation, and responsive IT support.',
    description:
      'Centralised server governance, user access management, virtualisation, and dependable remote or on-site IT support.',
    highlights: [
      'Windows & Linux server administration',
      'Active Directory, Group Policy & M365',
      'DNS, DHCP, File Servers & DFS',
      'Hyper-V virtualisation, backups & IT support',
    ],
    capabilities: [
      'Windows Server administration',
      'Linux server administration',
      'Active Directory and Group Policy',
      'Microsoft 365 administration',
      'User and access management',
      'DNS and DHCP configuration',
      'File servers and DFS',
      'Server virtualisation',
      'Hyper-V administration',
      'Backup and recovery',
      'IT troubleshooting',
      'Remote IT support',
      'IT infrastructure management',
    ],
    deliverables: [
      'Active Directory & Group Policy identity baseline',
      'Consolidated Hyper-V virtual hosts with verified backups',
      'Fast remote troubleshooting and infrastructure care',
    ],
    iconName: 'server',
  },
  {
    id: 'networking',
    number: '04',
    title: 'Networking and Infrastructure',
    summary:
      'Business LAN/WAN design, MikroTik routing, Ubiquiti UniFi Wi-Fi, VLAN segmentation, firewalls, and VPNs.',
    description:
      'Structured cabling, enterprise wireless coverage, segmented VLANs, and encrypted site-to-site VPNs built for reliable business connectivity.',
    highlights: [
      'LAN/WAN design & structured cabling',
      'MikroTik routing & UniFi wireless',
      'Point-to-point links & VLAN segmentation',
      'Firewall hardening & site-to-site VPNs',
    ],
    capabilities: [
      'Business network design and implementation',
      'LAN and WAN deployment',
      'MikroTik router configuration',
      'Ubiquiti and UniFi wireless solutions',
      'Wireless point-to-point links',
      'VLAN and network segmentation',
      'Firewall configuration',
      'VPN implementation',
      'Network security',
      'Wi-Fi installation and optimisation',
      'Network troubleshooting',
      'Structured cabling',
    ],
    deliverables: [
      'Labelled structured cabling and clean rack termination',
      'Isolated corporate, guest, VoIP, and security VLANs',
      'Documented firewall rules and remote VPN access',
    ],
    iconName: 'network',
  },
  {
    id: 'cctv-security',
    number: '05',
    title: 'CCTV and Physical Security',
    summary:
      'Hikvision and Dahua IP CCTV installation, NVR/DVR setup, remote monitoring, biometrics, and access control.',
    description:
      'High-definition office and commercial surveillance, biometric staff attendance, and controlled entry systems with secure remote viewing.',
    highlights: [
      'Hikvision & Dahua IP camera systems',
      'NVR/DVR setup & remote viewing',
      'Biometric attendance & access control',
      'Ongoing surveillance maintenance',
    ],
    capabilities: [
      'IP CCTV camera installation',
      'Hikvision camera systems',
      'Dahua surveillance systems',
      'NVR and DVR configuration',
      'Remote CCTV monitoring',
      'Biometric attendance systems',
      'Access control systems',
      'Video surveillance maintenance',
      'Office and business security solutions',
    ],
    deliverables: [
      'Site coverage plan and neat PoE camera installation',
      'Hardened NVR retention and encrypted mobile viewing',
      'Integrated biometric attendance and door access control',
    ],
    iconName: 'shield',
  },
  {
    id: 'it-consulting',
    number: '06',
    title: 'IT Consulting and Managed Services',
    summary:
      'Infrastructure assessments, IT strategy, asset management, procurement guidance, security audits, and managed care.',
    description:
      'Objective infrastructure audits, vendor-neutral procurement support, clear technical documentation, and proactive ongoing maintenance.',
    highlights: [
      'IT infrastructure & security assessments',
      'Technology strategy & network audits',
      'IT asset management & procurement help',
      'Documentation & ongoing managed support',
    ],
    capabilities: [
      'IT infrastructure assessments',
      'Technology consulting',
      'IT strategy and planning',
      'IT asset management',
      'IT procurement assistance',
      'Business IT maintenance',
      'Security assessments',
      'Network audits',
      'Infrastructure documentation',
      'Ongoing technical support',
    ],
    deliverables: [
      'Actionable infrastructure and security audit report',
      'Hardware and licensing procurement recommendations',
      'As-built network diagrams and maintenance runbooks',
    ],
    iconName: 'briefcase',
  },
];

export const SOLUTIONS = [
  {
    index: '01',
    sector: 'Retail & Multi-Branch',
    title: 'Unified POS, Inventory & Branch Networking',
    description:
      'Connect branches with custom POS and stock software, site-to-site VPNs, reliable UniFi Wi-Fi, and remote CCTV oversight.',
    includedServices: ['Web Apps', 'Networking', 'CCTV Security'],
  },
  {
    index: '02',
    sector: 'Healthcare & Education',
    title: 'Institutional Portals & Campus Infrastructure',
    description:
      'Hospital, student, and school management systems backed by structured campus networks, Active Directory, and access control.',
    includedServices: ['Management Portals', 'Active Directory', 'Biometrics'],
  },
  {
    index: '03',
    sector: 'Startups & SaaS',
    title: 'Cloud-Native Platforms & Automated DevOps',
    description:
      'Launch scalable web apps on AWS, Azure, or Google Cloud with Docker containers, CI/CD pipelines, and automated backups.',
    includedServices: ['Cloud Hosting', 'Docker & K8s', 'CI/CD'],
  },
  {
    index: '04',
    sector: 'Corporate Offices',
    title: 'Hardened Office IT & Managed Support',
    description:
      'Modernise offices with Windows/Linux servers, Hyper-V, Microsoft 365 administration, VLAN segmentation, and ongoing support.',
    includedServices: ['System Admin', 'Microsoft 365', 'IT Consulting'],
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'Comprehensive IT Solutions',
    description: 'Software, cloud, servers, networking, and CCTV delivered by one coordinated team.',
  },
  {
    title: 'Business-Focused Technology',
    description: 'Practical architectures aligned with your daily operations and growth goals.',
  },
  {
    title: 'Modern Cloud Technologies',
    description: 'Proven cloud platforms, containers, and automation built for high availability.',
  },
  {
    title: 'Secure and Scalable Systems',
    description: 'Segmented networks, hardened servers, and software permissions designed to grow.',
  },
  {
    title: 'Professional Technical Support',
    description: 'Responsive remote and on-site troubleshooting with clear communication.',
  },
  {
    title: 'Tailored Solutions',
    description: 'Systems scoped specifically to your premises, team size, and operational workflow.',
  },
  {
    title: 'Cost-Effective Services',
    description: 'Right-sized hardware and licensing that eliminate unnecessary IT overspend.',
  },
  {
    title: 'Long-Term Relationships',
    description: 'Full documentation and dependable technical partnership well beyond handover.',
  },
] as const;

export const ABOUT_DATA = {
  headline: 'Technology That Works for Your Business.',
  lead: 'SkyMax Technology helps businesses, organisations, startups, and institutions modernise operations through reliable IT infrastructure, cloud technologies, custom software, networking, and security systems.',
  body: 'Instead of coordinating disconnected contractors across software, servers, cabling, and CCTV, we bring every layer together into a unified, well-documented environment.',
  mission:
    'To design, deploy, and maintain dependable software, cloud, and network systems that help organisations operate securely and scale with confidence.',
  vision:
    'To be a trusted long-term technology partner known for engineering discipline, clarity, and everyday operational reliability.',
  approach:
    'We assess your environment honestly, design right-sized solutions, test thoroughly before handover, and provide dependable ongoing support.',
  values: [
    {
      name: 'Reliability',
      detail: 'Resilient systems built for consistent daily uptime.',
    },
    {
      name: 'Innovation',
      detail: 'Modern cloud, DevOps, and web tools applied practically.',
    },
    {
      name: 'Security',
      detail: 'Access control, segmentation, and backups at every layer.',
    },
    {
      name: 'Professionalism',
      detail: 'Clean installations, clear timelines, and full documentation.',
    },
    {
      name: 'Continuous Improvement',
      detail: 'Proactive updates and refinement as your business evolves.',
    },
  ],
} as const;

export const TECH_EXPERTISE: TechCategory[] = [
  {
    category: 'Cloud',
    summary: 'Multi-cloud infrastructure, migrations, and disaster recovery.',
    items: [
      {name: 'AWS', role: 'EC2, VPC, S3 & RDS Infrastructure', code: 'AWS'},
      {name: 'Microsoft Azure', role: 'Enterprise Cloud & Hybrid Identity', code: 'AZR'},
      {name: 'Google Cloud', role: 'Compute Engine, Cloud Run & Storage', code: 'GCP'},
    ],
  },
  {
    category: 'DevOps',
    summary: 'Containerisation, CI/CD pipelines, and infrastructure as code.',
    items: [
      {name: 'Docker', role: 'Application Containerisation', code: 'DOC'},
      {name: 'Kubernetes', role: 'Container Orchestration & Scaling', code: 'K8S'},
      {name: 'Jenkins', role: 'Automated Build & Release Pipelines', code: 'JNK'},
      {name: 'GitHub Actions', role: 'Continuous Integration & Delivery', code: 'GHA'},
      {name: 'Terraform', role: 'Declarative Cloud Provisioning', code: 'TRF'},
      {name: 'Ansible', role: 'Automated Server Configuration', code: 'ANS'},
    ],
  },
  {
    category: 'Systems',
    summary: 'Directory governance, virtualisation, and server lifecycle care.',
    items: [
      {name: 'Windows Server', role: 'Domain Services, DFS & Enterprise Roles', code: 'WIN'},
      {name: 'Linux', role: 'Ubuntu, RHEL & Debian Production Hosts', code: 'LNX'},
      {name: 'Active Directory', role: 'Identity, GPO & Access Governance', code: 'AD'},
      {name: 'Hyper-V', role: 'Server Virtualisation & Host Clusters', code: 'HYP'},
    ],
  },
  {
    category: 'Networking',
    summary: 'Enterprise routing, UniFi wireless, VLANs, and encrypted VPNs.',
    items: [
      {name: 'MikroTik', role: 'Routing, Bandwidth Control & Failover', code: 'MTK'},
      {name: 'Ubiquiti', role: 'Switching, Gateways & Point-to-Point', code: 'UBQ'},
      {name: 'UniFi', role: 'Managed Multi-Floor Business Wi-Fi', code: 'UFI'},
      {name: 'TCP/IP', role: 'Subnetting, VLANs, DNS & DHCP Design', code: 'NET'},
      {name: 'VPN', role: 'Site-to-Site & Remote WireGuard/IPsec', code: 'VPN'},
    ],
  },
  {
    category: 'Development',
    summary: 'Responsive web interfaces, APIs, and scalable cloud databases.',
    items: [
      {name: 'React', role: 'Component-Driven Web Applications', code: 'RCT'},
      {name: 'Node.js', role: 'Scalable REST APIs & Business Logic', code: 'NOD'},
      {name: 'JavaScript', role: 'Modern Full-Stack Web Engineering', code: 'JS'},
      {name: 'Firebase', role: 'Auth, Hosting & Real-Time App Services', code: 'FB'},
      {name: 'Firestore', role: 'Scalable NoSQL Document Persistence', code: 'FST'},
    ],
  },
  {
    category: 'Security',
    summary: 'Perimeter firewalls, IP surveillance, NVR storage, and access control.',
    items: [
      {name: 'Hikvision', role: 'IP Cameras, NVRs & Access Control', code: 'HIK'},
      {name: 'Dahua', role: 'Commercial Surveillance & Biometrics', code: 'DAH'},
      {name: 'CCTV', role: 'Structured PoE Camera & Remote Viewing', code: 'CAM'},
      {name: 'Firewalls', role: 'Rule Hardening, IDS & Traffic Filtering', code: 'FWL'},
    ],
  },
];

export const DEMO_PROJECTS: ProjectItem[] = [
  {
    id: 'demo-erp-pos',
    title: 'Multi-Branch Retail POS & Inventory Platform',
    category: 'Web Applications',
    shortDescription:
      'Sample web platform unifying point-of-sale billing, branch stock transfers, and role-based reporting.',
    fullOverview:
      'A demonstration architecture showing how multi-branch retail and distribution businesses centralise stock levels, cashier terminals, and management dashboards in real time.',
    architectureHighlights: [
      'Real-time branch stock sync and low-inventory alerts',
      'Role-based permissions for cashiers, managers, and auditors',
      'Responsive browser POS with receipt printing and Z-reports',
      'Encrypted cloud persistence with automated daily backups',
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'Firebase', 'Firestore'],
    image: '/src/assets/images/project_web_platform_1795449872789.jpg',
    imageAlt: 'Demonstration web application interface displayed on a modern desktop monitor and laptop',
    isDemo: true,
    demoScopeLabel: 'Demonstration Project · Sample Web Architecture',
  },
  {
    id: 'demo-cloud-cicd',
    title: 'Containerised Cloud Hosting & CI/CD Blueprint',
    category: 'Cloud and DevOps',
    shortDescription:
      'Sample cloud deployment architecture with Docker, Kubernetes, GitHub Actions, and automated backups.',
    fullOverview:
      'A demonstration DevOps blueprint illustrating zero-downtime releases, Infrastructure-as-Code provisioning, and health monitoring across AWS and Linux.',
    architectureHighlights: [
      'Dockerised services orchestrated with Kubernetes rolling updates',
      'Automated test and build pipelines via GitHub Actions & Jenkins',
      'Reproducible cloud provisioning with Terraform and Ansible',
      'Automated off-site snapshots, TLS, and uptime alerting',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Linux'],
    image: '/src/assets/images/project_cloud_devops_1795449872144.jpg',
    imageAlt: 'Demonstration cloud server rack blades and structured fiber optic cabling',
    isDemo: true,
    demoScopeLabel: 'Demonstration Project · Sample Cloud Blueprint',
  },
  {
    id: 'demo-hybrid-ad',
    title: 'Enterprise Active Directory & Hyper-V Environment',
    category: 'IT Infrastructure',
    shortDescription:
      'Sample office infrastructure consolidating user governance, Microsoft 365 sync, and virtualised servers.',
    fullOverview:
      'A demonstration systems architecture showing how mid-sized offices replace ad-hoc PCs with centralised authentication, Group Policy security, and Hyper-V hosts.',
    architectureHighlights: [
      'Windows Server Active Directory domain with structured GPOs',
      'Hyper-V virtualisation separating domain, file, and app servers',
      'DFS file shares with granular department permissions',
      'Verified image backups and Microsoft 365 identity sync',
    ],
    technologies: ['Windows Server', 'Active Directory', 'Hyper-V', 'Microsoft Azure', 'Linux'],
    image: '/src/assets/images/about_tech_workspace_1795449872355.jpg',
    imageAlt: 'Demonstration systems administration workstation monitoring server infrastructure',
    isDemo: true,
    demoScopeLabel: 'Demonstration Project · Sample Systems Architecture',
  },
  {
    id: 'demo-unifi-network',
    title: 'Segmented Corporate LAN, MikroTik & UniFi Wi-Fi',
    category: 'Networking',
    shortDescription:
      'Sample multi-floor office network with dual-ISP MikroTik failover, VLAN isolation, and UniFi Wi-Fi.',
    fullOverview:
      'A demonstration network design illustrating uninterrupted dual-WAN connectivity, structured cabling, and strict VLAN separation across corporate, guest, and CCTV devices.',
    architectureHighlights: [
      'MikroTik core router with automated dual-ISP WAN failover',
      'VLAN isolation for Corporate, Guest Wi-Fi, VoIP, and Security',
      'Ceiling-mounted Ubiquiti UniFi access points for seamless roaming',
      'Encrypted WireGuard/IPsec site-to-site branch VPN',
    ],
    technologies: ['MikroTik', 'Ubiquiti', 'UniFi', 'TCP/IP', 'VPN', 'Firewalls'],
    image: '/src/assets/images/hero_enterprise_tech_1795449872221.jpg',
    imageAlt: 'Demonstration enterprise network operations and switching infrastructure',
    isDemo: true,
    demoScopeLabel: 'Demonstration Project · Sample Network Topology',
  },
  {
    id: 'demo-cctv-access',
    title: 'Commercial IP CCTV & Biometric Access Blueprint',
    category: 'CCTV and Security',
    shortDescription:
      'Sample physical security setup integrating PoE Hikvision/Dahua cameras, NVR storage, and biometric entry.',
    fullOverview:
      'A demonstration commercial security layout pairing perimeter and lobby IP surveillance with isolated security VLANs, biometric attendance, and access control.',
    architectureHighlights: [
      'Hikvision & Dahua PoE IP cameras across entries and corridors',
      'Dedicated security VLAN isolating NVR storage from guest Wi-Fi',
      'Biometric attendance terminal with HR shift export support',
      'Encrypted remote mobile and desktop monitoring setup',
    ],
    technologies: ['Hikvision', 'Dahua', 'CCTV', 'Firewalls', 'TCP/IP'],
    image: '/src/assets/images/project_network_security_1795449872012.jpg',
    imageAlt: 'Demonstration ceiling-mounted commercial IP dome camera and enterprise wireless access point',
    isDemo: true,
    demoScopeLabel: 'Demonstration Project · Sample Security Layout',
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Discuss goals, premises, and budget via call, WhatsApp, or on-site meeting.',
    outcome: 'Aligned objectives',
  },
  {
    step: '02',
    title: 'Requirements Assessment',
    description: 'Audit existing software, servers, network coverage, or security blind spots.',
    outcome: 'Verified technical scope',
  },
  {
    step: '03',
    title: 'Solution Design',
    description: 'Deliver a clear architecture plan, hardware list, timeline, and quotation.',
    outcome: 'Approved blueprint',
  },
  {
    step: '04',
    title: 'Implementation & Deployment',
    description: 'Build software, configure cloud/servers, install cabling, or mount security hardware.',
    outcome: 'Production-ready build',
  },
  {
    step: '05',
    title: 'Testing & Handover',
    description: 'Verify failover, backups, and security, then train staff with full documentation.',
    outcome: 'Sign-off & runbooks',
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description: 'Provide proactive maintenance, patching, troubleshooting, and future scaling.',
    outcome: 'Long-term reliability',
  },
];
